import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

const teamMembers = [
    { name: 'Ganapathy Gangadharan (GG)', role: 'CEO & Founder', image: '/assets/Profile pics/Ganapathy Gangadharan.png' },
    { name: 'Senthilvelan Natarajan (Velan)', role: 'CTO & Co-founder', image: '/assets/Profile pics/velan.png' },
    { name: 'Vishnu A', role: 'Manager, Innovation & Academic Partnerships', image: '/assets/Profile pics/Vishnu.jpeg' },
    { name: 'Sourish Ghosh', role: 'Partner Success Manager', image: '/assets/Profile pics/Sourish_Ghosh.png' },
    { name: 'Anandapadmanaban K (AK)', role: 'Innovation Evangelist', image: '/assets/Profile pics/Anand.png' },
    { name: 'Maharshi Vidhyarthi', role: 'Innovation Consultant', image: '/assets/Profile pics/maharishi.jpg' },
    { name: 'Kaushik Venkatesan', role: 'Alliance Director', image: '/assets/Profile pics/kaushik.png' },
    { name: 'Rakesh Mahendran', role: 'Software Developer', image: '/assets/Profile pics/Rakesh.jpeg' },
    {
        name: 'Rathnasundaradevi', role: 'Legal & Finance Manager',
        image: '/assets/Profile pics/rathna-removebg-preview.png'
    },
    { name: 'Varshiga Mohankumar', role: 'Intern - Full Stack Developer', image: '/assets/Profile pics/Varshiga.jpg' },
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
                            align: 'start',
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 md:-ml-8">
                            {teamMembers.map((member, idx) => (
                                <CarouselItem key={idx} className="pl-4 md:pl-8 sm:basis-1/2 md:basis-1/3 pt-4 pb-4">
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
                                        <p className="text-sm text-tyn-blue font-semibold mb-3">{member.role}</p>

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
