import Image from "next/image";
import Header from "../../../components/navbar";
import Head from "next/head";

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


export default function ArticlePage() {
  return (

    <div className="main-container">
     <Header />
    
     <h2 className="text-xl py-2 font-semibold"> Articles and Insights </h2>

      {ARTICLES.map((article, index) => (
        <div key={index} className="main_card flex my-8  bg-gray-100  rounded-2xl p-5">
          <div className="section_2 mx-3">
            <div>
              <p className="text-sm text-gray-500 py-2">{article.source}</p>
              <h3 className="font-bold">{article.blog_title}</h3>
              <p className="text-sm mb-2">{article.short_note}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
