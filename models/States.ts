import { SetStateAction } from "react"

export interface Values {
	photo_url: string
	label: string
}

export interface ImageContext {
	reFetch: boolean
	setReFetch: React.Dispatch<SetStateAction<boolean>>
}
