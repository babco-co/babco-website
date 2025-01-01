import arch1 from "../../../../../public/images/carousel-arch/arch-1.webp";
import arch2 from "../../../../../public/images/carousel-arch/arch-2.webp";
import arch3 from "../../../../../public/images/carousel-arch/arch-3.webp";
import arch4 from "../../../../../public/images/carousel-arch/arch-4.webp";
import arch5 from "../../../../../public/images/carousel-arch/arch-5.webp";
import arch6 from "../../../../../public/images/carousel-arch/arch-6.webp";
import sqlit1 from "../../../../../public/images/carousel-sqlite/sqlit-1.svg";
import sqlit2 from "../../../../../public/images/carousel-sqlite/sqlit-2.webp";
import sqlit3 from "../../../../../public/images/carousel-sqlite/sqlit-3.webp";
import sqlit4 from "../../../../../public/images/carousel-sqlite/sqlit-4.svg";
import sqlit5 from "../../../../../public/images/carousel-sqlite/sqlit-5.webp";
import sqlit6 from "../../../../../public/images/carousel-sqlite/sqlit-6.webp";
import tembo1 from "../../../../../public/images/carousel-tembo/tembo-1.webp";
import tembo2 from "../../../../../public/images/carousel-brands/brand-9.webp";
import tembo3 from "../../../../../public/images/carousel-tembo/tembo-3.webp";
import tembo4 from "../../../../../public/images/carousel-tembo/tembo-4.webp";
import omlet1 from "../../../../../public/images/carousel-omlet/omlet-1.svg";
import omlet2 from "../../../../../public/images/carousel-omlet/omlet-2.webp";
import omlet3 from "../../../../../public/images/carousel-omlet/omlet-3.webp";
import omlet4 from "../../../../../public/images/carousel-omlet/omlet-4.webp";
import omlet5 from "../../../../../public/images/carousel-omlet/omlet-5.webp";
import omlet6 from "../../../../../public/images/carousel-omlet/omlet-6.svg";
import gitar1 from "../../../../../public/images/carousel-gitar/gitar-1.webp";
import gitar2 from "../../../../../public/images/carousel-gitar/gitar-2.webp";
import gitar3 from "../../../../../public/images/carousel-gitar/gitar-3.webp";
import gitar4 from "../../../../../public/images/carousel-gitar/gitar-4.svg";
import apolitical1 from "../../../../../public/images/carousel-apolitical/apolitical-1.webp";
import apolitical2 from "../../../../../public/images/carousel-apolitical/apolitical-2.webp";
import apolitical3 from "../../../../../public/images/carousel-apolitical/apolitical-3.webp";
import apolitical4 from "../../../../../public/images/carousel-apolitical/apolitical-4.webp";
import oumi1 from "../../../../../public/images/carousel-oumi/oumi-1.webp";
import oumi2 from "../../../../../public/images/carousel-brands/brand-8.svg";
import oumi3 from "../../../../../public/images/carousel-oumi/oumi-3.webp";

import ProductItem from "./product-item";

const archCarousel = [
  [
    { src: arch1, width: 349, height: 256 },
    { src: arch2, width: 349, height: 268 },
  ],
  [{ src: arch3, width: 834, height: 540 }],
  [
    { src: arch4, width: 540, height: 381 },
    { src: arch5, width: 540, height: 143 },
  ],
  [{ src: arch6, width: 680, height: 540 }],
  [
    { src: arch1, width: 349, height: 256 },
    { src: arch2, width: 349, height: 268 },
  ],
  [{ src: arch3, width: 834, height: 540 }],
  [
    { src: arch4, width: 540, height: 381 },
    { src: arch5, width: 540, height: 143 },
  ],
  [{ src: arch6, width: 680, height: 540 }],
];

const sqliteCarousel = [
  [
    { src: sqlit1, width: 258, height: 258 },
    { src: sqlit2, width: 258, height: 266 },
  ],
  [{ src: sqlit3, width: 688, height: 540 }],
  [{ src: sqlit4, width: 168, height: 540 }],
  [{ src: sqlit5, width: 540, height: 540 }],
  [{ src: sqlit6, width: 540, height: 540 }],
  [
    { src: sqlit1, width: 258, height: 258 },
    { src: sqlit2, width: 258, height: 266 },
  ],
  [{ src: sqlit3, width: 688, height: 540 }],
  [{ src: sqlit4, width: 168, height: 540 }],
  [{ src: sqlit5, width: 540, height: 540 }],
  [{ src: sqlit6, width: 540, height: 540 }],
];

const temboCarousel = [
  [{ src: tembo1, width: 743, height: 540 }],
  [
    { src: tembo2, width: 483, height: 149 },
    { src: tembo3, width: 483, height: 375 },
  ],
  [{ src: tembo4, width: 540, height: 540 }],
  [{ src: tembo1, width: 743, height: 540 }],
  [
    { src: tembo2, width: 483, height: 149 },
    { src: tembo3, width: 483, height: 375 },
  ],
  [{ src: tembo4, width: 540, height: 540 }],
];

const omletCarousel = [
  [
    { src: omlet1, width: 349, height: 251 },
    { src: omlet2, width: 349, height: 273 },
  ],
  [{ src: omlet3, width: 653, height: 540 }],
  [{ src: omlet4, width: 440, height: 540 }],
  [{ src: omlet5, width: 540, height: 540 }],
  [{ src: omlet6, width: 540, height: 540 }],
  [
    { src: omlet1, width: 349, height: 251 },
    { src: omlet2, width: 349, height: 273 },
  ],
  [{ src: omlet3, width: 653, height: 540 }],
  [{ src: omlet4, width: 440, height: 540 }],
  [{ src: omlet5, width: 540, height: 540 }],
  [{ src: omlet6, width: 540, height: 540 }],
];

const gitarCarousel = [
  [
    { src: gitar1, width: 472, height: 234 },
    { src: gitar2, width: 472, height: 290 },
  ],
  [{ src: gitar3, width: 440, height: 540 }],
  [{ src: gitar4, width: 540, height: 540 }],
  [
    { src: gitar1, width: 472, height: 234 },
    { src: gitar2, width: 472, height: 290 },
  ],
  [{ src: gitar3, width: 440, height: 540 }],
  [{ src: gitar4, width: 540, height: 540 }],
];

const apoliticalCarousel = [
  [{ src: apolitical1, width: 791, height: 540 }],
  [{ src: apolitical2, width: 540, height: 540 }],
  [{ src: apolitical3, width: 540, height: 540 }],
  [{ src: apolitical4, width: 540, height: 540 }],
  [{ src: apolitical1, width: 791, height: 540 }],
  [{ src: apolitical2, width: 540, height: 540 }],
  [{ src: apolitical3, width: 540, height: 540 }],
  [{ src: apolitical4, width: 540, height: 540 }],
];

const oumiCarousel = [
  [{ src: oumi1, width: 981, height: 540 }],
  [
    { src: oumi2, width: 349, height: 251 },
    { src: oumi3, width: 349, height: 268 },
  ],
  [{ src: oumi1, width: 981, height: 540 }],
  [
    { src: oumi2, width: 349, height: 251 },
    { src: oumi3, width: 349, height: 268 },
  ],
];

const Product = () => {
  return (
    <section className="w-full flex flex-col items-start justify-center gap-16 lg:gap-[200px]">
      <ProductItem title={"Arch"} subtitle={"AI"} images={archCarousel} />
      <ProductItem
        title={"SQLite Cloud"}
        subtitle={"Dev Infrastructure"}
        images={sqliteCarousel}
      />
      <ProductItem
        title={"Tembo"}
        subtitle={"Dev Infrastructure"}
        images={temboCarousel}
      />
      <ProductItem
        title={"Omlet"}
        subtitle={"Observability"}
        images={omletCarousel}
      />
      <ProductItem
        title={"Gitar"}
        subtitle={"Dev Tooling + AI"}
        images={gitarCarousel}
      />
      <ProductItem
        title={"Apolitical"}
        subtitle={"Government"}
        images={apoliticalCarousel}
      />
      <ProductItem title={"Oumi"} subtitle={"AI"} images={oumiCarousel} />
    </section>
  );
};

export default Product;
