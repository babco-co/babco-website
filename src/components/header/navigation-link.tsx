"use client";
import Link from "next/link";
import { useTransitionClick } from "@/lib/hooks/use-transition-click";

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
  const handleClick = useTransitionClick(href, onClick);

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
    <Link
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        handleClick(e);
      }}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
