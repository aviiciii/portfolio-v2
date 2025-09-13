import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

// export const DATA = {
//   name: "Laaveshwaran Parthiban",
//   initials: "LP",
//   url: "https://laavesh.dev",
//   location: "San Francisco, CA",
//   locationLink: "https://www.google.com/maps/place/chennai",
//   description:
//     "SDE at Acies Global",
//   summary:
//     "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
//   avatarUrl: "/me.png",
//   skills: [
//     "React",
//     "Next.js",
//     "Typescript",
//     "Node.js",
//     "Python",
//     "Go",
//     "Postgres",
//     "Docker",
//     "Kubernetes",
//     "Java",
//     "C++",
//   ],
//   navbar: [
//     { href: "/", icon: HomeIcon, label: "Home" },
//     { href: "/blog", icon: NotebookIcon, label: "Blog" },
//   ],
//   contact: {
//     email: "laavesh1@gmail.com",
//     tel: "+917338981885",
//     social: {
//       GitHub: {
//         name: "GitHub",
//         url: "https://github.com/aviiciii",
//         icon: Icons.github,

//         navbar: true,
//       },
//       LinkedIn: {
//         name: "LinkedIn",
//         url: "https://www.linkedin.com/in/laavesh/",
//         icon: Icons.linkedin,

//         navbar: true,
//       },
//       X: {
//         name: "X",
//         url: "https://dub.sh/dillion-twitter",
//         icon: Icons.x,

//         navbar: false,
//       },
//       Youtube: {
//         name: "Youtube",
//         url: "https://dub.sh/dillion-youtube",
//         icon: Icons.youtube,
//         navbar: false,
//       },
//       email: {
//         name: "Send Email",
//         url: "mailto:laavesh1@gmail.com",
//         icon: Icons.email,

//         navbar: true,
//       },
//     },
//   },

//   work: [
//     {
//       company: "Acies Global",
//       href: "https://aciesglobal.com",
//       badges: [],
//       location: "Chennai, India",
//       title: "Associate Software Engineer",
//       logoUrl: "/atomic.png",
//       start: "Dec 2024",
//       end: "Present",
//       description:
//         "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
//     },
//     {
//       company: "AuralApp",
//       href: "https://atomic.finance",
//       badges: [],
//       location: "Chennai, India",
//       title: "Internship - Software Engineer",
//       logoUrl: "/atomic.png",
//       start: "Dec 2024",
//       end: "Present",
//       description:
//         "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
//     },

//   ],
//   education: [
//     {
//       school: "Buildspace",
//       href: "https://buildspace.so",
//       degree: "s3, s4, sf1, s5",
//       logoUrl: "/buildspace.jpg",
//       start: "2023",
//       end: "2024",
//     },
//     {
//       school: "University of Waterloo",
//       href: "https://uwaterloo.ca",
//       degree: "Bachelor's Degree of Computer Science (BCS)",
//       logoUrl: "/waterloo.png",
//       start: "2016",
//       end: "2021",
//     },
//     {
//       school: "Wilfrid Laurier University",
//       href: "https://wlu.ca",
//       degree: "Bachelor's Degree of Business Administration (BBA)",
//       logoUrl: "/laurier.png",
//       start: "2016",
//       end: "2021",
//     },
//     {
//       school: "International Baccalaureate",
//       href: "https://ibo.org",
//       degree: "IB Diploma",
//       logoUrl: "/ib.png",
//       start: "2012",
//       end: "2016",
//     },
//   ],
//   projects: [
//     {
//       title: "Chat Collect",
//       href: "https://chatcollect.com",
//       dates: "Jan 2024 - Feb 2024",
//       active: true,
//       description:
//         "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Stripe",
//         "Shadcn UI",
//         "Magic UI",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://chatcollect.com",
//           icon: <Icons.globe className="size-3" />,
//         },
//       ],
//       image: "",
//       video:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
//     },
//     {
//       title: "Magic UI",
//       href: "https://magicui.design",
//       dates: "June 2023 - Present",
//       active: true,
//       description:
//         "Designed, developed and sold animated UI components for developers.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Stripe",
//         "Shadcn UI",
//         "Magic UI",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://magicui.design",
//           icon: <Icons.globe className="size-3" />,
//         },
//         {
//           type: "Source",
//           href: "https://github.com/magicuidesign/magicui",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "",
//       video: "https://cdn.magicui.design/bento-grid.mp4",
//     },
//     {
//       title: "llm.report",
//       href: "https://llm.report",
//       dates: "April 2023 - September 2023",
//       active: true,
//       description:
//         "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Shadcn UI",
//         "Magic UI",
//         "Stripe",
//         "Cloudflare Workers",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://llm.report",
//           icon: <Icons.globe className="size-3" />,
//         },
//         {
//           type: "Source",
//           href: "https://github.com/dillionverma/llm.report",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "",
//       video: "https://cdn.llm.report/openai-demo.mp4",
//     },
//     {
//       title: "Automatic Chat",
//       href: "https://automatic.chat",
//       dates: "April 2023 - March 2024",
//       active: true,
//       description:
//         "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Shadcn UI",
//         "Magic UI",
//         "Stripe",
//         "Cloudflare Workers",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://automatic.chat",
//           icon: <Icons.globe className="size-3" />,
//         },
//       ],
//       image: "",
//       video:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
//     },
//   ],

// } as const;

export const DATA = {
	name: "Laaveshwaran Parthiban",
	initials: "LP",
	url: "https://laavesh.dev",
	image: "/ogtag.png",
	location: "Chennai, India",
	locationLink: "https://www.google.com/maps/place/chennai",
	description: "Associate Software Engineer at Acies Global",
	summary:
		"Passionate Software Engineer with hands-on experience in backend development, API design, and scalable system architecture. Skilled in .NET, Flask, and cloud platforms like GCP and Azure. A proactive team player dedicated to solving real-world problems through efficient, maintainable code.",
	avatarUrl: "/me.jpeg",
	skills: ["Python (Flask, Django)", ".NET", "Java", "JavaScript", "Deluge", "MySQL", "MongoDB", "Firebase", "CockroachDB", "GCP", "Azure", "Git", "Postman"],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/blog", icon: NotebookIcon, label: "Blog" },
	],
	contact: {
		email: "laavesh1@gmail.com",
		tel: "+917338981885",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/aviiciii",
				icon: Icons.github,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/laavesh/",
				icon: Icons.linkedin,

				navbar: true,
			},
			X: {
				name: "X",
				url: "https://dub.sh/dillion-twitter",
				icon: Icons.x,

				navbar: false,
			},
			Youtube: {
				name: "Youtube",
				url: "https://dub.sh/dillion-youtube",
				icon: Icons.youtube,
				navbar: false,
			},
			email: {
				name: "Send Email",
				url: "mailto:laavesh1@gmail.com",
				icon: Icons.email,

				navbar: true,
			},
		},
	},

	work: [
		{
			company: "Acies Global",
			href: "https://aciesglobal.com",
			badges: [],
			location: "Chennai, India",
			title: "Associate Software Engineer",
			logoUrl: "/aciesglobal.png",
			start: "Dec 2024",
			end: "Present",
			description:
				"Built scalable backend APIs using .NET with clean architecture. Conducted root cause analysis, data pattern recognition, and used SQL to generate insights for client-specific solutions.",
		},
		{
			company: "AuralApp",
			href: "https://auralapp.in",
			badges: [],
			location: "Chennai, India",
			title: "Intern - Backend Developer",
			logoUrl: "/auralapp.jpeg",
			start: "Nov 2023",
			end: "Feb 2024",
			description:
				"Developed APIs with Flask and designed SQL databases to support a gamified sign language learning platform. Maintained testing and documentation for collaborative team development.",
		},
	],

	education: [
		{
			school: "Panimalar Engineering College",
			href: "https://panimalar.ac.in",
			degree: "B.Tech - Computer Science & Business Systems",
			logoUrl: "/pec.png",
			start: "Sep 2021",
			end: "Apr 2025",
		},
	],

	projects: [
		{
      title: "Eventopia",
      href: "https://eventopia.in",
      dates: "May 2025 - Present",
      active: true,
      description:
        "An event listing portal for college events, festivals, and hackathons.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://eventopia.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
	  video: "",
    },
		{
			title: "Unique Student Identity & Profile System",
			href: "https://github.com/ashwin3082002/CodeAlpha-SIH",
			dates: "Aug 2022 – Oct 2022",
			active: true,
			description: "Secure system for verified organizations to access academic records of students. Winner of Smart India Hackathon 2022.",
			technologies: ["Django", "Python", "MySQL", "REST API", "GCP"],
			links: [
        {
          type: "Source",
          href: "https://github.com/ashwin3082002/CodeAlpha-SIH",
          icon: <Icons.github className="size-3" />,
        },
      ],
		},
		{
			title: "Vercel Bot for Zoho Cliq",
			href: "https://github.com/aviiciii/cliqtrix24",
			dates: "Nov 2023 – Dec 2023",
			active: true,
			description: "Built a Zoho Cliq extension for managing Vercel projects using slash commands, real-time webhooks, and OAuth2 integration.",
			technologies: ["Deluge", "OAuth2", "Zoho Creator", "REST API"],
			links: [
        {
          type: "Source",
          href: "https://github.com/aviiciii/cliqtrix24",
          icon: <Icons.github className="size-3" />,
        },
      ],
		},
		
		{
			title: "QR Hacker Check-In",
			dates: "Dec 2023 – Jan 2024",
			active: true,
			description: "Developed a QR-based check-in system for PEC Hacks using Flask backend and Google Sheets API for real-time data sync.",
			technologies: ["Flask", "JavaScript", "Google Sheets API", "QR Code"],
		},
    {
			title: "Boostfolio – AI Portfolio Enhancer",
			dates: "Jun, 2023",
			active: true,
			description: "Winner of MLH Hack Your Portfolio. Built Django backend with OpenAI integration to give resume-based recommendations.",
			technologies: ["Django", "OpenAI", "REST API", "Web Development"],


		},
		{
			title: "Clipboard in the Cloud",
			dates: "Apr 2023 – Jun 2023",
			active: true,
			description: "Clipboard site with Flask backend on Azure Web Apps and Firebase Realtime DB integration.",
			technologies: ["Flask", "Azure", "Firebase", "API", "NoSQL"],
		},
	],

	certifications: [
		"GCP Associate Cloud Engineer (July 2024)",
		"Azure Fundamentals (June 2024)",
		"Azure AI Fundamentals (June 2024)",
		"GitHub Foundations (June 2024)",
		"GitHub Actions (August 2024)",
	],

	honors: ["Winner - Smart India Hackathon 2022", "Winner - Hack Your Portfolio (MLH) June 2023", "Grand Finalist - PRoDIGI 2023 (Cognizant)"],

	positions: [
		{
			title: "Microsoft Learn Student Ambassador",
			start: "Oct 2023",
			end: "May 2024",
			location: "Hybrid",
			description: "Led cloud skill challenges and promoted Microsoft developer tools and services among peers.",
		},
		{
			title: "Postman Student Leader",
			start: "Sep 2023",
			end: "May 2024",
			location: "Hybrid",
			description: "Conducted API workshops and promoted API literacy in student communities.",
		},
		{
			title: "Event Director - PEC Hacks",
			start: "Jul 2023",
			end: "Dec 2024",
			location: "Chennai, India",
			description: "Led logistics, student engagement, and overall coordination of PEC Hacks hackathon.",
		},
		{
			title: "Core Team Lead - Google Developer Student Clubs",
			start: "Aug 2023",
			end: "Jun 2024",
			location: "Chennai, India",
			description: "Led Google Cloud learning paths and trained 300+ students under GDSC.",
		},
	],
	hackathons: [
		{
			title: "Electrothon 6.0",
			dates: "Jan 24th - 26th, 2024",
			location: "NIT Hamirpur, Himachal Pradesh, India",
			description:
				"Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
			image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/aviiciii/RenalCare",
				},
			],
		},
		{
			title: "Hack For Hackers",
			dates: "May 19th - 21st, 2017",
			location: "Global (Online)",
			description: "Improved PocketDoc and submitted to online competition",
			image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
			win: "Top 10 Finalist | Honourable Mention",
			links: [
				{
					title: "Medium Article",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
				},
				{
					title: "Devpost",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://devpost.com/software/hackportal",
				},
				{
					title: "YouTube",
					icon: <Icons.youtube className="h-4 w-4" />,
					href: "https://www.youtube.com/watch?v=uXDcHNF1XHg",
				},
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/aviiciii/hack4hackers",
				},
			],
		},
		{
			title: "Pride Hacks",
			dates: "June 16 - 18, 2023",
			location: "Global (Online)",
			description: "Improved PocketDoc and submitted to online competition",
			image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
			win: "Top 10 Finalist | Honourable Mention",
			links: [
				{
					title: "Devpost",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://devpost.com/software/rainbow-ally",
				},
				{
					title: "YouTube",
					icon: <Icons.youtube className="h-4 w-4" />,
					href: "https://www.youtube.com/watch?v=ppL8flLyPTU",
				},
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/HetviSoni/rainbow-ally",
				},
			],
		},
		{
			title: "Hack your Portfolio",
			dates: "June 2 - 4, 2023",
			location: "Remote (Global)",
			description: "Developed a mobile game which enables city-wide manhunt with random lobbies",
			image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
			links: [
				
				{
					title: "Devpost",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://devpost.com/software/hack-your-portfolio-placeholder",
				},
				{
					title: "YouTube",
					icon: <Icons.youtube className="h-4 w-4" />,
					href: "https://www.youtube.com/watch?v=-YPzn3-8oQI",
				},
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/aviiciii/boostfolio",
				},
			],
		},
		
		{
			title: "PRoDIGI by Cognizant Technology Solutions",
			dates: "April, 2023",
			location: "Chennai, India",
			description:
				"Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
			image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
			links: [
				{
					title: "Devpost",
					icon: <Icons.globe className="h-4 w-4" />,
					href: "https://devpost.com/software/pocketdoc-react-native",
				},
				{
					title: "YouTube",
					icon: <Icons.youtube className="h-4 w-4" />,
					href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
				},
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/dillionverma/pocketdoc-react-native",
				},
			],
		},
		{
			title: "St. Joseph Hackathon",
			dates: "April 28th - 30th, 2017",
			location: "Chennai, India",
			description:
				"Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
			image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/dillionverma/earthwatch",
				},
			],
		},
		
		{
			title: "Hackverse",
			dates: "March 4th - 5th, 2023",
			location: "Chennai, India",
			description:
				"Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
			image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
			win: "1st Place Winner",
			mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
			links: [
				{
					title: "Source (Mobile)",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/aviiciii/escrow_blockchain",
				},
			],
		},
		
		{
			title: "Diversion",
			dates: "November 26, 2023",
			location: "Kolkata, India",
			description: "Developed a mock of Windows 11 with interesting notifications and functionality",
			image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/ashwin3082002/diverision2k23",
				},
			],
		},
		{
			title: "Health Care Hackathon",
			dates: "November 11 - 13, 2022",
			location: "IIIT-S & EMIDS, Sri City, India",
			description:
				"Student Identification Portal is a unique identification system for students and institutions. This is a problem statement issued by MeitY. The system works to reduce time and the hassel caused to students, institutions and organizations to verify the student's credentials and their educational history. Our project was selected as the Winner🏆 in Smart India Hackathon 2022.",
			image: "https://media.licdn.com/dms/image/v2/C510BAQGAmTUtxpvm0Q/company-logo_100_100/company-logo_100_100/0/1630581404006?e=1755129600&v=beta&t=dYHDtMVreWNNXBaFdhGC7H8LjXIjhYepd3NpBpSVDrQ",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/ashwin3082002/CodeAlpha_SIH",
				},
			],
		},
		{
			title: "FABC Blockchain Hackathon",
			dates: "September 14, 2022",
			location: "Chennai, India & Dubai, UAE",
			description: "Developed neural network to optimize a mining process",
			image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/ashwin3082002/SIP_Blockchain",
				},
			],
		},
		{
			title: "Smart India Hackathon 2022",
			dates: "August 25 - 26, 2022",
			location: "Warangal, India",
			description:
				"Student Identification Portal is a unique identification system for students and institutions. This is a problem statement issued by MeitY. The system works to reduce time and the hassel caused to students, institutions and organizations to verify the student's credentials and their educational history. Our project was selected as the Winner🏆 in Smart India Hackathon 2022.",
			image: "https://media.licdn.com/dms/image/v2/C510BAQGAmTUtxpvm0Q/company-logo_100_100/company-logo_100_100/0/1630581404006?e=1755129600&v=beta&t=dYHDtMVreWNNXBaFdhGC7H8LjXIjhYepd3NpBpSVDrQ",
			links: [
				{
					title: "Source",
					icon: <Icons.github className="h-4 w-4" />,
					href: "https://github.com/ashwin3082002/CodeAlpha_SIH",
				},
			],
		},
	],
};
