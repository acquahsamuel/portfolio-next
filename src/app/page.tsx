import Image from "next/image";
// import  HomePage  from "@/app/home/page";
import Header from "../../components/navbar";
import CardExperience from "../../components/card";
import CardWithOverlay from "../../components/cardWithOverlay";

export default function Home() {
  return (
    <main>
          <div className="main-container">

            <Header/>

             <div className="text-center py-12">
                <div className="profile">
                    <img src="" alt=""   />
                    <h3 className="text-xl font-bold"> Samuel Acquah </h3>

                    <p className="text-sm my-2"> Software Engineer | .ts. + .js | Building Startups | Dev Tools | Opensource | Innovation | Growth </p>
                </div>

                 <div className="my-3">
                   <button className="rounded-full bg-black text-white px-5 py-2 text-sm"> Available For Work </button>
                 </div>
             </div>


             <div className="project_slider flex">

                <div className="img_1 mr-3"> 
                  <img className="w-25 h-25 rounded-lg" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-src"   />
                </div>
                <div className="img_2 mr-3"> 
                <img className="w-25 h-25 rounded-lg" src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-src"   />

                </div>
                <div className="img_3"> 
                <img className="w-25 h-25 rounded-lg" src="https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-src"   />
                 </div>
             </div>


              
              <CardExperience />

              <CardWithOverlay />


          </div>
    </main>
  );
}
