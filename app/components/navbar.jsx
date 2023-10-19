import React from "react";
import { Logo } from "./logo";
import { Studio } from "./studio";
import {NavLinks} from "./nav-links";

export function Navbar({onOpen}) {
  return (
    <div className="flex items-center  justify-between">
      <div className="flex items-center gap-x-6">
        <Logo />
        <Studio />
      </div>
      <div>
        <NavLinks onOpen={onOpen} />
      </div>
    </div>
  );
}
