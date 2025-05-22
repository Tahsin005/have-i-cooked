import aroundtheflag from '../images/aroundtheflag.png';
import nike from '../images/nike.png';
import socially from '../images/socially.png';
import recipefinder from '../images/recipefinder.png';
import bazzarBuddy from '../images/bazzarBuddy.png';
import unlinked from '../images/unlinked.png';

export const projects = [
    {
        title: "Nike Landing Page",
        description:
            "A sleek, responsive e-commerce landing page inspired by Nike's branding. Built with React.js and Tailwind CSS, it showcases advanced layout techniques, reusable components, and modern UI design tailored for all screen sizes.",
        image: nike,
        tags: ["react", "tailwind"],
        sourceCode: "https://github.com/Tahsin005/Nike-Landing-Page",
        demo: "https://nike-mocha-delta.vercel.app/",
    },
    {
        title: "Recipe Finder",
        description:
            "A recipe discovery platform that leverages the Meal DB API to let users search and explore recipes by name or ingredient. It features a clean UI and intuitive search for a seamless cooking inspiration experience.",
        image: recipefinder,
        tags: ["html", "css", "javascript"],
        sourceCode: "https://github.com/Tahsin005/Recipe-App",
        demo: "https://recipe-app-gamma-virid.vercel.app/",
    },
    {
        title: "Around The Flag",
        description:
            "An informative React.js web app that fetches and displays global country data using the REST Countries API. Users can browse, search, and filter countries to view details like population, region, and native names, all within a responsive layout.",
        image: aroundtheflag,
        tags: ["react", "tailwind", "context-api"],
        sourceCode: "https://github.com/Tahsin005/Country-Rest-API---React",
        demo: "https://country-rest-api-react.vercel.app/",
    },
    {
        title: "Bazzar Buddy",
        description:
            "A full-stack marketplace application where users can securely list, buy, sell, and manage products. It includes features like user registration, email verification, product editing/deletion, and sales tracking. Built with React and Django REST Framework, backed by PostgreSQL.",
        image: bazzarBuddy,
        tags: ["react", "tailwind", "drf", "postgresql"],
        sourceCode: "https://github.com/Tahsin005/BazzarBuddy",
        demo: "https://bazzar-buddy.vercel.app/",
    },
    {
        title: "Unlinked",
        description:
            "A full-stack social networking app with user authentication, profile customization, and connection-building. Includes an interactive news feed where users can share posts and engage with others. Built using React, Express.js, and MongoDB.",
        image: unlinked,
        tags: ["react", "express", "mongoose"],
        sourceCode: "https://github.com/Tahsin005/UnLinked",
        demo: "https://unlinked-siot.onrender.com/",
    },
    {
        title: "Socially",
        description:
            "A modern social media platform developed with Next.js and Tailwind CSS, featuring secure authentication, user feeds, post interactions, and PostgreSQL-backed data storage. Focused on performance, responsiveness, and a smooth user experience.",
        image: socially,
        tags: ["next", "tailwind", "postgresql"],
        sourceCode: "https://github.com/Tahsin005/Socially",
        demo: "https://socially-orcin.vercel.app/",
    },
];
