import Image from "next/image"
import { CardProps } from "../models/Props"
import Button from "./Button"

const Card = ({ data, handleDelete }: CardProps) => {
	return (
		<div className="relative rounded-lg">
			<span className="absolute z-10 font-bold top-0 w-full h-full opacity-0 hover:opacity-100 transition ease-in-out rounded-lg text-default bg-modal_bg">
				<div className="flex flex-col justify-between w-full h-full py-7 px-5">
					<small className="w-full flex justify-end" onClick={() => handleDelete(data._id)}>
						<Button type="border">Delete</Button>
					</small>
					<span>{data.label}</span>
				</div>
			</span>
			<Image
				src={data.photo_url}
				alt={data.label}
				priority
				width="500"
				height="600"
				objectFit="cover"
				layout="responsive"
				className="w-full h-full rounded-lg"
			/>
		</div>
	)
}

export default Card
