import Link from "next/link";
import React from "react";

export default function Templates() {
  return (
    <div className="max-w-xl mt-12">
      <div className="text-blue-500">Templates</div>
      <h3 className="text-xl md:text-3xl tracking-tight mt-2 font-semibold">
        Production-ready website templates, built the way you want them.
      </h3>
      <div className="mt-3 pb-4">
        <p className="text-slate-700 tracking-wide leading-6 text-sm">
          Visually-stunning, easy to customize site templates built with React
          and Next.js. The perfect starting point for your next project and the
          ultimate resource for learning how experts build real websites with
          Tailwind CSS
        </p>
      </div>
      <Link href={"/"} className="text-sm text-blue-500  underline">
        Browse all templates &rarr;
      </Link>
    </div>
  );
}
