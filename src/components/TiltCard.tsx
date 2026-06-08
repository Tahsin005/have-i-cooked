export const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative ${className || ''}`}>
      {children}
    </div>
  );
};
