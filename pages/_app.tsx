import type { AppProps } from "next/app"
import Wrapper from "../components/Wrapper"
import { ImageProvider } from "../context/ImgContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ImageProvider>
			<Wrapper>
				<Component {...pageProps} />
			</Wrapper>
		</ImageProvider>
	)
}

export default MyApp
