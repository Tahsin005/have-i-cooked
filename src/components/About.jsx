import TiltedCard from "./TiltedCard";
import tahsinImage from '../images/Tahsin Ferdous.png';

const About = () => {
    return (
        <section id="about">
            <div className="group relative text-gray-300 text-md leading-relaxed px-4">
                <div
                    className="w-[280px] h-auto absolute top-[220px] left-1/2 transform -translate-x-1/2 opacity-0 scale-75
                               group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-[-120px]
                               transition-all duration-500 ease-in-out border-black
                               pointer-events-none z-50 rounded-lg shadow-lg animate-sway"
                >
                    <TiltedCard
                        imageSrc={tahsinImage}
                        altText="MD. Tahsin Ferdous"
                        captionText="Tahsin"
                        containerHeight="200px"
                        containerWidth="200px"
                        imageHeight="200px"
                        imageWidth="200px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className="tilted-card-demo-text px-2 text-black mt-4 ms-2 bg-gray-500 rounded-lg bg-opacity-85">
                                Tahsin
                            </p>
                        }
                    />
                </div>

                {/* About Text */}
                I am a developer focused on building clean, accessible, and maintainable web applications. I love problem solving and learning new things.
                <br />
                Currently, I'm working as jr. software engineer at <span className="text-[#ab66ff]">Affpilot</span>.
                <br /><br />
                Outside coding, I enjoy speedcubing, football and beatboxing.
            </div>
        </section>
    );
};

export default About;
