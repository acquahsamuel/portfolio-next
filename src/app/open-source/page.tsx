import Image from "next/image";
import Header from "../../../components/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CardSideHustle from "../../../components/cardSideHustle";

export const OPENSOURCE_PROJECTS = [
  {
    logo_url:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blog_title: "Trenda",
    tags: [
      "Startup",
      "Node.js",
      "Angular",
      "MongoDB",
      "API Development",
      "SEO",
    ],
    short_note:
      "Trenda a hybridized model of ecommerce and marketplace for sellers and business  within Africa",
  },
  {
    logo_url:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blog_title: "Blonder css framework",
    short_note:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
  {
    logo_url:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    blog_title: "Blonder VSCode theme",
    short_note:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
];

export default function OpenSourcePage() {
  return (
    <main>
      <div className="main-container">
        <Header />

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
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
