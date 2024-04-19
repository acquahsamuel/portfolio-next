"use client";

import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";


export const EXPERIENCE = [
  {
    year: "2021 - Today",
    role: "Frontend Engineer at Stanbic Bank Ghana",
    location_of_job: "Ghana, Greater Accra",
    job_description:"Building customer centric solution for business operation and growth. Refactoring and upgrade of internal tool for smooth operation and additional features",
    company_logo : "https://images.unsplash.com/photo-1713288971538-80084dbfc161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
  },
  {
    year: "2021 - Today",
    role: "Frontend Engineer at MyHealthCOP",
    location_of_job: "Ghana, Remote",
    job_description:" * Building customer centric solution for business operation and growth.  Refactoring and upgrade of internal tool for smooth operation and additional features",
   company_logo : "https://images.unsplash.com/photo-1713288971538-80084dbfc161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
    
  },
  {
    year: "2021 - Today",
    role: "Xardtek Technologies",
    location_of_job: "London, UK",
    job_description:"Building customer centric solution for business operation and growth.  Refactoring and upgrade of internal tool for , Refactoring and upgrade of internal tool for smooth operation and additional features",
    company_logo : "https://images.unsplash.com/photo-1713288971538-80084dbfc161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
    
  },
];

export default function CardExperience() {
  const pathname = usePathname();

  return (
    <div>
      {EXPERIENCE.map((exper, index) => (
        <div   key={index} className={`main_card flex my-8 ${index % 2 === 0 ? 'bg-gray-100' : ''} leading-9 rounded-2xl p-6`}>
          <div className="section_1 w-20">
          <div className="flex items-center">
            <div className="w-20">
                <Image width={100} height={100} className="rounded-full w-16 h-16 object-cover" src={exper.company_logo} alt={exper.company_logo} />
                <div className="absolute inset-0 rounded-full"></div>
            </div>
           </div>
          </div>
            
          <div className="section_2 mx-3">
            <div>
              <p className="text-sm text-gray-500 italic">{exper.year}</p>
              <h3 className="font-bold">{exper.role}</h3>
              <p className="text-sm font-light  mb-2">{exper.location_of_job}</p>
            </div>

            <div>
            <p className="text-sm text-gray-700 leading-5 font-extralight">{exper.job_description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

