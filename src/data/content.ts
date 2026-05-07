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
            "Hello! I'm Suhrit, a Computer Science student at UC Santa Barbara focused on software engineering, cloud infrastructure, Web3 systems, and applied AI research.",
            "I enjoy building reliable systems end to end, from cloud-native identity infrastructure and decentralized storage to ML pipelines for medical imaging and vision-based screening tools."
        ]
    },
    experience: [
        {
            date: "Sep 2025 - Mar 2026",
            title: "Software Engineer Intern",
            company: "Mysten Labs",
            description: ""
        },
        {
            date: "Apr 2025 - Mar 2026",
            title: "Software Engineer Intern",
            company: "UCSB ITS",
            description: ""
        },
        {
            date: "Sep 2024 - Apr 2025",
            title: "Research Software Engineer",
            company: "DYNAMO Lab, UC Santa Barbara",
            description: ""
        },
        {
            date: "Sep 2023 - Jun 2024",
            title: "Research Security Engineer",
            company: "Verification Lab, UC Santa Barbara",
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
            title: "SWE-bench Agent",
            description: "Developed an AI agent using GPT-4o to autonomously generate code patches for software engineering problems. Achieved a 12.7% pass rate on the SWE-bench harness, establishing a baseline for model and prompt refinement.",
            tech: ["Python", "OpenAI API", "GPT-4o-mini", "Docker", "Git"],
            links: {
                code: "https://github.com/SuhritP/SWE-bench"
            }
        },
        {
            title: "EXCITE",
            description: "Awarded Best Health and Wellness Track at SB Hacks for a non-invasive ADHD screening tool using PyTorch, Transformers, and computer vision to analyze eye movements.",
            tech: ["Python", "PyTorch", "Transformers", "Computer Vision", "VR"],
            links: {
                code: "https://github.com/SuhritP/Excite"
            }
        },
        {
            title: "Kindness Kart",
            description: "Awarded Best Beginner Hack for developing native iOS and Android apps plus a web interface to streamline supply-chain logistics, cutting operational time by 50%.",
            tech: ["React", "Node.js", "AWS", "SQL", "MongoDB", "Swift", "Java"],
            links: {
                code: "https://github.com/SuhritP/SBHacks"
            }
        }
    ]
};
