import { ReactNode } from "react";

const GlassBox = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div
      className={`${className} bg-white border border-white shadow-2xl bg-opacity-10 border-opacity-10`}>
      {children}
    </div>
  );
};

export default GlassBox;
