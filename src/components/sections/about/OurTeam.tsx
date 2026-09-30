import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    name: "Ganapathy Gangadharan (GG)",
    role: "CEO & Founder",
    image: "/assets/Profile pics/Ganapathy Gangadharan.png",
  },
  {
    name: "Senthilvelan Natarajan (Velan)",
    role: "CTO & Co-founder",
    image: "/assets/Profile pics/velan.png",
  },
  {
    name: "Rathnasundara Devi S",
    role: "Head - Administration",
    image: "/assets/Profile pics/rathna.png",
  },
  {
    name: "Amit Durgaprasad",
    role: "Consulting Partner",
    image: "/assets/Profile pics/Amit.png",
  },
  {
    name: "Parthiban",
    role: "AI Consulting Partner",
    image: "/assets/Profile pics/Parthiban.jpg",
  },
  {
    name: "Sathyanarayanan",
    role: "Delivery Head",
    image: "/assets/Profile pics/Sathyanarayanan.jpeg",
  },
  {
    name: "Dr. Vishnu A",
    role: "Engagement Lead",
    image: "/assets/Profile pics/Vishnu.jpeg",
  },
  {
    name: "Sourish Ghosh",
    role: "Business Growth Manager",
    image: "/assets/Profile pics/Sourish_Ghosh.png",
  },
  {
    name: "Maharshi Vidhyarthi",
    role: "Engagement Lead",
    image: "/assets/Profile pics/maharishi.jpg",
  },
  {
    name: "K Anandpadmanaban",
    role: "Engagement Lead",
    image: "/assets/Profile pics/Anand.png",
  },
  {
    name: "Rakesh Mahendran",
    role: "Tech Lead - AI solutions (FDE)",
    image: "/assets/Profile pics/Rakesh.png",
  },
  {
    name: "Ravin",
    role: "AI Engineer (SRE)",
    image: "/assets/Profile pics/Ravin.png",
  },
  {
    name: "Surya",
    role: "AI Engineer",
    image: "/assets/Profile pics/Surya_Profile_Photo.jpg",
  },
  {
    name: "Pravinkumar Raja",
    role: "Tech Lead - Workflow Automation",
    image: "/assets/Profile pics/Pravin.jpeg",
  },
  {
    name: "Varshiga Mohankumar",
    role: "Software Developer",
    image: "/assets/Profile pics/Varshiga.jpg",
  },
  {
    name: "Lakshmi Prabha",
    role: "Software Developer",
    image: "/assets/Profile pics/Laxmi Prabha.png",
  },
  {
    name: "Jashera S",
    role: "Software Developer",
    image: "/assets/Profile pics/Jashera_1.jpg",
  },
  {
    name: "Visalini K",
    role: "Software Developer",
    image: "/assets/Profile pics/Vishalini.png",
  },
  {
    name: "Sanjai Kumar R",
    role: "Automation Tester",
    image: "/assets/Profile pics/Sanjay.jpeg",
  },
];

export const OurTeam = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Our Team
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-12 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {teamMembers.map((member, idx) => (
                <CarouselItem
                  key={idx}
                  className="pl-4 md:pl-8 sm:basis-1/2 md:basis-1/3 pt-4 pb-4"
                >
                  <div className="card-elevated rounded-2xl p-8 text-center h-full flex flex-col justify-start">
                    <div className="relative w-28 h-28 rounded-full border-2 border-border mx-auto mb-6 flex items-center justify-center overflow-hidden bg-card shadow-sm">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-tyn-blue font-semibold mb-3">
                      {member.role}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-8 md:-left-12 bg-background hover:bg-muted" />
            <CarouselNext className="-right-8 md:-right-12 bg-background hover:bg-muted" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
