export function Spacer({
  children,
  className,
  horizontal = false,
  vertical = false,
}: {
  children: React.ReactNode;
  className?: string;
  horizontal?: boolean;
  vertical?: boolean;
}) {
  return (
    <div
      className={`${horizontal ? "px-4 sm:px-8 lg:px-12" : ""}
         ${
           vertical ? "mb-[100px]" : ""
         } ${className}`}
    >
      {children}
    </div>
  );
}
