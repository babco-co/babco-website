"use client";
import Link from "next/link";
import { useTransition } from "@/components/page-transition";

interface NavigationLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  onClick?: () => void;
}

const NavigationLink = ({
  href,
  className,
  children,
  external = false,
  onClick,
}: NavigationLinkProps) => {
  const { startTransition } = useTransition();

  const handleClick = (e: React.MouseEvent) => {
    if (!external) {
      e.preventDefault();
      onClick?.();
      startTransition(href);
    }
  };

  if (external) {
    return (
      <Link
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default NavigationLink;