import React from 'react';
import Hero from '../src/components/Hero';
import Footer from '../src/components/Footer';
import Download from '../src/components/Download';
import Features from '../src/components/Features';

export default function Index() {
    return (
        <div className="absolute w-full h-full">
            <Hero downloadId="download" />
            <Features />
            <Download id="download" />
            <Footer />
        </div>
    );
}
