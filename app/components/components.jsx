import Link from "next/link";
import React from "react";

export default function Components() {
  return (
    <div className="max-w-xl mt-12">
      <div className="text-blue-500">Components</div>
      <h3 className="text-xl md:text-3xl tracking-tight mt-2 font-semibold">
        Beautifully crafted UI components, ready for your next project.
      </h3>
      <div className="mt-3 pb-4">
        <p  className="text-slate-700 tracking-wide leading-6 text-sm">
          Over 500+ professionally designed, fully responsive, expertly crafted
          component examples you can drop into your Tailwind projects and
          customize to your heart&apos;s content.
        </p>
      </div>
      <Link href={'/components'} className="text-sm text-blue-500  underline">Browse all components &rarr;</Link>
    </div>
  );
}
