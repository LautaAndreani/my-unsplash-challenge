import { createContext, useState } from "react"

interface Props {
	children: JSX.Element
}

export const ImagesContext = createContext({})

export const ImageProvider = ({ children }: Props) => {
	const [reFetch, setReFetch] = useState<boolean>(false)

	return <ImagesContext.Provider value={{ reFetch, setReFetch }}>{children}</ImagesContext.Provider>
}
