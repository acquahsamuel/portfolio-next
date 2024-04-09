import Image from "next/image";
import Header from "../../../components/navbar";

export default function ProjectPage() {
  return (
    <main>
      <div className="main-container">
        <Header />
        
        <div>
          <h3 className="text-3xl"> Nice Stuff I've built </h3>
          <p> Side Hustles </p>
        </div>

        <div>


       <div className="flex">

          <div className="card_desx  border border-sky-500 rounded-md ">
            <div className="flex">
              <span className="tag"> Open-source </span>
              <span> logo mini </span>
            </div>

            <div>
              <h4> Container Tinkering </h4>
              <p> Solution for runing containers locally and remotely</p>
            </div>
          </div>


          <div className="card_desx   border border-sky-500 rounded-md ">
            <div className="flex">
              <span className="tag"> Open-source </span>
              <span> logo mini </span>
            </div>

            <div>
              <h4> Container Tinkering </h4>
              <p> Solution for runing containers locally and remotely</p>
            </div>
          </div>

          </div>



        </div>




        <div className="client_project">

              <div>
                <h2> Client Projects </h2>
              </div>



          <div className="card_desx   border border-sky-500 rounded-md ">
            <div className="flex">
              <span className="tag"> Open-source </span>
              <span> logo mini </span>
            </div>

            <div>
              <h4> Container Tinkering </h4>
              <p> Solution for runing containers locally and remotely</p>
            </div>
          </div>



        </div>







      </div>
    </main>
  );
}
