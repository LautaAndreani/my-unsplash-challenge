import { NextComponentType } from "next"
import Image from "next/image"
import { useState } from "react"
import { GalleryProps } from "../models/Props"
import { Inputs, Button, Modal } from "./index"

const Header = ({ data }: GalleryProps) => {
	const [handleModal, setHandleModal] = useState<boolean>(false)
	const [value, setValue] = useState<string>("")
	return (
		<header className="h-20 w-full flex items-center justify-between py-10 px-20 sticky top-0 z-20 bg-default">
			<span className="flex items-center">
				<Image src="/assets/unsplash-logo.svg" alt="myunsplash logo" width="150" height="150" />
				<Inputs name="name" activeIcon place="Search by name" initialVal={value} />
			</span>
			<span onClick={() => setHandleModal(true)}>
				<Button type="confirm">Add a photo</Button>
			</span>
			{handleModal && <Modal title="Add a new Photo" setHandleModal={setHandleModal} data={data} />}
		</header>
	)
}

export default Header
