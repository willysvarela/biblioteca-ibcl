import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="container mx-auto max-w-md px-0">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
