import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="container mx-auto max-w-lg">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}

export default MyApp;
