import React from "react";

import Image_1 from "../assets/images/img-1.jpg";
import Image_2 from "../assets/images/img-2.jpg";
import Image_3 from "../assets/images/img-3.jpg";
import Image_4 from "../assets/images/img-4.jpg";


function ImagesShowCase({Single}) {
    const images = Single ? [Image_1] : [Image_1, Image_2, Image_3, Image_4];
  return (
    <>
        <div className={`grid grid-cols-[294px,294px] grid-rows-[219px,219px] gap-4`}>
          {images.map((image, index) => (
            <img
              className={`object-cover w-full h-full ${index=== 1 && '  scale-110  origin-bottom-left	 '}  `}
              src={image}
              alt="showcase"
              key={index}
            />
          ))}
        </div>
    </>
  );
}

export default ImagesShowCase;
