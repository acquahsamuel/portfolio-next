"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';

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
      <div className="main_card my-2 bg-gray-100 rounded-lg p-5">
        <div className="section_2 mx-3">
          <div>
            <div className="w-20">
                <Image  width={100}  height={100} alt={project_title}  src={logo_url} className=" w-12 h-12 rounded-full object-cover" />
                <div className="absolute inset-0 rounded-full"></div>
            </div>
            <h3 className="font-bold"> {project_title} </h3>
            <p className="text-sm  mb-2"> { project_description} </p>
             
            <div className="flex flex-wrap">
              {tags && tags.map((tag, index) => (
                <span key={index} className="text-teal-800 text-xs font-medium me-2 mb-2 px-2.5 rounded-full dark:bg-gray-900  border">
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


