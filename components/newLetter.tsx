"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NewsLetter() {
  const pathname = usePathname();
  return (
    <div className={""}>
      <div>
        <div className="px-3 py-4 bg-gray-100 text-black rounded-md">
          <div className="mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row max-w-screen-lg">
            <div className="w-full ">
              <form className="flex rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-gray-400 hover:ring-gray-400">
                <input placeholder="Enter your email" className="w-full appearance-none p-3 rounded-lg focus:outline-none" />
                <button
                  className="ml-2 shrink-0 rounded-full  bg-black text-white px-7 py-2 text-sm font-medium "
                  type="submit"
                >
                  Join Newsletter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
