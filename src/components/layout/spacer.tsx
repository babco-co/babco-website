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
           vertical ? "mb-[120px] sm:mb-[160px] lg:mb-[226px] xl:mb-[280px]" : ""
         } ${className}`}
  >
    {children}
  </div>
);
