"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const TUTORIAL = [
  {
    source: "medium.com",
    blog_title: "Understanding CSS",
    background_url : "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    short_note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur adipisicing elit. Odio, tenetur?",
  },
  {
    source: "medium.com",
    blog_title: "Web Performance",
    background_url : "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    short_note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur adipisicing elit. Odio, tenetur?",
  },
  {
    source: "medium.com",
    blog_title: "Web Performance",
    background_url : "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    short_note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur adipisicing elit. Odio, tenetur?",
  },
  {
    source: "medium.com",
    blog_title: "Email Templates",
    background_url : "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    short_note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, tenetur adipisicing elit. Odio, tenetur?",
  },
];

export default function CardWithOverlay() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between">
      {TUTORIAL.map((tutorial, index) => (

        <div key={index} className="basis-1/5 w-full">
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40">
              <img
                src={tutorial.background_url}
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-white"> </h3>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                 {tutorial.blog_title}
              </div>
            </article>
        </div>
      ))}
    </div>
  );
}
