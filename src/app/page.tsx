import Image from "next/image";
import  HomePage  from "@/app/home/page";
import Header from "../../components/header";

export default function Home() {
  return (
    <main>
          <div className="main-container">
             {/* <HomePage /> */}
             <Header />
          </div>
    </main>
  );
}
