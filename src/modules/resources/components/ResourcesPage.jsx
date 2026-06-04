import React from 'react';
import AfricanMap from '../../../assets/african-map.png';
import ibironkeImg from '../../../assets/ibironkeImg.png';
import pqeBookImg from '../../../assets/pqeBook.png';
import kstgenie from '../../../assets/kstgenie.png';
import abcTesting from '../../../assets/abcTesting.jpg';
import takingTests from '../../../assets/takingTests.jpg';
import webAutomation from '../../../assets/webAutomation.jpg';
import cycluno from '../../../assets/cyclunoLogo.png';
import ceqs from '../../../assets/ceqs.png';

const RESOURCES_DATA = [
    {
        id: 1,
        title: 'Product Quality Engineering Workbook',
        author: 'BY Ibironke Yekinni',
        type: 'Book',
        image: pqeBookImg,
        link: 'https://pqeworkbooksp.vercel.app/',
        description: 'For the Software testing professional who is done executing tests and ready to engineer quality, equipped with the knowledge, strategy, and processes to influence the delivery of products that customers love and brands respect.'
    },
    {
        id: 2,
        title: 'ABC of Software Testing',
        author: 'BY Ibironke Yekinni',
        type: 'Book',
        image: abcTesting,
        link: 'https://www.amazon.com/ABC-Software-Testing-Starting-Successful/dp/B0F8NS8S4Q/ref=sr_1_1?crid=1CCPQNOCN5A76&dib=eyJ2IjoiMSJ9.Zm-cZG3mmKu7AYMkS5U2GZ0GLjyM5og3TvDQiYtnD5sYhy0PONEEJOTLBipu5V0dGxDU0YxmmuF7RpntYkYdZc1jI0ed0DIyWMrgzP13HSVCdR9cB7pODCjDrDRhTENjU1KQnF9l1ZfjJKh4AKK-L-3wflyFYZy9XPJugAeW4lvf_qLsEW7wMkNoKFS5DW7aGlQdHh2IiJexEJE-ZrVcxtK20CVqMByYpfEH78DPhC0.w8XsELNjmFZI-KeSo_VOvGlSVX5k2xxdNKTgdfKdiZM&dib_tag=se&keywords=abc+of+software+testing&qid=1776973735&sprefix=ABC+of+Sof,aps,320&sr=8-1',
        description: 'This book provides a roadmap to studying the fundamentals of software testing, whether you are a student, a career changer, or someone trying to improve your skills.'
    },
    {
        id: 3,
        title: 'Taking Testing Seriously',
        author: 'BY James Bach, Michael Bolton',
        type: 'Book',
        image: takingTests,
        link: 'https://www.amazon.com/Taking-Testing-Seriously-Software-Approach/dp/1394253192',
        description: 'This book arms software professionals with the knowledge required to master the Rapid Software Testing (RST) methodology. Written by two co-creators of the RST approach and supplemented by material from respected testers who offer valuable insights, it is an essential read for anyone seeking excellence in the craft of testing.'
    },
    {
        id: 4,
        title: 'Web Automation with Playwright and Python using AI and MCP',
        author: 'BY Kailash Pathak',
        type: 'Book',
        image: webAutomation,
        link: 'https://www.amazon.com/dp/9378543170/ref=sr_1_3?crid=BXV4LN1J2BBV&dib=eyJ2IjoiMSJ9.9pr8GEQgSZNWNZiLbxFBqcRyp-GLijn6lL_1F0Zpp6-XTA77YMmIvQh9rujAbEF0WwPFC0VUtVLmB3IBmep2pd2APrgHvHhQFfSIGpiDMSsqgl_fpFs3sA3oHLC7DL_34My1g3FcH4W0fkKB5A-Py9uur8kCIx9G03HUjrPBLfzuZKX0A3pEHrhGpj_X9EqMm6ke3rgzY0Rw6Zy87mH_UaqLqlcyS2TElqZoHZQ3oSo.Y8OPdXg-CsI79qYY99vLvajGhuGOws9OHg1E0a1upKY&dib_tag=se&keywords=playwright+python&qid=1780153817&sprefix=%2Caps%2C297&sr=8-3',
        description: 'The book introduces Playwright and Python fundamentals, guiding readers through initial test scripts using Pytest and AI assistance. It details web element interactions, assertions, and advanced handling techniques for complex scenarios. Readers will master reporting, annotations, and debugging using Playwright tools and AI support.'
    },
    {
        id: 5,
        title: 'Klassi Test Genie',
        author: '',
        type: 'Product',
        image: kstgenie,
        link: 'https://ktestgenie.com/',
        description: 'Upload BRDs, user stories, PDFs, Word documents, Confluence exports, or Jira tickets. Klassi Test Genie automatically extracts business requirements, generates clear acceptance criteria, and creates high-quality test cases and Gherkin scenarios ready for your QA workflow.'
    },
    {
        id: 6,
        title: 'Cycluno',
        author: '',
        type: 'Product',
        image: cycluno,
        link: 'https://cycluno.com/',
        description: 'Automatically generate test cases, execute text, and provide actionable insight to cut testing time by 90% while improving test coverage using an AI-driven system that helps to drive design, execute and report testing, and provide actionable insight.'
    },
    {
        id: 7,
        title: 'Customer Experience Quality Score (CEQS) System',
        author: '',
        type: 'Product',
        image: ceqs,
        link: 'https://www.drainsignal.com/',
        description: 'Real-time quality scoring for payment flows. Detect issues before they impact revenue, trace customer journeys, and drive quality improvements across every channel.'
    },
];

const ResourceCard = ({ title, author, type, image, link, description }) => (
    <div className="relative rounded-xl overflow-hidden group border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col h-full">
        <div className="h-48 overflow-hidden relative">
            <img
                src={image}
                alt={title}
                className={`w-full h-full ${image === ceqs ? 'object-center' : 'object-contain'} transition-transform duration-500 group-hover:scale-105`}
            />
            <div className="absolute top-2 left-2 bg-[#00DEEE] text-[#0F2745] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                {type}
            </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-black uppercase text-[#0F2745] mb-1 line-clamp-2">{title}</h3>
            <p className="text-xs font-bold tracking-widest text-[#124da0] uppercase mb-3">{author}</p>
            <p className="text-sm text-gray-600 mb-5 flex-grow leading-relaxed">{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-[#0F2745] text-white text-sm font-bold uppercase tracking-widest py-3 rounded hover:bg-[#124da0] transition-colors"
                onClick={e => e.preventDefault()}
            >
                {type === 'Book' ? 'Buy Now' : 'Visit Website'}
            </a>
        </div>
    </div>
);

const ResourcesPage = () => {
    return (
        <main className="pt-16">
            {/* Hero Banner */}
            <section className="w-full pt-20 pb-16 relative overflow-hidden bg-[#124da0]">
                {/* African Map Background */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[600px] h-full opacity-[0.8] pointer-events-none"
                    style={{
                        backgroundImage: `url(${AfricanMap})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center top',
                        backgroundRepeat: 'no-repeat',
                    }}
                />

                {/* Decorative dots grid */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />
                
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
                    <p className="text-[#00DEEE] border border-[#00DEEE] w-fit flex mx-auto rounded-full p-2 text-sm font-bold uppercase mb-4">
                        Speaker Resources
                    </p>
                    <div className='flex flex-col w-fit mx-auto'>
                        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-2">
                            Books, Courses & Tools<br />
                            <span>From Our Experts</span>
                        </h1>
                        <section className='flex w-full h-1 mb-3'>
                            <div className='w-[34%] h-1 bg-[#E6B73B] text-[#E6B73B] rounded-full'>.</div>
                            <div className='w-[34%] h-1 bg-[rgba(255,0,0,0)]'></div>
                            <div className='w-[34%] h-1 bg-[#E6B73B] rounded-full'></div>
                        </section>
                    </div>
                    <p className="text-white/70 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                        Explore exclusive materials created by the minds powering Africa's Quality Revolution. 
                        Level up your skills with these highly recommended resources.
                    </p>
                </div>
            </section>

            {/* Resources Grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 bg-gray-50/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {RESOURCES_DATA.map(resource => (
                        <ResourceCard key={resource.id} {...resource} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ResourcesPage;
