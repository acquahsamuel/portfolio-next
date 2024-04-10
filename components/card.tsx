"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export const EXPERIENCE = [
    {
        year: "2021 - Today",
        role: "Senior Developer and VP of Product",
        location_of_job: "London, UK",
        job_description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nam nulla labore dolorum vero nisi ipsum rerum quas perspiciatis eius ipsam quibusdam reprehenderit, Molestias repudiandae atque ipsa iusto ab maxime iure? Atque aut numquam qui nemo. Sit.",
        company_logo: "company_logo_1.jpg"
    },
    {
        year: "2021 - Today",
        role: "Senior Developer and VP of Product",
        location_of_job: "London, UK",
        job_description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nam nulla labore dolorum vero nisi ipsum rerum quas perspiciatis eius ipsam quibusdam reprehenderit, Molestias repudiandae atque ipsa iusto ab maxime iure? Atque aut numquam qui nemo. Sit.",
        company_logo: "company_logo_1.jpg"

    },
    {
        year: "2021 - Today",
        role: "Senior Developer and VP of Product",
        location_of_job: "London, UK",
        job_description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nam nulla labore dolorum vero nisi ipsum rerum quas perspiciatis eius ipsam quibusdam reprehenderit, Molestias repudiandae atque ipsa iusto ab maxime iure? Atque aut numquam qui nemo. Sit.",
        company_logo: "company_logo_1.jpg"

    }
]

export default function CardExperience() {
  const pathname = usePathname();
  return (
    <div className={''}>



        <div className="main_card flex my-8 bg-slate-100 rounded-lg p-10">

             <div className="section_1 w-20">
                   <img className="w-12 h-12 bg-cover bg-red-600 rounded-md" src="https://mir-s3-cdn-cf.behance.net/projects/404/c79fc5191735605.65d0904de9a03.png" alt="company_logo" />
             </div>

             <div className="section_2 mx-3">
                 <div >
                    <p className="text-sm text-gray-500 italic">  2021 - Today </p>
                    <h3 className="font-bold"> Frontend Engineer at Stanbic Bank Ghana </h3>
                    <p className="text-sm mb-2"> Ghana, Greater Accra </p>
                 </div>

                 <div>
                    <p className="text-sm text-gray-500">  
                        Building customer centric solution for business operation and growth <br />
                        Refactoring and upgrade of internal tool for smooth operation and additional features 
                       </p>
                 </div>
            </div>
        </div>


        <div className="main_card flex bg-slate-100 p-10 my-4">
           <div className="section_1 w-20 ">
                   <img  className="w-10" src="https://media.licdn.com/dms/image/C4D0BAQGPkRhCyu_j5w/company-logo_200_200/0/1648750238279?e=2147483647&v=beta&t=cMhInQBJuYuLiH8oK6UVz2JbnFilXkJj9AAtemB6WX8" alt="company_logo" />
             </div>

             <div className="section_2 mx-3">
                 <div >
                    <p className="text-sm text-gray-500 italic">  2021 - Today </p>
                    <h3  className="font-bold"> Frontend Engineer at MyHealthCOP  </h3>
                    <p className="text-sm"> Ghana, Remote </p>
                 </div>

                 <div>
                    <p className="text-sm text-gray-500">  
                        Building customer centric solution for business operation and growth <br />
                        Refactoring and upgrade of internal tool for smooth operation and additional features 
                       </p>
                 </div>
            </div>
        </div>



        <div className="main_card flex bg-slate-100 p-10">
             <div className="section_1 w-20 ">
                   <img  className="w-10" src="https://media.licdn.com/dms/image/C4D0BAQGPkRhCyu_j5w/company-logo_200_200/0/1648750238279?e=2147483647&v=beta&t=cMhInQBJuYuLiH8oK6UVz2JbnFilXkJj9AAtemB6WX8" alt="company_logo" />
             </div>

             <div className="section_2 mx-3">
                 <div >
                    <p className="text-sm text-gray-500 italic">  2021 - Today </p>
                    <h3 className="font-bold"> Xardtek Technologies  </h3>
                    <p> London, UK </p>
                 </div>

                 <div>
                    <p className="text-sm text-gray-500">  
                        Building customer centric solution for business operation and growth <br />
                        Refactoring and upgrade of internal tool for smooth operation and additional features 
                       </p>
                 </div>
            </div>
        </div>



    </div>
  );
}
