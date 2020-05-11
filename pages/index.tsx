import React from 'react';
import Hero from '../src/components/Hero';
import Footer from '../src/components/Footer';
import Download from '../src/components/Download';
import Features from '../src/components/Features';

function Book() {
    return (
        <section className="container mx-auto px-6 pt-10 pb-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                I Ching Calculation Mehtods
            </h2>
            <div className="flex items-center flex-wrap">
                <div className="w-full md:w-1/2 p-8">
                    <img className="mx-auto" src="/images/book.jpg" alt="Die Pflaumenblüten Numerologie" />
                </div>
                <div className="w-full md:w-1/2">
                    <p className="text-lg text-gray-600">
                        Based on a book from Rene van Osten <span className="font-bold">Die Pflaumenblüten Numerologie</span>.
                    </p>
                    <h4 className="text-xl text-gray-800 font-bold mb-4 mt-8">
                        Supported Plum Blossom I Ching Methods
                    </h4>
                    <ul className="list-disc pl-8">
                        <li>Universal predictions</li>
                        <li>Longterm predictions</li>
                        <li>Mysterious situations analysis</li>
                        <li>Master's method</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default function Index() {
    return (
        <div className="absolute w-full h-full">
            <Hero downloadId="download" />
            <Features />
            <Book />
            <Download id="download" />
            <Footer />
        </div>
    );
}
