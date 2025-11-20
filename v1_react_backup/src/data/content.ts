export const content = {
    profile: {
        name: "Suhrit Padakanti",
        title: "Computer Science Student & Software Engineer",
        socials: {
            linkedin: "https://linkedin.com/in/suhrit-padakanti",
            github: "https://github.com/SuhritP",
            email: "suhrit@ucsb.edu"
        }
    },
    about: {
        title: "About Me",
        description: [
            "Hello! I'm Suhrit, a passionate Computer Science student at UC Santa Barbara with a strong foundation in software engineering, cloud infrastructure, and AI research. My journey spans from building scalable web applications to developing cutting-edge solutions in vulnerability detection and fMRI image reconstruction.",
            "I thrive in challenging environments where I can apply my technical expertise to solve complex problems. Whether it's architecting cloud solutions, developing machine learning models, or building full-stack applications, I'm driven by the opportunity to create impactful technology that makes a difference."
        ]
    },
    experience: [
        {
            date: "Apr 2025 - Present",
            title: "Cloud Solutions Architect Intern",
            company: "UCSB ITS",
            description: ""
        },
        {
            date: "Sep 2024 - Apr 2025",
            title: "AI Research Assistant",
            company: "DYNAMO Lab, UC Santa Barbara",
            description: ""
        },
        {
            date: "Sep 2023 - Jun 2024",
            title: "Security and Program Analysis Researcher",
            company: "Computer Verification Lab, UC Santa Barbara",
            description: ""
        },
        {
            date: "Jun 2023 - Sep 2023",
            title: "Software Engineer Intern",
            company: "Makonis",
            description: ""
        }
    ],
    skills: {
        languages: [
            { name: "Python", icon: "/assets/python-icon.svg" },
            { name: "JavaScript", icon: "/assets/javascript-icon.svg" },
            { name: "TypeScript", icon: "/assets/typescript-icon.svg" },
            { name: "Java", icon: "/assets/java-icon.svg" },
            { name: "Swift", icon: "/assets/swift-icon.svg" },
            { name: "C/C++", icon: "/assets/cpp-icon.svg" },
            { name: "SQL", icon: "/assets/sql-icon.svg" },
            { name: "HTML/CSS", icon: "/assets/html-icon.svg" }
        ],
        technologies: [
            { name: "React", icon: "/assets/react-icon.svg" },
            { name: "Next.js", icon: "/assets/next-icon.svg" },
            { name: "Node.js", icon: "/assets/nodejs-icon.svg" },
            { name: "Tailwind CSS", icon: "/assets/tailwind-icon.svg" },
            { name: "AWS", icon: "/assets/aws-icon.svg" },
            { name: "Docker", icon: "/assets/docker-icon.svg" },
            { name: "Kubernetes", icon: "/assets/kubernetes-icon.svg" },
            { name: "GraphQL", icon: "/assets/graphql-icon.svg" },
            { name: "Firebase", icon: "/assets/firebase-icon.svg" },
            { name: "Redis", icon: "/assets/redis-icon.svg" },
            { name: "TensorFlow", icon: "/assets/tensorflow-icon.svg" },
            { name: "PyTorch", icon: "/assets/pytorch-icon.svg" },
            { name: "MongoDB", icon: "/assets/mongodb-icon.svg" },
            { name: "MySQL", icon: "/assets/mysql-icon.svg" },
            { name: "Git", icon: "/assets/git-icon.svg" }
        ]
    },
    projects: [
        {
            title: "Kindness Kart",
            description: "Engineered a platform for 7 hotels and 2 NGOs. Developed native iOS/Android apps and a website with a backend on MongoDB, cutting logistics time by over 50%.",
            tech: ["React", "Node.js", "AWS", "SQL", "MongoDB", "Swift", "Java", "Git"],
            links: {
                code: "https://github.com/SuhritP/SBHacks"
            }
        },
        {
            title: "SWE-bench Agent",
            description: "Developed an AI agent using GPT-4o to autonomously generate code patches for software engineering problems. Achieved a 12.7% pass rate on the SWE-bench harness, establishing a baseline for model and prompt refinement.",
            tech: ["Python", "OpenAI API", "GPT-4o-mini", "Docker", "Git"],
            links: {
                code: "https://github.com/SuhritP/SWE-bench"
            }
        },
        {
            title: "GCAL",
            description: "AI-powered web app that extracts event information from images and automatically adds them to Google Calendar. Uses OpenAI GPT-4o Vision API to intelligently read schedules from uploaded images, then creates calendar events via Google Calendar API. Deployed on Vercel with secure serverless backend and privacy-focused design.",
            tech: ["React", "Next.js", "OpenAI API", "Google Calendar API", "Vercel", "TypeScript"],
            links: {
                code: "https://github.com/SuhritP/CalApp"
            }
        }
    ]
};
