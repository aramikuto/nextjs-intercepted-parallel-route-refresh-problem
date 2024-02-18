"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const router = useRouter()
  return <div>
    <button onClick={router.refresh}>Refresh</button>
    <br />
    <Link href="/page">Navigate to intercepted parallel route</Link>
  </div>;
}
