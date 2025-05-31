"use client";

import { useState } from "react";

export default function ProjectCategories() {
  const [activeCategory, setActiveCategory] = useState("Popular");
  
  const categories = [
    "Popular",
    "Discover",
    "Internal Tools",
    "Website",
    "Personal",
    "Consumer App",
    "B2B App",
    "Prototype"
  ];
  
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-button ${activeCategory === category ? 'active' : ''}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}