import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { analytics, AnalyticsContext } from "../src/scripts/Analytics";
import { config } from "../src/config";
import "../src/css/tailwind.css";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <AnalyticsContext.Provider value={analytics}>
            <Head>
                <title>{config.app}</title>
                <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <Component {...pageProps} />
        </AnalyticsContext.Provider>
    );
}
