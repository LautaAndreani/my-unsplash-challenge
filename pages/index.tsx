import { NextPage } from "next"
import { Api } from "../api/api"
import { Header, Gallery } from "../components"
import { IndexProps } from "../models/Props"

const Home: NextPage<IndexProps> = ({ images }) => {
	return (
		<>
			<Header data={images} />
			<Gallery data={images} />
		</>
	)
}

export async function getServerSideProps() {
	const images = await Api.getImages()
	return { props: { images } }
}

export default Home
