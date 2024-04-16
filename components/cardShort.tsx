"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


interface CardProps {
    logo_url: string;
    project_title: string;
    project_description: string;
}
 
export default function CardShort({ logo_url, project_title, project_description } : CardProps) {
  const pathname = usePathname();
  return (
    <div>
      <div className="main_card flex my-8  bg-gray-100 leading-9 rounded-2xl p-6">
        <div className="section_2 mx-3">
          <div>
            <p className="text-sm text-gray-500"> {logo_url} </p>
            <h3 className="font-bold"> {project_title} </h3>
            <p className="text-sm  mb-2"> { project_description} </p>
          </div>
        </div>
      </div>

    </div>
  );
}
