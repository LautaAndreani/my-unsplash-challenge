import { useContext, useEffect, useState } from "react"
import { Api } from "../api/api"
import { ImagesContext } from "../context/ImgContext"
import { Images } from "../models/api"
import { GalleryProps } from "../models/Props"
import { Card } from "./index"

const Main = ({ data }: GalleryProps) => {
	const [getGallery, setGetGallery] = useState<Images[]>(data)
	const { reFetch, setReFetch } = useContext<any>(ImagesContext)

	const handleDelete = async (id: string) => {
		const response = await Api.deleteImage(id)
		if (response) {
			data.filter(img => img._id !== id)
			setReFetch((prev: boolean) => !prev)
		}

		return response
	}

	useEffect(() => {
		setGetGallery(data)
	}, [data, reFetch])

	return (
		<main>
			<div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3 grid-rows-3 w-3/4 m-auto py-10">
				{getGallery && getGallery.map((img, i) => <Card data={img} key={i} handleDelete={handleDelete} />)}
			</div>
		</main>
	)
}

export default Main
