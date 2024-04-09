"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CardWithOverlay() {
  const pathname = usePathname();
  return (
    <div className={''}>
            <div className="flex justify-between">
                <div >
                    Card 1
                </div>

                <div>
                    Card 1
                </div>
            </div>
    </div>
  );
}

