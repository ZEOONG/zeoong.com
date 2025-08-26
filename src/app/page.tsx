"use client";

export const runtime = "edge";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Main() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return null;
}
