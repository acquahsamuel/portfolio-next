"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CardWithOverlay() {
  const pathname = usePathname();
  return (
    <div className={''}>
            <div className="flex justify-between">

              <div className="project_slider flex">

                <div className="img_1 mr-3"> 
                  <img className="w-25 h-25 rounded-lg -skew-y-3 shadow-md hover:skew-y-0 transition-transform duration-300 ease-in-out" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-src"   />
                </div>


                <div className="img_2"> 
                  <img className="w-25 h-25 rounded-lg skew-y-3 shadow-md hover:skew-y-0 transition-transform duration-300 ease-in-out" src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-src"   />
                </div>
             </div>
          </div>
    </div>
  );
}

