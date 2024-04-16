import Image from "next/image";
import Header from "../../../components/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
 
export default function OpenSourcePage() {
  return (
    <main>
          <div className="main-container">
             <Header />

             <div>
                <p> Built with nextjs / open-source</p>
             </div>
             {/* <Link className={buttonVariants({ variant: "outline" })}>Click here</Link> */}
          </div>  
    </main>
  );
}
