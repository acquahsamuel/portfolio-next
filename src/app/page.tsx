import Image from "next/image";
import Script from 'next/script';
// import  HomePage  from "@/app/home/page";
import Header from "../../components/navbar";
import CardExperience from "../../components/card";
import CardWithOverlay from "../../components/cardWithOverlay";
import NewsLetter from "../../components/newLetter";
import ArticlePage from "./articles/page";

export default function Home() {
  return (
    <main>
          <div className="main-container">

            <Header/>

             <div className="text-center py-12">
                <div className="profile">
                    <img src="" alt=""   />
                    <h3 className="text-xl font-semibold"> Samuel Acquah </h3>

                    <p className="text-sm my-2"> Software Engineer | .ts.+.js | Building Startups | Dev Tools | Opensource | Innovation | Growth </p>
                </div>

                 <div className="my-3">
                   <button className="rounded-full bg-black text-white px-5 py-2 text-sm"> Available For Work </button>
                 </div>
             </div>


             <div className="project_slider flex">

                <div className="img_1 mr-3"> 
                  <img className="w-25 h-25 rounded-lg -skew-y-3 shadow-md hover:skew-y-0 transition-transform duration-300 ease-in-out" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-src"   />
                </div>


                <div className="img_2 mr-3"> 
                <img className="w-25 h-25 rounded-lg skew-y-3 shadow-md hover:skew-y-0 transition-transform duration-300 ease-in-out" src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-src"   />

                </div>
                <div className="img_3"> 
                <img className="w-25 h-25 rounded-lg -skew-y-3 shadow-md hover:skew-y-0 transition-transform duration-300 ease-in-out" src="https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img-src"   />
                 </div>
             </div>


              <div className="my-20">
                  <div  className="my-5">
                    <h3 className="font-semibold"> Experience </h3>
                  </div>
                 <CardExperience  />
              </div>


              <div className="my-20">

                 <div className="my-5">
                    <h3 className="font-semibold"> Tutorial </h3>
                 </div>
                <CardWithOverlay />
              </div>
            
 

              <div className="my-20">
                  <div  className="my-5">
                    <h3 className="font-semibold"> Articles  </h3>
                  </div>
                 {/* <CardExperience/> */}
                  <ArticlePage />
              </div>



              {/* <div className="my-20">
              <div  className="my-5">
                    <p className="paragraph">Subscribe to our newsletters</p>
                    <Script async data-uid="0d5acdbea5" src="https://samuel-acquah.ck.page/0d5acdbea5/index.js"/>
                  </div>
              </div> */}
          </div>
    </main>
  );
}

