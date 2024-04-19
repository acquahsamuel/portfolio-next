import Image from "next/image";
import Header from "../../../components/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CardSideHustle from "../../../components/cardSideHustle";

 const OPENSOURCE_PROJECTS = [
  {
    logo_url:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blog_title: "Trenda",
    tags: [
      "Startup",
      "Node.js",
      "Angular",
      "MongoDB",
      "Express",
      "API Development",
      "Email Templates",
    ],
    project_reference_url: "",
    short_note:
      "Trenda a hybridized model of ecommerce and marketplace for sellers and business  within Africa",
  },
  {
    logo_url:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blog_title: "Blonder css framework",
    tags: [
      "Open-source",
      "SaSS",
      "Architecture",
      "NPM Package",
      "In-progress",
      "Documentation",
      "Optimization and bundling",
    ],
    short_note:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
  {
    logo_url:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blog_title: "Blonder VSCode theme",
    tags: ["Open-source", "Azure", "Documentation"],
    short_note:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
  {
    logo_url:
      "https://tunis-next.netlify.app/assets/img/blog/blog-post-2.jpg",
    blog_title: "Ghana Cities with Regions API (v1)",
    tags: [
      "Open-source",
      "Heroku",
      "Nodejs",
      "Mongodb",
      "Github",
      "Deployment",
      "Documentation",
    ],
    short_note:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
  {
    logo_url: "https://tunis-next.netlify.app/assets/img/blog/blog-post-1.jpg",
    blog_title: "Learn Frontend Cohort Web",
    tags: [
      "Open-source",
      "HTML",
      "CSS",
      "SaSS",
      "Github",
      "Deployment",
      "Documentation",
    ],
    short_note:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
];


 const TECH_STACK = [{
    frontend : "",
    backend : "",
    testing : "",
    architecture : "",
    framework : ""
  }
]




// There is no better tommorrow without the risk and investment of now 


export default function OpenSourcePage() {
  return (
    <main>
      <div className="main-container">
        <Header />

         <div>
          <div className="my-5">
            <h3 className="font-semibold">  Tech Stack  </h3>
             
          </div>
         </div>


        <div className="">
          <div className="my-5">
            <h3 className="font-semibold"> Open Source Tool </h3>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {OPENSOURCE_PROJECTS.map((articles, index) => (
              <CardSideHustle
                key={index}
                logo_url={articles.logo_url}
                project_title={articles.blog_title}
                project_description={articles.short_note}
                tags={articles.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
