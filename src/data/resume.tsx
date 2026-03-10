import { Icons } from "@/components/icons";
import { Component, HomeIcon, NotebookIcon, Subtitles } from "lucide-react";

export const DATA = {
  name: "Aryan Rathod ",
  initials: "AR",
  url: "https://www.aryanrathod.com",
  location: "Ahmedabad, Gujrat",
  locationLink: "https://www.google.com/maps/place/ahmedabad",
  description:
    "Computer Engineering student and aspiring Full Stack Developer passionate about building modern web applications. I enjoy solving real-world problems through code and continuously improving my skills in HTML, CSS, JavaScript, and backend technologies. Currently focused on developing scalable projects and exploring the world of SaaS and startups.",
  summary:
    "I am a dedicated Full Stack Developer currently pursuing a Diploma in Computer Engineering. Passionate about front-end and back-end technologies, I focus on building responsive, user-friendly, and efficient web applications. I continuously improve my skills by working on practical projects and exploring new tools. I enjoy solving real-world problems and turning innovative ideas into impactful digital solutions.",
  avatarUrl: "/aryan.jpg",
  skills: [
    // ✅ Core Skills (kept)
    "Python",
    "JavaScript / TypeScript",
    "React.js / Next.js",
    "Tailwind CSS",
    "SQL & MongoDB",
    "Git & GitHub",
    "AWS",
    "AI Integration & Generative AI",
  
    // ❌ Removed (secondary / less impactful)
    // "Arduino / ESP32",
    // "C",
    // "HTML/CSS",
    // "Flask",
    // "Django",
    // "Bootstrap",
    // "Convex",
    // "Clerk Auth",
    // "Supabase",
    // "Firebase",
    // "MicroPython",
    // "Data Structures and Algorithms",
    // "Object-Oriented Programming (OOP)",
    // "REST API Development",
    // "Debugging and Testing",
    // "UI/UX Design",
    // "Figma",
    // "Responsive Web Design",
    // "Team Collaboration Tools",
    // "Agile & Project Management",
    // "Prompt Engineering",
  ],
  
  Certificates: [
    {
      key: "Introduction to AI Concepts",
      href: "https://learn.microsoft.com/api/achievements/share/en-us/AryanRathod-5160/82ANTMTW?sharingId=96B566CE0097C108",
      site: "Microsoft learn",
      logoUrl: "/certificate.png",
      subtitle: "Certificate",
      title: "Introduction to AI Concepts",
      time: "2024",
    },
    {
      key: "Introduction To Machine Learning",
      href: "https://learn.microsoft.com/api/achievements/share/en-us/AryanRathod-5160/7BP232FZ?sharingId=96B566CE0097C108",
      site: "Microsoft learn",
      logoUrl: "/certificate.png",
      subtitle: "Certificate",
      title: "Introduction to Machine Learning",
      time: "2024",
    },
    /*
    {
      key: "Introduction to Python",
      href: "https://learn.microsoft.com/api/achievements/share/en-us/tirthrathod-7927/YVYMTQKR?sharingId=54EA46035487F767",
      site: "Microsoft learn",
      logoUrl: "/certificate.png",
      subtitle: "Certificate",
      title: "Introduction to Python",
      time: "2024",
    },*/ 
    /*
    {
      key: "Google Analytics",
      href: "https://skillshop.exceedlms.com/student/award/gTjFn4eiFhVhok6eeYUYWwqs",
      site: "Grow With Google",
      logoUrl: "/certificate.png",
      subtitle: "Certificate",
      title: "Google Analytics",
      time: "2024",
    }, */
    {
      key: "Introduction to Generative AI",
      href: "https://drive.google.com/file/d/1SvEDE9a45KeqbHQa0CMX8b-zDADetqkJ/view?usp=drive_link",
      site: "Guvi Hcl",
      logoUrl: "/certificate.png",
      subtitle: "Certificate",
      title: "Introduction to Generative AI",
      time: "2024",
    },
    /*
    {
      key: "Machine learning and artificial intelligence",
      href: "https://drive.google.com/file/d/14Qg31Tahf7M_gcZaQww7li4d_zWiYOHc/view?usp=sharing",
      site: "Grow With Google",
      logoUrl: "/certificate.png",
      subtitle: "Certificate",
      title: "Machine learning and artificial intelligence",
      time: "2024",
    },
    {
      key: "UX Design",
      href: "https://drive.google.com/file/d/1VEynDAE_Lxqm8oI0l38-we2gF7JqlkqF/view?usp=sharing",
      site: "Grow With Google",
      logoUrl: "/certificate.png",
      subtitle: "Certificate",
      title: "UX Design",
      time: "2024",
    },*/

    // "Fundamentals of machine learning",
    // "Introduction to Python",
    // "Google Analytics for Beginners",
    // "Advanced Google Analytics",
    // "Introduction to Generative AI",
    // "Machine learning and artificial intelligence",
    // "UX Design",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/component", icon: Component, label: "Component"}
  ],
  contact: {
    email: "aaryan.b.rathod99@gmail.com",
    tel: "+919316688014",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rathodaryan1",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/24-7233aryanrathod/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_rathodaryan_",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "None",
      href: "",
      badges: [],
      location: "",
      title: "",
      logoUrl: "",
      start: "",
      end: "",
      description:
        "",
    },
    // {
    //   company: "Shopify",
    //   badges: [],
    //   href: "https://shopify.com",
    //   location: "Remote",
    //   title: "Software Engineer",
    //   logoUrl: "/shopify.svg",
    //   start: "January 2021",
    //   end: "April 2021",
    //   description:
    //     "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    // },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
  ],
  education: [
    {
      school: "R.C. Technical Institute",
      href: "https://rcti.ac.in",
      degree: "Diploma in Computer Engineering",
      logoUrl: "/RCTI_Logo.png",
      start: "2024",
      end: "2027",
    },
    {
      school: "Sunrise English Medium School",
      href: "https://www.facebook.com/SunriseEnglishMediumSchoolPalitana/",
      degree: "10th",
      logoUrl: "/sunrise.png",
      start: "2013",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Shree Enterprise ",
      href: "https://shreeenterprisebhavnagar.com/",
      dates: "July 2025",
      active: true,
      description: "Leading provider of fire safety solutions in Bhavnagar and surrounding areas.",
      technologies: [
        "Typescript",
        "supabase",
        "vercel app"
      ],
      links: [
        {
          type: "Shree Enterprise",
          href: "https://shreeenterprisebhavnagar.com/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/shreelogo.jpg",
      video: "",
    },
    {
      title: "Laalo Movie",
      href: "https://laalo-movie.vercel.app/",
      dates: "June 2025",
      active: true,
      description: "Laalo is a cinematic exploration of devotion and divine destiny, following a journey through spiritual awakening.",
      technologies: [
        "Typescript",
        "CSS",
        "github",
        "shadcn",
      ],
      links: [
        {
          type: "Laalo Movie",
          href: "https://laalo-movie.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/laalologo.jpg",
      video: "",
    },
    // {
    //   title: "CollabCode",
    //   href: "https://collabcode-chi.vercel.app/",
    //   dates: "Feb 2025",
    //   active: true,
    //   description:
    //     "Interactive Code Editor",
    //   technologies: [
    //     "next.js",
    //     "Typescript",
    //     "convex",
    //     "clerk",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://collabcode-chi.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/collabcode.png",
    //   video:
    //     "",
    // },
    // {
    //   title: "Sky Vault",
    //   href: "https://sky-vault-kappa.vercel.app/",
    //   dates: "Mar 2025",
    //   active: true,
    //   description:
    //     "File sharing and Cloud storing",
    //   technologies: [
    //     "next.js",
    //     "Typescript",
    //     "convex",
    //     "clerk",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://sky-vault-kappa.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/collabcode.png",
    //   video:
    //     "",
    // },
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
  ],
  hackathons: [
    {
      title: "none",
      dates: "",
      location: "",
      description:
        "",
      image:
        "",
      mlh: "",
      links: [],
    },
    // {
    //   title: "Hack The North",
    //   dates: "September 14th - 16th, 2018",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mobile application which delivers university campus wide events in real time to all students.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
  ],
} as const;
