"use client";

import { useEffect } from "react";
// import { useRouter } from "next/navigation";

export default function MerchPage() {
  // const router = useRouter();

  useEffect(() => {
    // Redirect to the external merch link
    window.location.href =
      "https://babco-shop.fourthwall.com/en-eur/collections/the-babs";
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-text-primary-light dark:text-text-primary-dark">
        Redirecting to merch store...
      </p>
    </div>
  );
}
