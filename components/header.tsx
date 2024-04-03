"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <div>
      <ul className="header flex  mx-auto container py-2">
        <li className="mx-2"> <Link className={pathname === "/" ? "active" : ""} href="/profile" data-name="profile"> Profile </Link> </li>
        <li className="mx-2"> <Link className={pathname === "/projects" ? "active" : ""} href="/projects" data-name="projects"> Projects </Link> </li>
        <li className="mx-2"> <Link className={pathname === "/articles" ? "active" : ""} href="/articles" data-name="articles"> Articles </Link> </li>
        <li className="mx-2"> <Link className={pathname === "/open-source" ? "active" : ""} href="/open-source" data-name="open-source"> Open source </Link> </li>
      </ul>
    </div>
  );
}
