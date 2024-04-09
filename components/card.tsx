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



        <div className="main_card flex my-4 bg-slate-100 p-10">
           <div className="section_1">
                   <img src="" alt="company_logo" />
             </div>

             <div className="section_2 mx-3">
                 <div >
                    <p>  2021 - Today </p>
                    <h3> Senior Developer and VP of Product at Qonot </h3>
                    <p> London, UK </p>
                 </div>

                 <div>
                    <p className="text-sm"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nam nulla labore dolorum vero
                         nisi ipsum rerum quas perspiciatis eius ipsam quibusdam reprehenderit,
                         Molestias repudiandae atque ipsa iusto ab maxime iure? Atque aut numquam qui nemo. Sit.</p>
                 </div>
            </div>
        </div>


        <div className="main_card flex bg-slate-100 p-10 my-4">
           <div className="section_1">
                   <img src="" alt="company_logo" />
             </div>

             <div className="section_2 mx-3">
                 <div >
                    <p>  2021 - Today </p>
                    <h3> Senior Developer and VP of Product at Qonot </h3>
                    <p> London, UK </p>
                 </div>

                 <div>
                    <p className="text-sm"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nam nulla labore dolorum vero
                         nisi ipsum rerum quas perspiciatis eius ipsam quibusdam reprehenderit,
                         Molestias repudiandae atque ipsa iusto ab maxime iure? Atque aut numquam qui nemo. Sit.</p>
                 </div>
            </div>
        </div>



        <div className="main_card flex bg-slate-100 p-10">
           <div className="section_1">
                   <img src="" alt="company_logo" />
             </div>

             <div className="section_2 mx-3">
                 <div >
                    <p>  2021 - Today </p>
                    <h3> Senior Developer and VP of Product at Qonot </h3>
                    <p> London, UK </p>
                 </div>

                 <div>
                    <p className="text-sm"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nam nulla labore dolorum vero
                         nisi ipsum rerum quas perspiciatis eius ipsam quibusdam reprehenderit,
                         Molestias repudiandae atque ipsa iusto ab maxime iure? Atque aut numquam qui nemo. Sit.</p>
                 </div>
            </div>
        </div>



    </div>
  );
}
