"use client";

import Image from "next/image";

type ClientLogo = { src: string; alt: string; imgClass?: string; cellClass?: string };

// Two static rows (7 + 6). TVS and Godrej Properties sit at the centre of the bottom row;
// Godrej Capital is in the top row, so the two Godrej logos are never side by side.
const logoRows: ClientLogo[][] = [
  [
    { src: "/assets/client logos/vedanta logo.png", alt: "Vedanta" },
    {
      src: "/assets/client logos/Godrej Capital Black.png",
      alt: "Godrej Capital",
      imgClass: "h-full w-28",
    },
    {
      src: "/assets/client logos/duroflex.png",
      alt: "Duroflex",
      imgClass: "h-24 w-[288px] max-w-none",
      cellClass: "mx-6", // extra margin so the enlarged logo doesn't crowd its neighbours
    },
    { src: "/assets/client logos/TATA-Steel-logo.png", alt: "TATA Steel" },
    { src: "/assets/client logos/ceil logo.png", alt: "Ceil" },
    // Source image has a lot of padding, so render it slightly larger than the other logos
    {
      src: "/assets/client logos/Lnt.png",
      alt: "L&T Valves",
      imgClass: "h-16 w-44",
    },
    { src: "/assets/client logos/indiafirst logo.png", alt: "IndiaFirst" },
  ],
  [
    { src: "/assets/client logos/kissflow logo.png", alt: "Kissflow" },
    { src: "/assets/client logos/spark beyond logo.png", alt: "SparkBeyond" },
    { src: "/assets/client logos/tvs logo.png", alt: "TVS" },
    {
      src: "/assets/client logos/Godrej Properties Black.png",
      alt: "Godrej Properties",
    },
    { src: "/assets/client logos/CoreStack logo.png", alt: "CoreStack" },
    { src: "/assets/client logos/Pluralsight_Logo.png", alt: "Pluralsight" },
  ],
];

export const ClientLogosCarousel = () => {
  return (
    <section className="py-20 bg-background border-y border-border/50">
      <div className="container-main max-w-[1440px]">
        <p className="text-center text-lg font-semibold uppercase tracking-widest text-muted-foreground mb-14">
          Trusted by
        </p>

        <div className="flex flex-col items-center gap-14">
          {logoRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10"
            >
              {/* Every logo sits in an identical fixed-size cell and is scaled to fit it */}
              {row.map((logo) => (
                <div
                  key={logo.alt}
                  className={`flex items-center justify-center w-36 h-14 ${logo.cellClass ?? ""}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={144}
                    height={56}
                    className={`${logo.imgClass ?? "h-full w-full"} object-contain transition-transform duration-300 hover:scale-105`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
