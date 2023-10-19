"use client";

import React from "react";
import { useState } from "react";
import { BreadCrumb } from "./breadcrumb";
import { Card } from "./card";
import { cardItems } from "../lib/constant";
import { Search } from "./search";

export function ComponentGroup() {
  const [selectedId, setSelectedId] = useState(1);

  const onSelected = (id) => {
    setSelectedId(id);
  };
  return (
    <div className="max-w-5xl ml-auto">
      <div className="flex mt-4 gap-4">
        <div className="flex flex-col flex-1 gap-4 md:flex-row">
        <div className="self-end flex flex-col">
          <BreadCrumb />
          
        </div>
          <div className="flex flex-1 flex-col gap-4">
            {cardItems.map((card) => (
              <Card
                key={card.id}
                selected={selectedId === card.id}
                onSelected={onSelected}
                card={card}
              />
            ))}
          </div>
          <div className="flex-1">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
