import Head from "next/head"

type Child = { children: JSX.Element }

const Wrapper = ({ children }: Child) => {
	return (
		<>
			<Head>
				<title>MyUnsplash</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" type="image" href="/assets/vercel.png"></link>
			</Head>
			{children}
		</>
	)
}

export default Wrapper
