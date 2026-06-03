import React from 'react';
import AfricanMap from '../../../assets/african-map.png';
import ibironkeImg from '../../../assets/ibironkeImg.png';

const RESOURCES_DATA = [
    {
        id: 1,
        title: 'The AI Product Journal',
        author: 'Ibironke Yekinni',
        type: 'Book',
        image: ibironkeImg,
        link: '#',
        description: 'A leading publication on AI product strategy and innovation read by practitioners building the next generation of intelligent products.'
    },
    // {
    //     id: 2,
    //     title: 'Advanced Playwright Automation',
    //     author: 'Shashank Parmar',
    //     type: 'Course',
    //     image: ibironkeImg,
    //     link: '#',
    //     description: 'Learn advanced Playwright automation strategies in dynamic applications and integrate test automation with CI/CD.'
    // }
];

const ResourceCard = ({ title, author, type, image, link, description }) => (
    <div className="relative rounded-xl overflow-hidden group border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col h-full">
        <div className="h-48 overflow-hidden relative">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-2 left-2 bg-[#00DEEE] text-[#0F2745] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                {type}
            </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-black uppercase text-[#0F2745] mb-1 line-clamp-2">{title}</h3>
            <p className="text-xs font-bold tracking-widest text-[#124da0] uppercase mb-3">By {author}</p>
            <p className="text-sm text-gray-600 mb-5 flex-grow leading-relaxed">{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-[#0F2745] text-white text-sm font-bold uppercase tracking-widest py-3 rounded hover:bg-[#124da0] transition-colors"
                onClick={e => e.preventDefault()}
            >
                Buy Now
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {RESOURCES_DATA.map(resource => (
                        <ResourceCard key={resource.id} {...resource} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ResourcesPage;
