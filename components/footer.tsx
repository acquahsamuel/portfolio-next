"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className={''}>
        <div>
            <h3> iamsamuel </h3>

            <div>
            <ul className="flex">
                <li className="mr-3"> <Link className={pathname === "/" ? "active" : ""} href="/" data-name="profile"> Linkedin </Link> </li>
                <li className="mr-2"> <Link className={pathname === "/" ? "active" : ""} href="" data-name="projects"> Gitub </Link> </li>
                <li className="mr-2"> <Link className={pathname === "/" ? "active" : ""} href="" data-name="articles"> Facebook </Link> </li>
               
            </ul>
            </div>
        </div>
    </div>
  );
}
