"use client";

import Image from "next/image";

/**
 * Logo files have very different amounts of empty padding, so spacing by image
 * box never looks even. Instead each logo carries:
 *  - nw/nh:  natural image size
 *  - bbox:   [left, right, top, bottom] pixel bounds of the visible artwork
 *  - fit:    [w, h] box the image is scaled to fit inside (sets the logo's size)
 * The artwork is then cropped to its visible bounds, so a plain flex `gap`
 * gives identical visible spacing between every pair of logos.
 */
type ClientLogo = {
  src: string;
  alt: string;
  nw: number;
  nh: number;
  bbox: [number, number, number, number];
  fit: [number, number];
};

const ROW_HEIGHT = 64; // every logo's artwork is vertically centred in this height
const LOGO_GAP = 40; // visible space between neighbouring logos (px)


// Two static rows (7 + 6). TVS and Godrej Properties sit at the centre of the bottom row;
// Godrej Capital is in the top row, so the two Godrej logos are never side by side.
// Sizes are tuned optically (not just by area): wide thin wordmarks get more width,
// dense/bold or squarish marks (Godrej, TVS, TATA) get less so everything reads the same size.
const logoRows: ClientLogo[][] = [
  [
    { src: "/assets/client logos/vedanta logo.png", alt: "Vedanta", nw: 1484, nh: 321, bbox: [6, 1475, 10, 319], fit: [163, 36] },
    { src: "/assets/client logos/Godrej Capital Black.png", alt: "Godrej Capital", nw: 2592, nh: 694, bbox: [0, 2591, 0, 693], fit: [112, 30] },
    { src: "/assets/client logos/duroflex.png", alt: "Duroflex", nw: 1160, nh: 207, bbox: [10, 1148, 21, 198], fit: [172, 32] },
    { src: "/assets/client logos/TATA-Steel-logo.png", alt: "TATA Steel", nw: 300, nh: 164, bbox: [0, 299, 0, 163], fit: [101, 56] },
    { src: "/assets/client logos/ceil logo.png", alt: "Ceil", nw: 792, nh: 260, bbox: [9, 775, 20, 240], fit: [160, 52] },
    { src: "/assets/client logos/Lnt.png", alt: "L&T Valves", nw: 431, nh: 125, bbox: [3, 429, 1, 123], fit: [147, 43] },
    { src: "/assets/client logos/indiafirst logo.png", alt: "IndiaFirst", nw: 789, nh: 133, bbox: [0, 767, 0, 132], fit: [180, 32] },
  ],
  [
    { src: "/assets/client logos/kissflow logo.png", alt: "Kissflow", nw: 600, nh: 108, bbox: [1, 597, 6, 99], fit: [189, 34] },
    { src: "/assets/client logos/spark beyond logo.png", alt: "SparkBeyond", nw: 442, nh: 72, bbox: [6, 439, 6, 67], fit: [240, 39] },
    { src: "/assets/client logos/tvs logo.png", alt: "TVS", nw: 1531, nh: 1403, bbox: [13, 1490, 42, 1365], fit: [63, 58] },
    { src: "/assets/client logos/Godrej Properties Black.png", alt: "Godrej Properties", nw: 3392, nh: 694, bbox: [0, 3391, 0, 693], fit: [144, 30] },
    { src: "/assets/client logos/CoreStack logo.png", alt: "CoreStack", nw: 1925, nh: 307, bbox: [14, 1912, 27, 285], fit: [203, 32] },
    { src: "/assets/client logos/Pluralsight_Logo.png", alt: "Pluralsight", nw: 1280, nh: 278, bbox: [5, 1274, 5, 272], fit: [163, 36] },
  ],
];

const LogoItem = ({ logo }: { logo: ClientLogo }) => {
  const [left, right, top, bottom] = logo.bbox;
  const scale = Math.min(logo.fit[0] / logo.nw, logo.fit[1] / logo.nh);

  const imgW = logo.nw * scale;
  const imgH = logo.nh * scale;
  const visW = (right - left + 1) * scale;
  const visH = (bottom - top + 1) * scale;
  const offX = left * scale; // empty space left of the artwork
  const offY = top * scale; // empty space above the artwork

  return (
    // Box is exactly as wide as the visible artwork; the image is shifted so
    // the padding hangs outside the box and is clipped from layout.
    <div
      className="relative flex-shrink-0"
      style={{ width: visW, height: ROW_HEIGHT }}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={Math.round(imgW)}
        height={Math.round(imgH)}
        className="absolute max-w-none transition-transform duration-300 hover:scale-105"
        style={{
          width: imgW,
          height: imgH,
          left: -offX,
          top: (ROW_HEIGHT - visH) / 2 - offY,
          transformOrigin: `${offX + visW / 2}px ${offY + visH / 2}px`,
        }}
      />
    </div>
  );
};

export const ClientLogosCarousel = () => {
  return (
    <section className="py-20 bg-background border-y border-border/50">
      <div className="container-main max-w-[1440px]">
        <p className="text-center text-lg font-semibold uppercase tracking-widest text-muted-foreground mb-14">
          Trusted by
        </p>

        <div className="flex flex-col items-center gap-10">
          {logoRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap lg:flex-nowrap lg:max-xl:[zoom:0.85] items-center justify-center gap-y-10"
              style={{ columnGap: LOGO_GAP }}
            >
              {row.map((logo) => (
                <LogoItem key={logo.alt} logo={logo} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
