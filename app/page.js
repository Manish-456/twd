"use client";

import React, { useState } from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import Components from "./components/components";
import Templates from "./components/templates";
import { Features } from "./components/features";
import { ComponentGroup } from "./components/component-group";
import { MobileNavbar } from "./components/mobile-navbar";
import Footer from "./components/footer";

export default function Home() {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <Navbar onOpen={onOpen} />
      <MobileNavbar open={open} onClose={onClose} />
      <div className="mt-32">
        <Hero />
        <ComponentGroup />
        <Components />
        <Templates />
        <Features />
        <Footer />
      </div>
    </div>
  );
}
