import React from 'react';
import Link from 'next/link';
import { config } from '../src/config';

export default function Plugins() {
    return (
        <div className="container mx-auto text-center w-full h-full mt-10">
            <h1 className="text-4xl mb-8">Under Constraction</h1>
            <p>If you have any questions, do not hesitate to contact us on <a className="font-bold" href={`mailto:${config.email}`}>{config.email}</a></p>
            <div className="mt-10">
                Continue to <Link href="/"><a className="font-bold">Home</a></Link>
            </div>
        </div>
    );
}