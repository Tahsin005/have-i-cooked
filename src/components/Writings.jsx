import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import GitHubCalendar from 'react-github-calendar';
import axios from 'axios';
import thumbnail from '../images/thumbnail.jpg';

const Writings = () => {
    const [articles, setArticles] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://dev.to/api/articles?username=tahsin005')
            .then((res) => res.json())
            .then((data) => setArticles(data))
            .catch((err) => console.error('Error fetching articles:', err));

        const fetchGithub = async () => {
            try {
                const res = await axios.get('https://api.github.com/users/tahsin005');
                setUser(res.data);
            } catch (err) {
                console.error('GitHub fetch error:', err);
            }
        };

        fetchGithub();
    }, []);

    const theme = {
        dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    };

    return (
        <section id="writings" className="relative z-0 pt-6">
            <h2 className="text-2xl block font-semibold mb-4 ps-4">Writings</h2>
            <div className="space-y-20 mb-16">
                {articles.map((article) => (
                    <div
                        key={article.id}
                        className="relative group rounded-md p-4 border border-none transition-all duration-300
                hover:border-white/20 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-md overflow-visible z-10"
                    >
                        {article.cover_image && (
                            <img
                                src={article.cover_image}
                                alt={article.title}
                                className="w-[280px] h-auto absolute top-[-120px] left-1/2 transform -translate-x-1/2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 roup-hover:translate-y-[-120px]                     transition-all duration-500 ease-in-out pointer-events-none z-50 rounded-lg shadow-lg animate-sway"
                            />
                        )}
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <h3 className="text-md font-semibold mb-2">{article.title}</h3>
                                <p className="text-gray-400 mb-2">{article.description}</p>
                                <p className="text-sm text-gray-500">{article.readable_publish_date}</p>
                            </div>
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-400 mt-1"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            {user && (
                <section className="px-4 pb-16">
                    <h2 className="text-2xl font-semibold mb-6">GitHub</h2>

                    <div className="text-white flex items-center gap-6 mb-4">

                        <div>
                            <a href="https://github.com/tahsin005"><h3 className="text-lg text-[#ab66ff] font-medium flex">{user.login} <ExternalLink className='ps-3' /></h3></a>
                            <p className="text-sm text-gray-400">
                                {user.public_repos} repos • {user.followers} followers
                            </p>
                        </div>
                    </div>

                    <div className="text-white custom-scrollbar">
                        <GitHubCalendar
                            username="tahsin005"
                            theme={theme}
                            hideColorLegend
                            hideMonthLabels
                        />
                    </div>

                    <div className="relative group pt-10">
                        {thumbnail && (
                            <img
                                src={thumbnail}
                                alt="thumbnail"
                                className="w-[280px] h-auto absolute top-[-100px] left-1/2 transform -translate-x-1/2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-[-120px] transition-all duration-500 ease-in-out pointer-events-none z-50 rounded-lg shadow-lg animate-sway"
                            />
                        )}
                        <h2 className="mb-6 text-xl text-[#ab66ff] font-semibold text-textColor">
                            <a className='flex' target='_blank' href={'https://www.youtube.com/embed/Vt_WnXsNwOw?si=d--DtGRoEhyoAWlQ'}>Featured Youtube Video <ExternalLink className='ps-3 pb-1' size={32} /></a>
                        </h2>
                    </div>

                </section>
            )}
        </section>

    );
};

export default Writings;
