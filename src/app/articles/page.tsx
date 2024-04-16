import Image from "next/image";
import Header from "../../../components/navbar";
import Head from "next/head";
import CardExperience from "../../../components/card";
import CardShort from "../../../components/cardShort";

export const ARTICLES = [
  {
    source: "medium.com",
    blog_title: "Building open source css framework",
    short_note:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
  {
    source: "medium.com",
    blog_title: "Creating vscode theme",
    short_note:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
  {
    source: "medium.com",
    blog_title: "Creating vscode theme",
    short_note:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
  {
    source: "medium.com",
    blog_title: "Creating vscode theme",
    short_note:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
  {
    source: "medium.com",
    blog_title: "Creating vscode theme",
    short_note:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
  {
    source: "medium.com",
    blog_title: "Creating vscode theme",
    short_note:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
  {
    source: "medium.com",
    blog_title: "Creating vscode theme",
    short_note:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
  {
    source: "medium.com",
    blog_title: "Creating vscode theme",
    short_note:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
  {
    source: "medium.com",
    blog_title: "Creating vscode theme",
    short_note:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur?",
  },
  {
    source: "medium.com",
    blog_title: "Creating vscode theme",
    short_note:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur adipisicing elit. Odio, tenetur?",
  },
];

export default function ArticlePage() {
  return (
    <div className="main-container">
      <Header />

      <div>
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
  );
}
