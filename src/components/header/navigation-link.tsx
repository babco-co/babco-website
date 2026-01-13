import { cn } from "@/lib/utils/cn";
import Link from "next/link";

type NavigationLinkProps = {
  href: string;
  text: string;
  external?: boolean;
  className?: string;
};

const NavigationLink = ({
  href,
  text,
  external,
  className,
}: NavigationLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "text-xs font-normal uppercase",
        "text-text-primary-light dark:text-text-primary-dark",
        "hover:text-brand-light dark:hover:text-brand-dark",
        "transition-colors duration-200",
        className
      )}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {text}
    </Link>
  );
};

export default NavigationLink;
