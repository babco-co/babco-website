"use client";
import Link from "next/link";
import { useTransition } from "@/components/page-transition";

interface NavigationLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}

const NavigationLink = ({
  href,
  className,
  children,
  external = false,
}: NavigationLinkProps) => {
  const { startTransition } = useTransition();

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
        startTransition(href);
      }}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
