import { 
  Heart, 
  Stethoscope, 
  GraduationCap, 
  Sprout, 
  Users, 
  AlertTriangle, 
  Hammer 
} from "lucide-react";

export const PROJECTS = [
  // ... existing projects
  {
    id: "children-floods",
    title: "Standing with Children in the Aftermath of the Floods",
    category: "disaster_relief",
    description: "In the wake of Cyclone Ditwah, which caused severe flooding and displacement across large parts of Sri Lanka, PEacE...",
    longDescription: "The recent floods have left thousands of families displaced and schools destroyed. Children are among the most vulnerable, facing risks of disease, malnutrition, and trauma. This project aims to provide immediate relief and long-term recovery support for 5,000 children across affected districts. \n\nWe are focusing on: \n1. Distribution of emergency educational kits to ensure learning doesn't stop. \n2. Setting up temporary child-friendly spaces for psychological support. \n3. Repairing and refurbishing damaged school infrastructure. \n4. Implementing clean water and sanitation (WASH) programs in schools. \n\nYour support will directly contribute to rebuilding the lives of these children and giving them a safe environment to grow and learn despite the tragedy they have faced.",
    status: "active",
    location: "Sabaragamuwa & Southern Provinces",
    requiredSkills: ["Logistics", "Child Psychology", "Teaching", "Construction"],
    budget: 1500000,
    fundsRaised: 450000,
    volunteers_needed: 50,
    start_date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "media-monitoring",
    title: "Ethical Media Monitoring for Child Protection in Sri Lanka",
    category: "community_development",
    description: "In Sri Lanka, child protection is at a crucial point due to the country's economic crisis, which has led to...",
    longDescription: "With the rise of digital media, children are increasingly exposed to harmful content and privacy violations. This initiative focuses on monitoring local media outlets and social media platforms to ensure child rights are respected and ethical reporting standards are maintained. \n\nKey objectives include: \n- Establishing a centralized monitoring hub with AI-driven detection tools. \n- Training 200 media professionals on child-safe communication. \n- Advocating for stronger legislation against online child exploitation. \n- Awareness campaigns for parents and children on digital citizenship. \n\nBy ensuring the media landscape is safe and ethical, we create a protective digital environment for the next generation of Sri Lankans.",
    status: "active",
    location: "Colombo / Islandwide",
    requiredSkills: ["IT Support", "Communication", "Legal", "Social Media"],
    budget: 800000,
    fundsRaised: 250000,
    volunteers_needed: 15,
    start_date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "voluntourism-reshaping",
    title: "Reshaping Voluntourism for Child Protection",
    category: "education",
    description: "A Global Initiative Travel has become more accessible than ever, and with it, the desire to “give back” to the...",
    longDescription: "Traditional 'voluntourism' often unintentionally harms local communities by creating dependencies or compromising child safety in institutions like orphanages. This project works to transform volunteer travel into a sustainable, child-right-centric model. \n\nOur approach involves: \n- Auditing 50 local NGOs to ensure they meet international child protection standards. \n- Developing a certification program for 'Child-Safe' volunteer placements. \n- Redirecting volunteer efforts from residential care to community-based support. \n- Educating international travelers on responsible volunteering practices. \n\nJoin us in ensuring that the desire to help translates into real, sustainable benefits for the children who need it most, without compromising their dignity or safety.",
    status: "active",
    location: "Tourism Hotspots (Galle, Kandy, Sigiriya)",
    requiredSkills: ["HR Management", "Strategic Planning", "Communication", "Auditing"],
    budget: 1200000,
    fundsRaised: 600000,
    volunteers_needed: 20,
    start_date: "2024-02-01",
    image: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sexual-exploitation-justice",
    title: "Right to Justice for Child Victims of Sexual Exploitation and Abuse",
    category: "health",
    description: "Why This Project Matters Child sexual exploitation and abuse (CSEA) is one of the gravest human rights violations affecting children...",
    longDescription: "The legal path for child victims is often re-traumatizing and slow. This project provides comprehensive legal aid and holistic support to help survivors and their families navigate the justice system and begin the healing process. \n\nWe provide: \n- Pro-bono legal representation for child victims in court cases. \n- Court accompaniment and prep for children by trained social workers. \n- Financial assistance for medical and travel expenses related to cases. \n- Long-term counseling and reintegration programs. \n\nJustice is a crucial component of healing. Your contribution helps ensure that no child victim has to stand alone against their abuser.",
    status: "active",
    location: "Western & Central Provinces",
    requiredSkills: ["Legal", "Counseling", "Social Work", "Case Management"],
    budget: 2000000,
    fundsRaised: 950000,
    volunteers_needed: 10,
    start_date: "2023-11-20",
    image: "https://images.unsplash.com/photo-1577896851231-70ef1460375e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "combating-ccsea",
    title: "Combating Child Sexual Exploitation and Abuse (CCSEA)",
    category: "community_development",
    description: "PEacE is spearheading the CCSEA project, a nationwide initiative targeting all 25 districts to combat child sexual exploitation and abuse...",
    longDescription: "CCSEA is a multi-sectoral approach to building a protective shield around Sri Lanka's children. By working with schools, local law enforcement, religious leaders, and community groups, we aim to normalize conversations about safety and reporting. \n\nProgram Pillars: \n1. Community-led surveillance networks in high-risk areas. \n2. Age-appropriate empowerment workshops for school-going children. \n3. Training for religious and community leaders on reporting mechanisms. \n4. Hotline support and rapid response protocols for case management. \n\nChanging the culture of silence is our biggest challenge. Together, we can build a society where children are heard and protected.",
    status: "active",
    location: "Islandwide (25 Districts)",
    requiredSkills: ["Training", "Public Speaking", "Counseling", "Event Coordination"],
    budget: 3500000,
    fundsRaised: 1800000,
    volunteers_needed: 100,
    start_date: "2023-12-01",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "coastal-restoration",
    title: "Coastal Ecosystem Restoration & Protection",
    category: "environment",
    description: "Successfully replanted 50 hectares of mangroves along the eastern coast to protect against storm surges and restore natural marine habitats.",
    longDescription: "Our Coastal Restoration project was a major milestone in environmental conservation in the Eastern Province. Over two years, we mobilized local communities to replant 50 hectares of mangroves and restore coral reefs. This has significantly enhanced the natural defense against erosion and storm surges, while also providing a sanctuary for local marine life. The project also included sustainable livelihood training for 200 fishing families to ensure long-term ecological balance.",
    status: "completed",
    location: "Batticaloa District",
    requiredSkills: ["Marine Biology", "Project Management", "Community Outreach"],
    budget: 2500000,
    fundsRaised: 2500000,
    volunteers_needed: 40,
    start_date: "2022-01-15",
    end_date: "2023-12-20",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "rural-water",
    title: "Clean Water for Rural Schools",
    category: "infrastructure",
    description: "Provided sustainable solar-powered water filtration systems to 15 rural schools in the Anuradhapura district, ensuring safe drinking water for 4,500 students.",
    longDescription: "Access to clean drinking water was a critical challenge for many schools in the dry zone. This project successfully installed solar-powered water filtration and storage systems in 15 schools, benefiting over 4,500 students and staff. We also conducted comprehensive hygiene awareness programs. The systems are now managed by local school boards, ensuring sustainability and health for the next generation.",
    status: "completed",
    location: "Anuradhapura District",
    requiredSkills: ["Civil Engineering", "Health Education", "Maintenance"],
    budget: 1800000,
    fundsRaised: 1800000,
    volunteers_needed: 15,
    start_date: "2023-05-10",
    end_date: "2024-01-30",
    image: "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "youth-mentorship",
    title: "Urban Youth Professional Mentorship Program",
    category: "community_development",
    description: "Connected 100 urban youth with industry leaders for a successful 6-month career development journey, resulting in high employment outcomes.",
    longDescription: "The Youth Mentorship Program aimed to bridge the gap between education and employment for underprivileged urban youth. We successfully paired 100 students with mentors from the technology, finance, and creative industries. The program included soft skills workshops, internship placements, and career coaching. Over 70% of participants secured employment or advanced training opportunities within three months of completion.",
    status: "completed",
    location: "Colombo Municipal Area",
    requiredSkills: ["Mentoring", "Corporate Relations", "Career Coaching"],
    budget: 500000,
    fundsRaised: 505000,
    volunteers_needed: 120,
    start_date: "2023-06-01",
    end_date: "2023-12-01",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
  }
];

export const ACTIVITIES = [
  {
    id: "nysc-colombo",
    title: "Awareness Programme for NYSC Youth – Colombo District",
    date: "November 2024",
    location: "Colombo",
    description: "Another successful programme, another group having their minds enlightened. This was a two-day training programme which was conducted for the youth of the National Youth Services Council in Colombo. The sessions focused on identifying different forms of exploitation and understanding the legal frameworks available for protection.",
    shortDescription: "A two-day training session empowering Colombo's youth with knowledge on exploitation prevention and legal protections.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb28f74b671?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "symposium-2024",
    title: "First Global Academic Symposium on Monitoring & Evaluation Education – 2024",
    date: "October 2024",
    location: "Global",
    description: "Our Monitoring and Evaluation Officer (MEAL), Pradeep participated at the first-ever global Academic Symposium on Monitoring & Evaluation Education, which brought together experts from across the world to discuss innovative strategies for measuring social impact and ensuring transparency in humanitarian projects.",
    shortDescription: "Global experts gathered to share innovative strategies for measuring social impact and improving project transparency.",
    image: "https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "childrens-day-2024",
    title: "Universal Children's Day 2024 Celebrations",
    date: "November 20, 2024",
    location: "Island-wide",
    description: "To mark Universal Children's Day, which took place on 20th November 2024, PEaCE (Protecting Environment and Children Everywhere) partnered with local community leaders to host a series of festivals and educational workshops celebrating children's rights and fostering a safe environment for every child.",
    shortDescription: "Island-wide festivals and workshops celebrating children's rights and promoting safety for every child in Sri Lanka.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "nysc-maharagama",
    title: "Awareness Programme for NYSC Youth in Maharagama",
    date: "October 2024",
    location: "Maharagama",
    description: "An awareness programme in the ongoing series aimed at educating youth about child sexual exploitation and abuse was held on the Maharagama NYSC premises. The event combined interactive group activities with expert lectures to empower young individuals to be proactive in community safety.",
    shortDescription: "Interactive workshops in Maharagama educating youth on preventing sexual exploitation and abuse within communities.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "puppet-show-keells",
    title: "A Special Puppet Show Organised by John Keells Foundation, in collaboration with PEaCE",
    date: "September 2024",
    location: "Multiple Locations",
    description: "On 26th September 2024, a special puppet show aimed to educate a gathering of school students from a number of schools in rural areas. This creative medium was highly effective in conveying sensitive messages about personal safety and hygiene to younger children in an engaging way.",
    shortDescription: "Creative puppet shows educating rural students on personal safety and hygiene through engaging storytelling.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "elipitiya-awareness",
    title: "Awareness Programmes for Students and Parents in Elpitiya",
    date: "August 2024",
    location: "Elpitiya",
    description: "As part of the ongoing FVF-funded programme to raise awareness on Prevention of Child Sexual Exploitation and Abuse, an awareness session was conducted in Elpitiya. The direct engagement with parents proved crucial in establishing a collaborative network for child protection at the local household level.",
    shortDescription: "Collaborative sessions in Elpitiya engaging parents and students in building local child protection networks.",
    image: "https://images.unsplash.com/photo-1509062522246-37559ee23c75?q=80&w=800&auto=format&fit=crop"
  }
];

export const REPORTS = [
  {
    id: "annual-report-2023",
    title: "Annual Progress Report 2023",
    year: "2023",
    type: "annual",
    description: "A comprehensive overview of our impact, financial performance, and key milestones achieved during the year 2023.",
    downloadUrl: "#"
  },
  {
    id: "annual-report-2022",
    title: "Annual Progress Report 2022",
    year: "2022",
    type: "annual",
    description: "Reflecting on a year of resilience and community support, documenting our core projects and success stories.",
    downloadUrl: "#"
  },
  {
    id: "research-csea-2024",
    title: "Research on Child Sexual Exploitation Trends in Digital Spaces",
    year: "2024",
    type: "research",
    description: "A critical study on the emerging threats to children in online environments and recommended mitigation strategies.",
    downloadUrl: "#"
  },
  {
    id: "research-disaster-resilience",
    title: "Community Resilience in Flood-Prone Districts",
    year: "2023",
    type: "research",
    description: "Examining the effective of local response mechanisms and the role of youth in disaster risk reduction.",
    downloadUrl: "#"
  }
];


export const getCategoryIcon = (category) => {
  switch (category) {
    case "health": return Stethoscope;
    case "education": return GraduationCap;
    case "environment": return Sprout;
    case "community_development": return Users;
    case "disaster_relief": return AlertTriangle;
    case "infrastructure": return Hammer;
    case "other": return Heart;
    default: return Heart;
  }
};

export const getCategoryLabel = (category) => {
  return category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
