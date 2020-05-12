import React from 'react';
import styled from 'styled-components';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { captureEmail } from '../scripts/email';

export interface MailPopupProps {
    open: boolean;
    available: boolean;
    version: string;
    onClose: () => void;
}

export default function MailPopup(props: MailPopupProps) {
    const [email, setEmail] = React.useState('');
    const targetRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
        const targetElement = targetRef.current!;
        if (props.open) {
            disableBodyScroll(targetElement);
        } else {
            clearAllBodyScrollLocks();
        }
    }, [props.open]);

    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }

    function handleSumbit(e: React.MouseEvent<HTMLElement>) {
        const values = { "Email": email, "Version": props.version };
        setEmail('');
        captureEmail(values);
        e.preventDefault();
        props.onClose();
    }

    const title = props.available ? 'Your download is ready!' : 'Before you go...';
    const label = props.available ? 'Download' : 'Keep me updated!';

    return !props.open ? null : (
        <Modal ref={targetRef} className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center">
            <div className="absolute w-full h-full bg-gray-900 opacity-50"/>
            <div className="bg-white w-full mx-auto md:max-w-lg rounded-lg shadow-lg z-50">
                <div className="py-4 text-left px-6 bg-blue-400 rounded-t-lg">
                    <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold">{title}</p>
                        <div onClick={props.onClose} className="cursor-pointer z-50">
                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    {props.available
                        ? <div className="mx-8 my-4 text-lg">
                              <p>Before you go, leave us your email so we can keep you updated about I Ching Oracle.</p>
                          </div>
                        : <div className="mx-8 my-4 text-lg">
                              <p><span className="capitalize">{props.version}</span> version is currently not available, leave us your email so we can send you a notification as soon as it is available.</p>
                          </div>
                    }
                    <form className="bg-white shadow-md rounded p-4">
                        <div className="mb-2">
                            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor='download-email'>
                                Email
                            </label>
                            <input id='download-email' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                   type="text"
                                   value={email}
                                   onChange={handleEmailChange} />
                        </div> 
                        <div className="flex justify-center mt-4">
                            <div className="w-2/3">
                                <button disabled={!email} onClick={handleSumbit} className={`block w-full border border-blue-500 rounded-lg py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white ${email ? "" : "font-bold opacity-50 cursor-not-allowed"}`}>
                                    {label}
                                </button>
                            </div> 
                        </div>
                    </form>
                </div> 
            </div>
        </Modal>
	);
}

const Modal = styled('div')`
	overflow: hidden;
	transition: opacity 0.25s ease;
	z-index: 2147483647;
`;