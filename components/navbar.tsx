"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className={''}>
      <ul className="flex z-10">
        <li className="mr-3"> <Link className={pathname === "/" ? "active" : ""} href="/" data-name="profile"> Profile </Link> </li>
        <li className="mr-2"> <Link className={pathname === "/articles" ? "active" : ""} href="/articles" data-name="articles"> Articles </Link> </li>
        <li className="mr-3"> <Link className={pathname === "/projects" ? "active" : ""} href="/open-source" data-name="open-source">Project & Tools</Link> </li>
      </ul>
    </div>
  );
}
