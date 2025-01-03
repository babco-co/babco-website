export const Spacer = ({
  children,
  className,
  horizontal = false,
  vertical = false,
}: {
  children: React.ReactNode;
  className?: string;
  horizontal?: boolean;
  vertical?: boolean;
}) => (
  <div
    className={`${horizontal ? "px-4 sm:px-8 lg:px-12" : ""}
         ${
           vertical ? "mb-[120px] sm:mb-[160px] lg:mb-[180px] 2xl:mb-[220px]" : ""
         } ${className}`}
  >
    {children}
  </div>
);
