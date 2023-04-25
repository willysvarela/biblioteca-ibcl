import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import type { AppProps } from "next/app";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import apolloClient from "./../services/api/apollo";
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="container mx-auto max-w-lg">
            <Layout>
                <ApolloProvider client={apolloClient}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </Layout>
        </div>
    );
}

export default MyApp;
