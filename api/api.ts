import { Images } from "../models/api"
import { Values } from "../models/States"

const API_URL = "https://myunsplash-server.herokuapp.com/api/images"

export const Api = {
	getImages: async (): Promise<Images | undefined> => {
		try {
			const images = await fetch(API_URL)
			const imagesToJson = await images.json()
			return imagesToJson
		} catch (error) {
			console.log((error as Error).message)
		}
	},
	addImage: async (values: Values): Promise<Images | undefined> => {
		try {
			const images = await fetch(API_URL, {
				method: "POST",
				body: JSON.stringify(values),
				headers: { "Content-Type": "application/json" },
			})
			const imagesToJson = await images.json()
			return imagesToJson
		} catch (error) {
			console.log((error as Error).message)
		}
	},
	deleteImage: async (id: string): Promise<Images | undefined> => {
		try {
			const images = await fetch(`${API_URL}/${id}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			})
			const imagesToJson = await images.json()
			return imagesToJson
		} catch (error) {
			console.log((error as Error).message)
		}
	},
}
