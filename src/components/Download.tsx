import React from 'react';
import { config } from '../config';

type VariantProps = {
    variant: string;
    last?: boolean;
}

function Variant(props: VariantProps) {
    return (
        <div className={`max-w-sm bg-white p-4 rounded overflow-hidden shadow-lg ${props.last ? '' : 'mr-10'}`}>
            <img className="w-1/3 mx-auto p-2" src={`/images/${props.variant}.png`} alt={props.variant} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl text-center mb-1">{config.app}</div>
                <div className="italic text-md text-center mb-4">for <span className="capitalize">{props.variant}</span></div>
                <div className="flex justify-center">
                    <ul className="list-disc">
                        <li>Full version of {config.app}</li>
                        <li>Universal Plum Blossom Oracle</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center m-4">
                <button className="bg-green-400 hover:bg-green-500 text-2xl font-bold px-4 py-2 rounded-lg inline-flex items-center">
                    <svg className="fill-current w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Download</span>
                </button>
            </div>
        </div>
    );
}

export default function Download() {
    return (
        <div className="flex flex-col justify-center p-8 bg-blue-100">
            <h3 className="text-center font-bold text-3xl mb-8">Download</h3>
            <div className="flex justify-center">
                <Variant variant="windows" />
                <Variant variant="mac" last />
            </div>
        </div>
    );
}