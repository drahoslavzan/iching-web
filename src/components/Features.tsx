import React from 'react';

export default function Features() {
    return (
      <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Features
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-2xl text-gray-800 font-bold mb-3">
                Standalone Multiplatform Application
            </h4>
            <p className="text-gray-600 mb-8">
                You do <span className="font-bold">not need internet access</span> in order to do IChing reading.
                Just run the application and focus on a reading instead of fighting
                with a slow response because of connection problems.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <img src="/images/masters.png" alt="Standalone Application" />
          </div>
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2 p-8">
            <img src="/images/trigrams.png" alt="Custom Texts" />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-2xl text-gray-800 font-bold mb-3">
                Support for Custom Texts
            </h4>
            <p className="text-gray-600 mb-8">
                Application is bundled with a <span className="font-bold">Book of Changes</span> text
                but it is not limited to. You can provide your own texts as well, even in multiple
                languages.
            </p>
          </div>
        </div>

        <div className="flex items-center flex-wrap">
          <div className="w-full md:w-1/2">
            <h4 className="text-2xl text-gray-800 font-bold mb-3">
                Support for Multiple IChing Methods using Plugins
            </h4>
            <p className="text-gray-600 mb-8">
                Application contains implementation for various <span className="font-bold">Plum Blossom IChing</span> methods,
                but it can be extended to do calculation of different IChing methods
                as well. <span className="font-bold">Universal Method</span> is included for FREE.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <img src="/images/longterm-result.png" alt="Plugins" />
          </div>
        </div>
      </section>
    );
}