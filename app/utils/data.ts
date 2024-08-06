import { IconRow, Project } from "./types";

export const ProjectsData: Project[] = [
    {
        element_id: "Postwoman", header: "postwoman:~",
        paragraph: "Postwoman is a self-hosted dev tool that achieves what postman does but with my personal preferences in its functionality and design. It is my favorite project so far because it solves a lot of pet peeves of mine and drastically improves my experience testing APIs over the experience postman gave me.",
        icons: [
            "go.webp",
            "echo.webp",
            "htmx.webp",
            "js.webp"
        ],
        github: "https://github.com/dawitalemu4/postwoman",
        siteURL: "https://postwoman.dev",
        image: "postwoman.gif"
    },
    {
        element_id: "ZERL", header: "Elias Realtor",
        paragraph: "",
        footnote: "* Frontend no longer maintained by me, I wrote/finished the backend",
        icons: [
            "java.webp",
            "spring.webp",
            "react.webp",
            "remix.webp",
            "ts.webp"
        ],
        github: "https://github.com/dawitalemu4/zerl-server",
        siteURL: "https://eliasrealtor.vercel.app",
        image: "ZERL.gif"
    },
    {
        element_id: "GDA", header: "Genet Designs",
        paragraph: "This e-commerce site that sells and displays traditional ethiopian clothing a tailor named Genet Bekele.",
        footnote: "* Frontend no longer maintained by me, I wrote/finished the backend",
        icons: [
            "python.webp",
            "django.webp",
            "gql.webp",
            "react.webp",
            "ts.webp"
        ],
        github: "https://github.com/dawitalemu4/gda-server",
        siteURL: "https://genetdesigns.com",
        image: "GDA.gif"
    },
    {
        element_id: "DebreTsion", header: "Debre Tsion Church",
        paragraph: "This website was created by 6 devs led by Dawit Alemu to give back to our childhood church. I taught junior devs, managed meetings with church leadership, and received good feedback from teammates and was approved to push to production.",
        icons: [
            "angular.webp",
            "firebase.webp",
            "gcp.webp",
            "ts.webp"
        ],
        github: "https://github.com/DebreTsionWeb/debretsion.org",
        siteURL: "https://debretsion.org/en",
        image: "DT.webp"
    },
    {
        element_id: "Misplaced", header: "Misplaced",
        paragraph: "Misplaced is a digitalized lost and found platform for TU students to retrieve lost items by posting information through an intuitive React Native UI and connecting with potential finders. Wrote 100k+ lines of code and was recognized by VP and CIO of Towson University.",
        icons: [
            "react.webp",
            "expo.webp",
            "express.webp",
            "mongo.webp",
            "js.webp"
        ],
        github: "https://github.com/misplaced-dev/misplaced.app",
        siteURL: "https://misplaced.app",
        image: "misplaced.webp"
    },
    {
        element_id: "TapIn", header: "Let's Tap In, LLC",
        paragraph: "This static website displays dummy events and allows you to checkout tickets. Led initiative on website performance improvements, collaborated with other senior developers, and received approval to push to production.",
        icons: [
            "react.webp",
            "next.webp",
            "ts.webp"
        ],
        github: "https://github.com/dawitalemu4/TapInWebPage",
        siteURL: "https://letsalltapin.vercel.app",
        image: "tapIn.webp"
    },
    {
        element_id: "UA", header: "Urban Alliance",
        paragraph: "This static website was a revamping of a partner companies template-service website. Held meetings with the CEO and Co-Founder to align development with business needs. Sparked the start of the partner companies codebase using GitHub organizations, project-based repos, and protection rules.",
        icons: [
            "react.webp",
            "gatsby.webp",
            "js.webp"
        ],
        github: "https://github.com/EduCoGroup/educogroup.org",
        siteURL: "https://educopaths.com",
        image: "UA.webp"
    },
    {
        element_id: "Sonic", header: "2D Sonic Platformer",
        paragraph: "A sentimental first project where I decided to take action on my childhood dream to become a 'game maker', and introduced me to the world of software development. Learned physics and animation in game development, and more importantly, how to self teach software development, which brought me where I am now.",
        icons: [
            "c.webp",
            "unity.webp",
        ],
        github: "https://github.com/dawitalemu4/sonic",
        siteURL: "https://github.com/dawitalemu4/sonic",
        image: "sonic.webp"
    }
];



export const ExperienceData: IconRow[] = [
    {
        id: 1,
        header: "Front End Development",
        images: [
            ["ts.webp", "TypeScript"],
            ["js.webp", "JavaScript"],
            ["react.webp", "React"],
            ["angular.webp", "Angular"],
            ["next.webp", "Next.js"],
            ["remix.webp", "Remix.js"],
            ["solid.webp", "Solid.js"],
            ["htmx.webp", "HTMX"]
        ]
    },
    {
        id: 2,
        header: "Back End Development",
        images: [
            ["rust.webp", "Rust"],
            ["go.webp", "Go"],
            ["java.webp", "Java"],
            ["python.webp", "Python"],
            ["tokio.webp", "Tokio/Axum"],
            ["spring.webp", "Spring"],
            ["django.webp", "Django"],
            ["gql.webp", "GraphQL"]
        ]
    },
    {
        id: 3,
        header: "Databases",
        images: [
            ["psql.webp", "PostgreSQL"],
            ["msql.webp", "MySQL"],
            ["aurora.webp", "Aurora"],
            ["awsrds.webp", "AWS RDS"],
            ["dynamo.webp", "DynamoDB"],
            ["mongo.webp", "MongoDB"],
            ["firebase.webp", "Firebase"],
            ["supabase.webp", "Supabase"]
        ]
    },
    {
        id: 4,
        header: "Miscellaneous",
        images: [
            ["aws.webp", "AWS"],
            ["gcp.webp", "GCP"],
            ["docker.webp", "Docker"],
            ["neovim.webp", "Neovim"],
            ["nu.webp", "Nushell"],
            ["bash.webp", "Bash"],
            ["git.webp", "Git"],
            ["github.webp", "GitHub"]
        ]
    }
];
