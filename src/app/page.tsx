import Image from "next/image";
import Script from "next/script";
// import  HomePage  from "@/app/home/page";
import Header from "../../components/navbar";
import CardExperience from "../../components/cardExperience";
import CardWithOverlay from "../../components/cardWithOverlay";
import NewsLetter from "../../components/newLetter";
import ArticlePage from "./articles/page";
import Footer from "../../components/footer";
import CardShort from "../../components/cardShort";
import CardSideHustle from "../../components/cardSideHustle";



export const ARTICLES = [
  {
    source: "medium.com",
    blog_title: "Building open source css framework",
    short_note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
  {
    source: "medium.com",
    blog_title: "Creating vscode theme",
    short_note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
  {
    source: "medium.com",
    blog_title: "Creating vscode theme",
    short_note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur adipisicing elit. Odio, tenetur?",
  },
];

export const SIDEHUSTLE = [
  {
    logo_url: "https://tunis-next.netlify.app/assets/img/blog/blog-post-5.jpg",
    blog_title: "Trenda",
    tags : ["Startup", "Node.js", "Angular", "MongoDB" , "API Development" ,  "SEO"],
    short_note: "Trenda a hybridized model of ecommerce and marketplace for sellers and business  within Africa",
  },
  {
    logo_url: "https://tunis-next.netlify.app/assets/img/blog/blog-post-4.jpg",
    blog_title: "Blonder css framework",
    short_note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
    tags : ["Startup", "Node.js", "Angular", "MongoDB" , "API Development" ,  "SEO"]
  },
  {
    logo_url: "https://tunis-next.netlify.app/assets/img/blog/blog-post-3.jpg",
    blog_title: "Blonder VSCode theme",
    tags : ["Startup", "Node.js", "Angular", "MongoDB" , "API Development" ,  "SEO"],
    short_note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
  {
    logo_url:
      "https://tunis-next.netlify.app/assets/img/blog/blog-post-1.jpg",
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


export default function Home() {
  return (
    <main>
      <div className="main-container">
        <Header />

        <div className="text-center py-12">
          <div className="profile">
            <img src="" alt="" />
            <h3 className="text-xl font-semibold"> Samuel Acquah </h3>

            <p className="text-sm my-2">
              Software Engineer | .ts.+.js | Building Startups | Dev Tools |
              Opensource | Innovation | Growth
            </p>
          </div>

          <div className="my-3">
            <button className="rounded-full bg-black text-white px-5 py-2 text-sm">  Available For Work
            </button>
          </div>
        </div>


        <div className="project_slider flex">
          <div className="img_1 mr-3">
            <Image
              width={100}
              height={100}
              className="w-25 h-25 rounded-lg -skew-y-3 shadow-md hover:skew-y-0 transition-transform duration-300 ease-in-out"
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img-src"
            />
          </div>

          <div className="img_2 mr-3">
            <Image
              width={100}
              height={100}
              className="w-25 h-25 rounded-lg skew-y-3 shadow-md hover:skew-y-0 transition-transform duration-300 ease-in-out"
              src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img-src"
            />
          </div>

          <div className="img_3">
            <Image
               width={100}
               height={100}
              className="w-25 h-25 rounded-lg -skew-y-3 shadow-md hover:skew-y-0 transition-transform duration-300 ease-in-out"
              src="https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img-src"
            />
          </div>

          
        </div>

        <div className="my-20">
          <div className="my-5">
            <h3 className="font-semibold"> Experience </h3>
          </div>
          <CardExperience />
        </div>

        <div className="my-20">
          <div className="my-5">
            <h3 className="font-semibold"> Tutorial </h3>
          </div>
          <CardWithOverlay />
        </div>



        <div className="my-20">
          <div className="my-5">
            <h3 className="font-semibold"> Articles </h3>
          </div>


          <div className="#">
            {ARTICLES.map((articles, index) => (
              <CardShort
                key={index}
                logo_url={articles.source}
                project_title={articles.blog_title}
                project_description={articles.short_note}
              />
            ))}
          </div>
        </div>
    


        <div className="my-20">
          <div className="my-5">
            <h3 className="font-semibold"> Side Hustles </h3>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {SIDEHUSTLE.map((articles, index) => (
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



        <div className="my-5">
          <div className="my-5">
            <h3 className="font-semibold">Let's Connect </h3>
          </div>
          <NewsLetter />
        </div>



        <div className="my-2">
          <Footer />
        </div>

      </div>
    </main>
  );
}