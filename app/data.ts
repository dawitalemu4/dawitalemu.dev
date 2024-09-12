import { IconRow, Project } from "../types/home";

export const ProjectsData: Project[] = [
    {
        element_id: "postwoman", header: "postwoman:~",
        paragraph: "A self-hosted dev tool that achieves what postman does but with my personal preferences in its functionality and design. It is my favorite project so far because it solves a lot of pet peeves of mine and drastically improves my experience testing APIs over the experience postman gave me.",
        icons: [
            "go.webp",
            "echo.webp",
            "htmx.webp",
            "js.webp"
        ],
        github: "https://github.com/dawitalemu4/postwoman",
        siteURL: "https://postwoman.dev",
        thumbnail: "postwoman.webp",
        video: "https://github.com/dawitalemu4/postwoman/assets/106638403/b09125dd-565e-479f-be58-194261c2667f"
    },
    {
        element_id: "zerl", header: "Elias Realtor",
        paragraph: "A real estate brochure website with an admin portal managing website's contents.",
        footnote: "* I wrote and finished the backend, frontend isn't maintained by me.",
        icons: [
            "java.webp",
            "spring.webp",
            "react.webp",
            "remix.webp",
            "ts.webp"
        ],
        github: "https://github.com/dawitalemu4/zerl-server",
        siteURL: "https://github.com/dawitalemu4/zerl-server"
    },
    {
        element_id: "gda", header: "Genet Designs",
        paragraph: "An e-commerce site that displays custom traditional ethiopian clothing that is for sale or sold from a tailor named Genet Bekele. Has wishlist and category filtering features.",
        footnote: "* I wrote and finished the backend, frontend isn't maintained by me.",
        icons: [
            "python.webp",
            "django.webp",
            "gql.webp",
            "react.webp",
            "ts.webp"
        ],
        github: "https://github.com/dawitalemu4/gda-server",
        siteURL: "https://genetdesigns.com"
    },
    {
        element_id: "dt", header: "Debre Tsion Church",
        paragraph: "A website was created by 6 devs led by Dawit Alemu to give back to our childhood church. Has youtube live stream, calendar booking, and gallery features with an admin portal to manage website's contents. I also created a baptism certificate automation tool.",
        icons: [
            "angular.webp",
            "firebase.webp",
            "gcp.webp",
            "ts.webp"
        ],
        github: "https://github.com/DebreTsionWeb/debretsion.org",
        siteURL: "https://debretsion.org/en",
        thumbnail: "dt.webp",
        video: "https://github.com/DebreTsionWeb/debretsion.org/assets/106638403/6e509df3-9d3d-49eb-bfe5-0d18af8c27c6"
    },
    {
        element_id: "misplaced", header: "Misplaced",
        paragraph: "A digitalized lost and found platform for users to retrieve lost items by posting information about their lost items and connecting with potential finders with rewards and incentives for finders. Recognized by VP and CIO of Towson University.",
        icons: [
            "react.webp",
            "expo.webp",
            "express.webp",
            "mongo.webp",
            "js.webp"
        ],
        github: "https://github.com/misplaced-dev/misplaced.app",
        siteURL: "https://misplaced.app",
        thumbnail: "misplaced.webp",
        video: "https://user-images.githubusercontent.com/106638403/230789654-ae6849f5-0816-42da-ac26-ce1d9dd37412.mp4"
    },
    {
        element_id: "tapin", header: "Let's Tap In, LLC",
        paragraph: "A website that displays events and allows you to checkout tickets. Picks the two primary colors of a event's image and creates a smooth gradient background on the event details page.",
        icons: [
            "react.webp",
            "next.webp",
            "ts.webp"
        ],
        github: "https://github.com/dawitalemu4/TapInWebPage",
        siteURL: "https://letsalltapin.vercel.app",
        thumbnail: "tapin.webp",
        video: "https://github.com/dawitalemu4/TapInWebPage/assets/106638403/a7f8bbae-2aec-4d3d-a102-50c59a9ca071"
    },
    {
        element_id: "ua", header: "Urban Alliance",
        paragraph: "A website I created to revamp a partner company's template-service website to solve responsiveness issues and unnesecary expenses.",
        icons: [
            "react.webp",
            "gatsby.webp",
            "js.webp"
        ],
        github: "https://github.com/EduCoGroup/educogroup.org",
        siteURL: "https://educopaths.com",
        thumbnail: "ua.webp",
        video: "https://github.com/user-attachments/assets/ad4ec9ce-1610-45e5-a859-355c91c64a33"
    },
    {
        element_id: "sonic", header: "2D Sonic Platformer",
        paragraph: "A sentimental first project where I decided to take action on my childhood dream to become a 'game maker', and introduced me to the world of software development. Learned physics and animation in game development, and more importantly, how to self teach software development, which brought me where I am now.",
        icons: [
            "unity.webp",
            "c.webp"
        ],
        github: "https://github.com/dawitalemu4/sonic",
        siteURL: "https://github.com/dawitalemu4/sonic",
        thumbnail: "sonic.webp",
        video: "https://user-images.githubusercontent.com/106638403/235050515-7ffa43e3-2413-4777-80d0-e1a193054b8d.mp4"
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
