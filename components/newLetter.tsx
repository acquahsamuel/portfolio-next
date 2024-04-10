"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NewsLetter() {
  const pathname = usePathname();
  return (
    <div className={""}>
      <div>
        <div className="px-6 py-8 bg-slate-200 text-white rounded-md">
          <div className="mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row max-w-screen-lg">
            <div className="w-full ">
              <form className="flex rounded-md bg-slate-800 px-4 py-2 focus-within:ring-2 focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600">
                <input placeholder="Enter your email" className="w-full appearance-none bg-slate-800 focus:outline-none" />
                <button
                  className="ml-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-2 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
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
