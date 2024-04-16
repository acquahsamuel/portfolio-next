"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


interface CardProps {
    logo_url: string;
    project_title: string;
    project_description: string;
    tags: string[];
}

 
export default function CardSideHustle({ logo_url, project_title, project_description ,tags} : CardProps) {
  const pathname = usePathname();
  return (
    <div>
      <div className="main_card my-2 bg-slate-100 rounded-lg p-5">
        <div className="section_2 mx-3">
          <div>
            <div className="w-20">
                <img  src={logo_url} className="h-12 w-12 rounded-full object-cover" />
                <div className="absolute inset-0 rounded-full"></div>
            </div>
            <h3 className="font-bold"> {project_title} </h3>
            <p className="text-sm  mb-2"> { project_description} </p>
             
            <div className="flex flex-wrap">
              {tags && tags.map((tag, index) => (
                <span key={index} className="bg-green-100 text-green-800 text-xs font-medium me-2 mb-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


