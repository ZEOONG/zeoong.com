"use client";

export const runtime = "edge"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return null;
}
