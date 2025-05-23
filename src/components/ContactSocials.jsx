import React from 'react';
import FuzzyText from './FuzzyText/FuzzyText.jsx';

const ContactSocials = () => {
    const whatsappNumber = "8801795368447";
    const hoverIntensity = 0.5;
    const enableHover = 0.18;

    const socials = [
        { social: "email", un: "tahsin.ferdous3546@gmail.com", href: "mailto:tahsin.ferdous3546@gmail.com" },
        { social: "whatsapp", un: "+8801795368447", href: `https://wa.me/${whatsappNumber}` },
        { social: "github", un: "tahsin005", href: "https://www.github.com/tahsin005/" },
        { social: "linkedin", un: "md-tahsin-ferdous", href: "https://www.linkedin.com/in/md-tahsin-ferdous/" },
        { social: "instagram", un: "tahsin_exe", href: "https://www.instagram.com/tahsin_exe/" },
        { social: "medium", un: "tahsin.ferdous3546", href: "https://medium.com/@tahsin.ferdous3546" },
        { social: "dev.to", un: "tahsin005", href: "https://dev.to/api/articles?username=tahsin005" },
    ];

    return (
        <div className="bg-[#112044] p-6 rounded-lg shadow-lg text-white overflow-hidden">
            <p className="text-2xl text-green-700 mb-4"># Reach Out Via Socials</p>
            <div className="text-md">
                <p className="text-[#9CDCFE]">.socials &#123;</p>
                {socials.map((social) => (
                    <div key={social.social} className="ml-8">
                        <span className="text-[#4FC1FF]">{social.social}</span>
                        <span className="text-white">: </span>
                        <a
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#CE9178] hover:underline"
                        >
                            {social.un}
                        </a>
                        <span className="text-white">;</span>
                    </div>
                ))}
                <p className="text-[#9CDCFE]">&#125;</p>
            </div>
        </div>
    );
};

export default ContactSocials;
