import Image from "next/image"
import { InputProps } from "../models/Props"

const Inputs = ({ activeIcon = true, place = "Search by name", name, handleChange, initialVal }: InputProps) => {
	return (
		<div className="flex items-center gap-3 border-2 py-2 px-2 rounded-[12px] border-inputs h-14">
			{activeIcon && <Image src="/assets/search.svg" width={20} height={20} alt="search icon" />}
			<input
				className="outline-none w-full text-ellipsis"
				type="text"
				placeholder={place}
				name={name}
				value={initialVal || ""}
				onChange={handleChange}
			/>
		</div>
	)
}

export default Inputs
