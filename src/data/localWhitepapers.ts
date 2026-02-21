/**
 * Local whitepapers content from the old website (WhitepaperOne, WhitepaperTwo, localWhitepapers).
 * Includes full page content and authors for the detail view.
 */
export interface WhitepaperAuthor {
  name: string;
  role: string;
  image: string;
}

export interface WhitepaperSection {
  id: string;
  title?: string;
  paragraphs?: string[];
  list?: string[];
  /** Partner Landscape items (Whitepaper 1 only) */
  partnerLandscape?: { title: string; description: string }[];
}

export interface LocalWhitepaper {
  _id: string;
  title: string;
  description: string;
  fileUrl: string;
  slug: string;
  image?: string;
  authors?: WhitepaperAuthor[];
  content?: WhitepaperSection[];
}

const partnerLandscapeData = [
  { title: "Global System Integrators (GSIs)", description: "Large firms that lead digital transformation projects with deep enterprise relationships." },
  { title: "System Integrators (SIs)", description: "Mid-sized system integrators providing technology solutions with faster turnaround times." },
  { title: "Niche/Boutique Partners", description: "Specialised firms with deep domain/technology expertise and close industry connections." },
  { title: "Big 4 Consulting Firms", description: "Market leaders in advisory services with strong C-suite relationships and strategic influence." },
  { title: "Hyperscalers", description: "Cloud giants offering infrastructure, scalability, and co-selling opportunities." },
  { title: "Independent Software Vendors", description: "Companies that develop complementary software products which can be integrated with and sold as a bundled solution." },
  { title: "Resellers/Channel Partners", description: "Distributors that resell products, extending market reach through established networks." },
];

export const localWhitepapers: LocalWhitepaper[] = [
  {
    _id: "local-wp-1",
    title: "Choosing the Right Partner for Channel - Led Growth",
    description: "Choosing the Right Partner for Channel - Led Growth",
    fileUrl: "/assets/whitepapers/Unlocking Non Linear Growth through Strategic Alliances.pdf",
    slug: "choosing-the-right-partner-for-channel-led-growth",
    image: "https://res.cloudinary.com/dv0eaik7h/image/upload/v1749708844/bgwhitepaper_fhv4be.jpg",
    authors: [
      { name: "Ganapathy Gangadharan", role: "Founder", image: "/assets/Profile pics/Ganapathy Gangadharan.png" },
      { name: "Kaushik Venkatesan", role: "Alliance Director", image: "/assets/Profile pics/kaushik.png" },
    ],
    content: [
      {
        id: "executive-summary",
        paragraphs: [
          "In today's competitive tech landscape, it is imperative that emerging tech firms must scale quickly and secure enterprise clients in order to drive sustainable growth. Here we explore different types of channel partnerships that can unlock non-linear growth.",
          "While direct sales yield good results in the short term, they fail to scale non-linearly. Channel-led growth, where third-party partners with an established market presence drive customer acquisition, accelerate enterprise penetration and market expansion, while also establishing and enhancing the credibility of emerging technologies.",
        ],
      },
      {
        id: "channel-growth",
        paragraphs: [
          "Selecting the right set of partners is essential for scaling through channels. Each type of partner brings a unique blend of strengths, networks, and challenges. Understanding this along with their roles and how they fit into your growth strategy can help you unlock new markets, sales growth, and enhanced brand visibility.",
          "For emerging tech firms, partnering with multiple entities is key to delivering complete, scalable solutions that reduce friction and drive enterprise adoption. A multi-partner approach reduces sales friction while increasing credibility, accelerating customer acquisition, and enhancing market access.",
        ],
      },
      {
        id: "partner-landscape",
        title: "Partner Landscape",
        partnerLandscape: partnerLandscapeData,
      },
      {
        id: "conclusion",
        title: "Key Considerations",
        list: [
          "Strategic Alliances Enable Exponential Growth: A multi-partner ecosystem accelerates market access.",
          "Choosing the Right Partner is Crucial: Each partner brings unique strengths and challenges that must align with your growth strategy.",
          "Executive Buy-In and Top-Down Alignment: These can make or break partnerships.",
          "A Strong GTM Strategy: Essential for leveraging partnerships effectively.",
          "Alliance Success Requires Continuous Engagement: Ongoing involvement and governance are necessary for sustained growth.",
        ],
        paragraphs: [
          "Through the right alliances, tech startups can scale faster, increase credibility, and unlock new markets, driving long-term success.",
          "For an in-depth analysis of the different types of channel partners, including their advantages, challenges, and recommended strategies, download the full whitepaper.",
        ],
      },
    ],
  },
  {
    _id: "local-wp-2",
    title: "Unlocking Industrial Transformation through Market Innovation Adoption",
    description: "Unlocking Industrial Transformation through Market Innovation Adoption",
    fileUrl: "/assets/whitepapers/Unlocking Enterprise Transformation through Market Innovation Adoption.pdf",
    slug: "unlocking-industrial-transformation-through-market-innovation-adoption",
    image: "https://res.cloudinary.com/dv0eaik7h/image/upload/v1749708621/global-business_bxe79k.webp",
    authors: [
      { name: "Senthilvelan Natarajan", role: "Co-Founder & CTO", image: "/assets/Profile pics/velan.png" },
      { name: "Sourish Ghosh", role: "Growth Manager", image: "/assets/Profile pics/Sourish_Ghosh.png" },
    ],
    content: [
      {
        id: "intro",
        paragraphs: [
          "External innovation is booming - startups, deep-tech, and novel business models flood the market. Yet, many enterprises struggle to turn these into measurable outcomes. This is where Market Innovation Adoption (MIA) comes in: a proven, repeatable system to scan, pilot, and scale the right innovations.",
        ],
      },
      {
        id: "problem",
        title: "The Problem",
        paragraphs: [
          "From endless pilot projects to scattered innovation teams, most enterprises face:",
        ],
        list: [
          "Too much noise, not enough focus.",
          "Little to no Bandwidth to Scout, Engage, or Evaluate solution providers.",
          "Stakeholder alignment issues.",
          "A lot of friction - no structured pathway from pilot to scale.",
        ],
      },
      {
        id: "solution",
        title: "The Solution: MIA Framework",
        paragraphs: [
          "Backed by 40+ CXO interviews and 20+ field-tested models, MIA provides a structured, six-step process:",
        ],
        list: [
          "Identify business challenges and innovation trends.",
          "Define problem statements with precision.",
          "Source solutions from startups, academia, and beyond.",
          "Engage the right partners with clear governance.",
          "Evaluate through rigorous pilots and success metrics.",
          "Adopt scalable solutions into enterprise operations.",
        ],
      },
      {
        id: "flywheel",
        title: "The Dual Flywheel Advantage",
        paragraphs: [
          "MIA uniquely integrates Outside-In (market scanning) and Inside-Out (strategic alignment) approaches, ensuring both innovation and impact.",
          "Download the full whitepaper to delve deep on how enterprises can leverage MIA to move from experimentation to transformation, creating value and not just chasing trends.",
          "Learn how Tata, Vedanta, and Shell operationalized MIA to reduce costs, improve ESG metrics, and fast-track adoption of cutting-edge tech.",
        ],
      },
    ],
  },
];
