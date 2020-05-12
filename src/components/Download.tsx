import React, { useContext } from 'react';
import { config } from '../config';
import { AnalyticsContext } from '../scripts/Analytics';
import MailPopup from './MailPopup';

type VariantProps = {
    variant: string;
    download?: string;
    last?: boolean;
}

function Variant(props: VariantProps) {
    const ref = React.useRef<HTMLButtonElement>(null);
    const tracker = useContext(AnalyticsContext);
    const [mailOpen, setMailOpen] = React.useState(false);

    function handleMailClose() {
        setMailOpen(false);
        if (!props.download) return;
        ref.current?.click();
    }

    function handleDownload() {
        tracker?.track(`download-${props.variant}`);
        setMailOpen(true);
    }

    return (
        <div className={`max-w-sm bg-white p-4 rounded overflow-hidden shadow-lg ${props.last ? '' : 'mr-10'}`}>
            <img className="w-1/3 mx-auto p-2" src={`/images/${props.variant}.png`} alt={props.variant} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl text-center mb-1">{config.app}</div>
                <div className="italic text-md text-center mb-4">for <span className="capitalize">{props.variant}</span></div>
                <div className="flex justify-center">
                    <ul className="list-disc">
                        <li>Full version of {config.app}</li>
                        <li>Universal Plum Blossom Plugin</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center m-4">
                <button onClick={handleDownload} className="bg-green-400 hover:bg-green-500 text-2xl font-bold px-4 py-2 rounded-lg inline-flex items-center">
                    <svg className="fill-current w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Download</span>
                </button>
                <form method="get" action={`/dl/${props.download}`} hidden>
                    <button ref={ref} type="submit" />
                </form>
            </div>
            <MailPopup version={props.variant} available={!!props.download} onClose={handleMailClose} open={mailOpen} />
        </div>
    );
}

interface DownloadProops {
    id: string;
}

export default function Download(props: DownloadProops) {
    return (
        <div id={props.id} className="flex flex-col justify-center p-8 bg-blue-100">
            <h3 className="text-center font-bold text-4xl mb-8">Download</h3>
            <p className="mb-8 text-center text-lg">
                100% FREE with NO ads, NO malware and NO distractions.
            </p>
            <div className="flex justify-center w-full hidden sm:inline-flex">
                <Variant variant="windows" download="iching-setup.exe" />
                <Variant variant="mac" last />
            </div>
            <div className="flex flex-col items-center w-full block sm:hidden">
                <Variant variant="windows" download="iching-setup.exe" last />
                <div className="mt-8" />
                <Variant variant="mac" last />
            </div>
        </div>
    );
}