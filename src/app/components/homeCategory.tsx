'use client'
import classNames from "classnames";
import React from "react";
import { useState } from "react";

const categories = ['Tutti', 'Tecnologia', 'Abbigliamento', 'Musica', 'Bellezza',  'Videogiochi', 'ElettroDomestici', 'Giardinaggio', 'Giochi per Bambini', 'Prodotti per animali']

export default function HomeCategory () {

  const [activeCategory, setActiveCategory] = useState(0)

    return <div className={classNames("flex items-center justify-between my-16 max-[1483px]:overflow-x-auto max-[1483px] max-[1483px]:justify-start max-[1483px]:gap-x-2.5 max-[768px]:my-12", "subscroll")}>
      {
        categories.map((category, i) => (
          <div 
            className={classNames({
              "py-2 px-3.5  w-fit rounded-3xl whitespace-pre cursor-pointer text-lg":true,
              "bg-[#F3F9FB] text-[#222222]": activeCategory !== i,
              "bg-[#0ACF83] text-white": activeCategory === i
            })} 
            key={i}
            onClick={() => setActiveCategory(i)}
          >
            {category}
          </div>
        ))
      }
    </div>
}