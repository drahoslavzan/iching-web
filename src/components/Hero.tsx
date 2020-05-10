import React from 'react';
import styled from 'styled-components';

type DownloadProps = {
    id: string
}

function Download(props: DownloadProps) {
    function handleDownload() {
        const element = document.querySelector(`#${props.id}`);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <div className="flex justify-center">
            <button onClick={handleDownload} className="bg-green-400 hover:bg-green-500 text-2xl font-bold px-8 py-4 rounded-lg inline-flex items-center">
                <svg className="fill-current w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Get for FREE</span>
            </button>
        </div>
    );
}

interface HeroProps {
    downloadId: string;
}

export default function Hero(props: HeroProps) {
    return (
        <header className="w-full h-screen bg-gray-200">
            <div className="relative w-full h-full flex flex-col justify-center">
                <ImgContainer className="relative mb-8">
                    <img className="m-auto max-w-full max-h-full absolute top-0 left-0 right-0 bottom-0" src="/images/hero.png" />
                </ImgContainer>
                <Download id={props.downloadId} />
            </div>
        </header>
    );
}

const ImgContainer = styled.div`
    height: 60%;
`;