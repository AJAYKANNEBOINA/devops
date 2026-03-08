export interface WalkInDrive {
  id: string;
  company: string;
  companyLogo: string;
  role: string;
  date: string;
  time: string;
  city: string;
  location: string;
  locationUrl: string;
  experience: string;
  salary: string;
  openings: number;
  skills: string[];
  description: string;
  requirements: string[];
  documents: string[];
  isVerified: boolean;
  isHot: boolean;
  isNew: boolean;
  category: string;
  type: string;
}

export const mockDrives: WalkInDrive[] = [
  {
    id: "1",
    company: "Infosys",
    companyLogo: "/images/companies/infosys.svg",
    role: "Software Engineer",
    date: "2026-03-15",
    time: "09:00 AM - 05:00 PM",
    city: "Bengaluru",
    location: "Infosys Campus, Electronics City Phase 1, Bengaluru - 560100",
    locationUrl: "https://maps.google.com",
    experience: "0-2 years",
    salary: "₹3.5L - ₹6L per annum",
    openings: 150,
    skills: ["Java", "Python", "SQL", "Problem Solving"],
    description: "Infosys is conducting a Walk-in Drive for Software Engineers at our Bengaluru campus. Join our world-class team and build innovative solutions for global clients.",
    requirements: ["B.E/B.Tech/M.Tech in CS/IT/ECE", "60% throughout academics", "No active backlogs", "Strong programming skills"],
    documents: ["Updated Resume (5 copies)", "Aadhar Card (original + photocopy)", "10th & 12th Marksheets", "Graduation Certificate", "Passport size photographs (4)"],
    isVerified: true,
    isHot: true,
    isNew: true,
    category: "Technology",
    type: "Full-time",
  },
  {
    id: "2",
    company: "Wipro",
    companyLogo: "/images/companies/wipro.svg",
    role: "Business Analyst",
    date: "2026-03-16",
    time: "10:00 AM - 04:00 PM",
    city: "Hyderabad",
    location: "Wipro SEZ, Gachibowli, Hyderabad - 500032",
    locationUrl: "https://maps.google.com",
    experience: "1-3 years",
    salary: "₹5L - ₹9L per annum",
    openings: 80,
    skills: ["Business Analysis", "Excel", "SQL", "Communication"],
    description: "Wipro is hiring Business Analysts for their digital transformation projects. Walk in directly — no prior registration needed.",
    requirements: ["MBA/B.Tech with relevant experience", "Strong analytical skills", "Proficiency in MS Office", "Excellent communication"],
    documents: ["Resume", "Government ID Proof", "Experience Certificates", "Last 3 months salary slips"],
    isVerified: true,
    isHot: false,
    isNew: true,
    category: "Business",
    type: "Full-time",
  },
  {
    id: "3",
    company: "TCS",
    companyLogo: "/images/companies/tcs.svg",
    role: "Data Analyst",
    date: "2026-03-17",
    time: "09:30 AM - 03:30 PM",
    city: "Mumbai",
    location: "TCS House, Raveline Street, Fort, Mumbai - 400001",
    locationUrl: "https://maps.google.com",
    experience: "0-3 years",
    salary: "₹4L - ₹8L per annum",
    openings: 120,
    skills: ["Python", "Tableau", "SQL", "Data Visualization"],
    description: "TCS Walk-in Drive for Data Analysts. Be part of India's largest IT company and work on cutting-edge analytics projects.",
    requirements: ["B.E/B.Tech/MCA/M.Sc", "Knowledge of Python and SQL", "Experience with BI tools preferred", "Strong problem-solving skills"],
    documents: ["Updated Resume", "Photo ID", "Academic Certificates", "Experience Letter (if applicable)"],
    isVerified: true,
    isHot: true,
    isNew: false,
    category: "Technology",
    type: "Full-time",
  },
  {
    id: "4",
    company: "Accenture",
    companyLogo: "/images/companies/accenture.svg",
    role: "Customer Support Executive",
    date: "2026-03-18",
    time: "10:00 AM - 06:00 PM",
    city: "Pune",
    location: "Accenture, SB Road, Shivaji Nagar, Pune - 411016",
    locationUrl: "https://maps.google.com",
    experience: "0-1 years",
    salary: "₹2.5L - ₹4L per annum",
    openings: 200,
    skills: ["Communication", "Customer Service", "English Proficiency", "Problem Solving"],
    description: "Accenture Walk-in for Customer Support roles. Excellent opportunity for freshers and experienced candidates alike.",
    requirements: ["Any Graduate", "Excellent verbal & written communication", "Basic computer knowledge", "Willingness to work in shifts"],
    documents: ["Resume", "Aadhar Card", "Pan Card", "Academic Documents", "Photographs"],
    isVerified: true,
    isHot: false,
    isNew: true,
    category: "BPO",
    type: "Full-time",
  },
  {
    id: "5",
    company: "HCL Technologies",
    companyLogo: "/images/companies/hcl.svg",
    role: "UI/UX Designer",
    date: "2026-03-19",
    time: "10:00 AM - 04:00 PM",
    city: "Chennai",
    location: "HCL Towers, Sholinganallur, Chennai - 600119",
    locationUrl: "https://maps.google.com",
    experience: "2-5 years",
    salary: "₹8L - ₹15L per annum",
    openings: 30,
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "HTML/CSS"],
    description: "HCL Technologies is looking for talented UI/UX Designers for their product engineering division.",
    requirements: ["B.Des/B.Tech with Design background", "Strong portfolio required", "Proficiency in design tools", "Understanding of user-centered design"],
    documents: ["Resume with Portfolio Link", "Photo ID", "Academic Certificates", "Experience Certificates"],
    isVerified: true,
    isHot: true,
    isNew: false,
    category: "Design",
    type: "Full-time",
  },
  {
    id: "6",
    company: "Cognizant",
    companyLogo: "/images/companies/cognizant.svg",
    role: "DevOps Engineer",
    date: "2026-03-20",
    time: "09:00 AM - 05:00 PM",
    city: "Bengaluru",
    location: "Cognizant Technology Solutions, Manyata Tech Park, Bengaluru - 560045",
    locationUrl: "https://maps.google.com",
    experience: "2-6 years",
    salary: "₹10L - ₹18L per annum",
    openings: 50,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"],
    description: "Cognizant Walk-in for experienced DevOps Engineers. Work on enterprise cloud infrastructure projects.",
    requirements: ["B.E/B.Tech in CS/IT", "Hands-on experience with cloud platforms", "Strong knowledge of containerization", "CI/CD pipeline experience"],
    documents: ["Resume", "Government ID", "Experience Certificates", "Offer Letters from previous employers"],
    isVerified: true,
    isHot: false,
    isNew: true,
    category: "Technology",
    type: "Full-time",
  },
];

export const mockCompanies = [
  { id: "1", name: "Infosys", logo: "/images/companies/infosys.svg" },
  { id: "2", name: "Wipro", logo: "/images/companies/wipro.svg" },
  { id: "3", name: "TCS", logo: "/images/companies/tcs.svg" },
  { id: "4", name: "Accenture", logo: "/images/companies/accenture.svg" },
  { id: "5", name: "HCL", logo: "/images/companies/hcl.svg" },
  { id: "6", name: "Cognizant", logo: "/images/companies/cognizant.svg" },
  { id: "7", name: "Capgemini", logo: "/images/companies/capgemini.svg" },
  { id: "8", name: "IBM", logo: "/images/companies/ibm.svg" },
];

export const cities = ["Bengaluru", "Hyderabad", "Mumbai", "Pune", "Chennai", "Delhi NCR", "Kolkata", "Ahmedabad"];
export const roles = ["Software Engineer", "Data Analyst", "Business Analyst", "UI/UX Designer", "DevOps Engineer", "Customer Support", "Product Manager", "QA Engineer"];
export const categories = ["Technology", "Business", "Design", "BPO", "Finance", "Marketing", "HR", "Operations"];
