/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree, type BufferGeometryNode, type MaterialNode, type ThreeEvent } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  type RapierRigidBody,
  type RigidBodyProps
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

import cardGLB from '@/assets/lanyard/card.glb';
import lanyard from '@/assets/lanyard/lanyard4.png';

extend({ MeshLineGeometry, MeshLineMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: BufferGeometryNode<MeshLineGeometry, typeof MeshLineGeometry>;
    meshLineMaterial: Omit<
      MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>,
      'resolution' | 'repeat' | 'useMap'
    > & {
      resolution?: [number, number] | number[] | THREE.Vector2;
      repeat?: [number, number] | number[] | THREE.Vector2;
      useMap?: boolean | number;
    };
  }
}

const BLANK_PIXEL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

const FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 };
const BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 };

export interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  frontImage?: string | null;
  backImage?: string | null;
  imageFit?: 'cover' | 'contain';
  lanyardImage?: string | null;
  lanyardWidth?: number;
  className?: string;
  style?: React.CSSProperties;
  anchorPosition?: [number, number, number];
  segmentLength?: number;
  cardScale?: number;
  onLoaded?: () => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onHoverChange?: (hovered: boolean) => void;
  nudgeRef?: React.MutableRefObject<(() => void) | null>;
}

export default function Lanyard({
  position = [0, 0, 25],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 0.8,
  className = 'relative z-0 w-full h-full flex justify-center items-center',
  style,
  anchorPosition = [0, 4.4, 0],
  segmentLength = 1.15,
  cardScale = 2.1,
  onLoaded,
  onDragStart,
  onDragEnd,
  onHoverChange,
  nudgeRef,
}: LanyardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = (): void => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hide canvas immediately on page unload / reload before WebGL context teardown
  useEffect(() => {
    const handleUnload = () => {
      if (containerRef.current) {
        containerRef.current.style.opacity = '0';
        containerRef.current.style.visibility = 'hidden';
        containerRef.current.style.display = 'none';
      }
    };
    window.addEventListener('beforeunload', handleUnload, { capture: true });
    window.addEventListener('pagehide', handleUnload, { capture: true });
    return () => {
      window.removeEventListener('beforeunload', handleUnload, { capture: true });
      window.removeEventListener('pagehide', handleUnload, { capture: true });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-lanyard="true"
      className={`${className} transition-opacity duration-700 ease-out`}
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0,
        backgroundColor: 'transparent',
      }}
    >
      <Canvas
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent, antialias: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1);
          const canvas = gl.domElement;
          if (canvas) {
            canvas.style.backgroundColor = 'transparent';
            // Start with pointer-events: none; proximity detection in Band will toggle to auto when near badge
            canvas.style.pointerEvents = 'none';
            canvas.addEventListener('webglcontextlost', (e) => {
              e.preventDefault();
              canvas.style.opacity = '0';
              if (containerRef.current) containerRef.current.style.opacity = '0';
            });
            canvas.addEventListener('webglcontextrestored', () => {
              canvas.style.opacity = '1';
              if (containerRef.current) containerRef.current.style.opacity = '1';
            });
          }
        }}
        style={{ pointerEvents: 'none', backgroundColor: 'transparent' }}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band
            isMobile={isMobile}
            frontImage={frontImage}
            backImage={backImage}
            imageFit={imageFit}
            lanyardImage={lanyardImage}
            lanyardWidth={lanyardWidth}
            anchorPosition={anchorPosition}
            segmentLength={segmentLength}
            cardScale={cardScale}
            onReady={() => {
              setIsLoaded(true);
              onLoaded?.();
            }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onHoverChange={onHoverChange}
            nudgeRef={nudgeRef}
          />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
  frontImage?: string | null;
  backImage?: string | null;
  imageFit?: 'cover' | 'contain';
  lanyardImage?: string | null;
  lanyardWidth?: number;
  anchorPosition?: [number, number, number];
  segmentLength?: number;
  cardScale?: number;
  onReady?: () => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onHoverChange?: (hovered: boolean) => void;
  nudgeRef?: React.MutableRefObject<(() => void) | null>;
}

type LanyardRigidBody = RapierRigidBody & {
  lerped?: THREE.Vector3;
};

function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 0.8,
  anchorPosition = [0, 4.4, 0],
  segmentLength = 1.15,
  cardScale = 2.1,
  onReady,
  onDragStart,
  onDragEnd,
  onHoverChange,
  nudgeRef,
}: BandProps) {
  const scaleRatio = cardScale / 2.25;
  const band = useRef<THREE.Mesh<InstanceType<typeof MeshLineGeometry>, InstanceType<typeof MeshLineMaterial>>>(null!);
  const fixed = useRef<RapierRigidBody>(null!);
  const j1 = useRef<LanyardRigidBody>(null!);
  const j2 = useRef<LanyardRigidBody>(null!);
  const j3 = useRef<RapierRigidBody>(null!);
  const card = useRef<RapierRigidBody>(null!);

  const vec = useMemo(() => new THREE.Vector3(), []);
  const ang = useMemo(() => new THREE.Vector3(), []);
  const rot = useMemo(() => new THREE.Vector3(), []);
  const dir = useMemo(() => new THREE.Vector3(), []);

  // Drag velocity tracking for kinetic release swing
  const lastDragPos = useRef<THREE.Vector3 | null>(null);
  const dragVelocity = useRef<THREE.Vector3>(new THREE.Vector3());
  const isDraggingRef = useRef(false);

  // Dynamic anchor horizontal position tracking
  const currentAnchorX = useRef(anchorPosition[0]);
  useEffect(() => {
    currentAnchorX.current = anchorPosition[0];
  }, [anchorPosition]);

  const segmentProps: RigidBodyProps = {
    type: 'dynamic',
    canSleep: true,
    colliders: false,
    angularDamping: 2.5,
    linearDamping: 2.5
  };

  const getLerped = (body: LanyardRigidBody): THREE.Vector3 => {
    if (!body.lerped) {
      const t = body.translation();
      body.lerped = new THREE.Vector3(t.x, t.y, t.z);
    }
    return body.lerped;
  };

  const { nodes, materials } = useGLTF(cardGLB) as any;
  const texture = useTexture(lanyardImage || lanyard);
  const frontTex = useTexture(frontImage || BLANK_PIXEL);
  const backTex = useTexture(backImage || BLANK_PIXEL);

  const cardMap = useMemo(() => {
    const baseMap = materials.base.map as THREE.Texture;
    if (!frontImage && !backImage) return baseMap;

    const baseImg = baseMap.image as any;
    const W = baseImg.width;
    const H = baseImg.height;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    if (!ctx) return baseMap;
    ctx.drawImage(baseImg, 0, 0, W, H);

    const drawFitted = (img: any, rect: typeof FRONT_UV_RECT) => {
      const rx = rect.x * W;
      const ry = rect.y * H;
      const rw = rect.w * W;
      const rh = rect.h * H;
      const pick = imageFit === 'contain' ? Math.min : Math.max;
      const scale = pick(rw / img.width, rh / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      const dx = rx + (rw - dw) / 2;
      const dy = ry + (rh - dh) / 2;
      ctx.save();
      ctx.beginPath();
      ctx.rect(rx, ry, rw, rh);
      ctx.clip();
      ctx.drawImage(img, dx, dy, dw, dh);
      ctx.restore();
    };

    if (frontImage && frontTex.image) drawFitted(frontTex.image, FRONT_UV_RECT);
    if (backImage && backTex.image) drawFitted(backTex.image, BACK_UV_RECT);

    const composite = new THREE.CanvasTexture(canvas);
    composite.colorSpace = THREE.SRGBColorSpace;
    composite.flipY = baseMap.flipY;
    composite.anisotropy = 16;
    composite.needsUpdate = true;
    return composite;
  }, [frontImage, backImage, imageFit, frontTex, backTex, materials.base.map]);

  // 6 points spline curve: clamp -> upright neck -> j2 -> j1 -> anchor -> offscreen continuation
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3()
      ])
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  // 3-segment chain connecting offscreen anchor to card clamp
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], segmentLength]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], segmentLength]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], segmentLength]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45 * scaleRatio, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [hovered, dragged]);

  // Handle external nudge via ref
  useEffect(() => {
    if (nudgeRef) {
      nudgeRef.current = () => {
        if (card.current) {
          card.current.wakeUp();
          const dir = Math.random() > 0.5 ? 1 : -1;
          const forceX = dir * (2.2 + Math.random() * 1.6);
          const forceY = -(0.25 + Math.random() * 0.35);
          card.current.applyImpulse({ x: forceX, y: forceY, z: 0 }, true);
        }
      };
    }
  }, [nudgeRef]);

  const readyFired = useRef(false);
  const isHoveredRef = useRef(false);
  const cardScreenBounds = useRef({ minX: 0, maxX: 0, minY: 0, maxY: 0 });
  const { gl } = useThree();

  useEffect(() => {
    const onWindowPointerMove = (e: PointerEvent) => {
      if (isDraggingRef.current) return;
      const b = cardScreenBounds.current;
      const isOver =
        e.clientX >= b.minX &&
        e.clientX <= b.maxX &&
        e.clientY >= b.minY &&
        e.clientY <= b.maxY;

      const domCanvas = gl.domElement;
      if (domCanvas) {
        const targetPE = isOver ? 'auto' : 'none';
        if (domCanvas.style.pointerEvents !== targetPE) {
          domCanvas.style.pointerEvents = targetPE;
        }
        if (domCanvas.dataset.interactive !== (isOver ? 'true' : 'false')) {
          domCanvas.dataset.interactive = isOver ? 'true' : 'false';
        }
        hover(isOver);
        if (isHoveredRef.current !== isOver) {
          isHoveredRef.current = isOver;
          onHoverChange?.(isOver);
        }
      }
    };

    window.addEventListener('pointermove', onWindowPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onWindowPointerMove);
  }, [gl, onHoverChange]);

  useFrame((state, delta) => {
    if (!readyFired.current && card.current && band.current) {
      readyFired.current = true;
      if (card.current) {
        card.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
        card.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
      }
      requestAnimationFrame(() => {
        onReady?.();
      });
    }

    if (card.current && gl.domElement) {
      const cPos = card.current.translation();
      vec.set(cPos.x, cPos.y - 0.5 * scaleRatio, cPos.z).project(state.camera);
      const rect = gl.domElement.getBoundingClientRect();
      const cx = ((vec.x + 1) / 2) * rect.width + rect.left;
      const cy = ((-vec.y + 1) / 2) * rect.height + rect.top;
      const hw = 110 * scaleRatio;
      const hh = 160 * scaleRatio;
      cardScreenBounds.current = {
        minX: cx - hw,
        maxX: cx + hw,
        minY: cy - hh,
        maxY: cy + hh,
      };
    }

    // Top of camera frustum at z=0 (for fov=20, z=25: topY = 4.408)
    const topOfViewport = state.camera.position.z * Math.tan(((state.camera as THREE.PerspectiveCamera).fov * Math.PI) / 360);
    // Anchor sits comfortably off-screen above the viewport ceiling
    const ceilingY = topOfViewport + 1.2;

    const restX = anchorPosition[0];
    const isDragging = !!dragged && typeof dragged !== 'boolean';
    const cardPos = card.current ? card.current.translation() : null;

    // Dynamic horizontal anchor following: smoothly glides the anchor along the ceiling
    // to follow the card as it moves across the hero, creating an organic, free-flowing drape
    let targetAnchorX = restX;
    if (cardPos) {
      if (isDragging) {
        targetAnchorX = restX + (cardPos.x - restX) * 0.45;
      } else {
        targetAnchorX = restX + (cardPos.x - restX) * 0.15;
      }
    }

    currentAnchorX.current = THREE.MathUtils.lerp(
      currentAnchorX.current,
      targetAnchorX,
      delta * (isDragging ? 8 : 3.5)
    );

    if (fixed.current) {
      fixed.current.setNextKinematicTranslation({
        x: currentAnchorX.current,
        y: ceilingY,
        z: 0
      });
    }

    if (isDragging && typeof dragged !== 'boolean') {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));

      let targetX = vec.x - dragged.x;
      let targetY = vec.y - dragged.y;
      let targetZ = vec.z - dragged.z;

      // Constrain drag reach so card cannot tear away from the ribbon
      const currentAnchor = fixed.current.translation();
      const dx = targetX - currentAnchor.x;
      const dy = targetY - currentAnchor.y;
      const dist = Math.hypot(dx, dy);
      const maxReach = 8.0;
      if (dist > maxReach) {
        const s = maxReach / dist;
        targetX = currentAnchor.x + dx * s;
        targetY = currentAnchor.y + dy * s;
      }

      // Track drag velocity for kinetic fling
      if (lastDragPos.current) {
        dragVelocity.current.set(
          (targetX - lastDragPos.current.x) / Math.max(delta, 0.001),
          (targetY - lastDragPos.current.y) / Math.max(delta, 0.001),
          0
        );
      } else {
        lastDragPos.current = new THREE.Vector3(targetX, targetY, targetZ);
      }
      lastDragPos.current.set(targetX, targetY, targetZ);

      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: targetX,
        y: targetY,
        z: targetZ
      });
    } else {
      lastDragPos.current = null;
    }

    if (fixed.current && card.current && band.current) {
      // Lerp physics joints for smooth ribbon inertia
      [j1, j2].forEach(ref => {
        const lerped = getLerped(ref.current as LanyardRigidBody);
        const bodyPos = ref.current.translation();
        const bodyVec = new THREE.Vector3(bodyPos.x, bodyPos.y, bodyPos.z);
        const clampedDistance = Math.max(0.1, Math.min(1, lerped.distanceTo(bodyVec)));
        lerped.lerp(bodyVec, delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
      });

      const currentCardPos = card.current.translation();
      const cardRot = card.current.rotation(); // Rapier quaternion

      // Compute card upright orientation vector to ensure strap exits clamp rigidly upright
      const cardUp = new THREE.Vector3(0, 1, 0)
        .applyQuaternion(new THREE.Quaternion(cardRot.x, cardRot.y, cardRot.z, cardRot.w))
        .normalize();

      const pClamp = curve.points[0];
      const pClampNeck = curve.points[1];
      const pJ2 = curve.points[2];
      const pJ1 = curve.points[3];
      const pFixed = curve.points[4];
      const pTop = curve.points[5];

      pClamp.set(
        currentCardPos.x + cardUp.x * (1.45 * scaleRatio),
        currentCardPos.y + cardUp.y * (1.45 * scaleRatio),
        currentCardPos.z + cardUp.z * (1.45 * scaleRatio)
      );

      pClampNeck.copy(pClamp).addScaledVector(cardUp, 0.45 * scaleRatio);

      pJ2.copy(getLerped(j2.current as LanyardRigidBody));
      pJ1.copy(getLerped(j1.current as LanyardRigidBody));

      const anchorPos = fixed.current.translation();
      pFixed.set(anchorPos.x, anchorPos.y, anchorPos.z);

      const tanX = anchorPos.x - pJ1.x;
      const tanY = Math.max(0.3, anchorPos.y - pJ1.y);
      const tanLen = Math.hypot(tanX, tanY) || 1;
      const extendDist = 3.2;

      pTop.set(
        anchorPos.x + (tanX / tanLen) * extendDist,
        Math.max(ceilingY + 2.5, anchorPos.y + (tanY / tanLen) * extendDist),
        anchorPos.z
      );

      band.current.geometry.setPoints(curve.getPoints(isMobile ? 24 : 40) as unknown as THREE.Vector3[]);
      const angvel = card.current.angvel();
      ang.set(angvel.x, angvel.y, angvel.z);
      const rotation = card.current.rotation();
      rot.set(rotation.x, rotation.y, rotation.z);
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, true);
    }
  });

  // Centripetal Catmull-Rom prevents cusps, overshoots, and loops
  curve.curveType = 'centripetal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  const initX = anchorPosition[0];
  const initCeilingY = 5.6;

  return (
    <>
      <group position={[0, 0, 0]}>
        <RigidBody ref={fixed} position={[initX, initCeilingY, 0]} {...segmentProps} type="kinematicPosition" />
        <RigidBody position={[initX, initCeilingY - segmentLength, 0]} ref={j1} {...segmentProps} type="dynamic">
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[initX, initCeilingY - segmentLength * 2, 0]} ref={j2} {...segmentProps} type="dynamic">
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[initX, initCeilingY - segmentLength * 3, 0]} ref={j3} {...segmentProps} type="dynamic">
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[initX, initCeilingY - segmentLength * 3 - 1.45 * scaleRatio, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.8 * scaleRatio, 1.125 * scaleRatio, 0.01]} />
          <group
            scale={cardScale}
            position={[0, -1.2 * scaleRatio, -0.05]}
            onPointerOver={() => {
              hover(true);
              isHoveredRef.current = true;
              onHoverChange?.(true);
            }}
            onPointerOut={() => {
              if (!isDraggingRef.current) {
                hover(false);
                isHoveredRef.current = false;
                onHoverChange?.(false);
              }
            }}
            onPointerUp={(e: ThreeEvent<PointerEvent>) => {
              isDraggingRef.current = false;
              onDragEnd?.();
              (e.target as Element).releasePointerCapture(e.pointerId);
              drag(false);
              // Apply kinetic throw velocity
              if (card.current && dragVelocity.current) {
                const vel = dragVelocity.current;
                card.current.setLinvel(
                  {
                    x: Math.max(-25, Math.min(25, vel.x * 0.7)),
                    y: Math.max(-25, Math.min(25, vel.y * 0.7)),
                    z: 0
                  },
                  true
                );
              }
            }}
            onPointerDown={(e: ThreeEvent<PointerEvent>) => {
              isDraggingRef.current = true;
              onDragStart?.();
              const domCanvas = document.querySelector('[data-lanyard] canvas') as HTMLCanvasElement | null;
              if (domCanvas) domCanvas.style.pointerEvents = 'auto';
              (e.target as Element).setPointerCapture(e.pointerId);
              const t = card.current.translation();
              drag(new THREE.Vector3().copy(e.point).sub(vec.set(t.x, t.y, t.z)));
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={cardMap}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-5, 1]}
          lineWidth={lanyardWidth}
        />
      </mesh>
    </>
  );
}

useGLTF.preload(cardGLB);
