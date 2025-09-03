import React from 'react';
import hero_bg from '../../assets/Hero-bg.jpeg'

const Hero = () => {
    return (
        <div>
            <div className="bg-[url(hero_bg)] min-h-screen">
                <div className="flex-col lg:flex-row-reverse">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold w-96">Creating a better
                            IT solutions</h1>
                        <p className="py-6 w-96">
                            Affixed pretend account ten natural. Need eat week even yet that. Incommode delighted he resolving sportsmen.
                        </p>
                        <button className="btn btn-primary">Get Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;