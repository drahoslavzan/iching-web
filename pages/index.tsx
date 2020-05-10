import React from 'react';
import styled from 'styled-components';

function Download() {
    return (
        <div className="flex justify-center">
            <button className="bg-green-400 hover:bg-green-500 text-2xl font-bold px-8 py-4 rounded-lg inline-flex items-center">
                <svg className="fill-current w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Try for FREE</span>
            </button>
        </div>
    );
}

function Features() {
    return (
      <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Features
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Exercise Metric
            </h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch is able to capture you
              vitals while you exercise. You can create different category of
              exercises and can track your vitals on the go.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="assets/health.svg" alt="Monitoring" />
          </div>
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img src="assets/report.svg" alt="Reporting" />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch can generate a
              comprehensive report on your vitals depending on your settings
              either daily, weekly, monthly, quarterly or yearly.
            </p>
          </div>
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch allows you to sync data
              across all your mobile devices whether iOS, Android or Windows OS
              and also to your laptop whether MacOS, GNU/LInux or Windows OS.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="assets/sync.svg" alt="Syncing" />
          </div>
        </div>
      </section>
    );
}

function Hero() {
    return (
        <div className="w-screen h-screen bg-gray-200">
            <div className="relative w-full h-full flex flex-col justify-center">
                <ImgContainer className="relative mb-8">
                    <img className="m-auto max-w-full max-h-full absolute top-0 left-0 right-0 bottom-0" src="/images/hero.png" />
                </ImgContainer>
                <Download />
            </div>
        </div>
    );
}

export default function Index() {
    return (
        <div className="absolute top-0 left-0 w-full h-full">
            <Hero />
            <Features />
        </div>
    );
}

const ImgContainer = styled.div`
    height: 60%;
`;