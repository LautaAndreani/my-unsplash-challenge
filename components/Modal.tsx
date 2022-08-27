import { useContext, useState } from "react"
import { Api } from "../api/api"
import { ImagesContext } from "../context/ImgContext"
import { ModalProps } from "../models/Props"
import { Values } from "../models/States"
import { Button, Inputs } from "./index"

const initialValues = { label: "", photo_url: "" }

const Modal = ({ title = "Add a new Photo", setHandleModal, data }: ModalProps) => {
	const [values, setValues] = useState<Values>(initialValues)
	const { setReFetch } = useContext<any>(ImagesContext)

	// Get form values
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target

		setValues({ ...values, [name]: value })
	}
	const handleSubmit = async () => {
		if (Object.values(values).some(val => val === "")) return alert("Please complete all fields 👀")

		const response = await Api.addImage(values) // Create a new image in db
		if (response) {
			data.push(response)
			setReFetch((prev: boolean) => !prev)
			setHandleModal(false)
		}
		setValues(initialValues)
		return response
	}

	return (
		<div className="z-10 absolute w-full h-screen top-0 flex items-center justify-center bg-modal_bg left-0">
			<div className="bg-default w-2/4 h-[400px] min-w-[330px] rounded-md py-10 px-10">
				<h1 className="mb-5 text-3xl">{title}</h1>
				<div className="inputs-container flex flex-col gap-5 justify-between">
					<span className="label-input">
						<label className="text-sm">Label</label>
						<Inputs
							name="label"
							place="Write a label for the image"
							activeIcon={false}
							handleChange={handleChange}
							initialVal={values.label}
						/>
					</span>

					<span className="photo-input">
						<label className="text-sm">Photo URL</label>
						<Inputs
							name="photo_url"
							place="Paste unsplash URL"
							activeIcon={false}
							handleChange={handleChange}
							initialVal={values.photo_url}
						/>
					</span>

					<div className="flex items-center justify-end w-full mt-4">
						<span onClick={() => setHandleModal(false)}>
							<Button type="ghost">Cancel</Button>
						</span>
						<span onClick={handleSubmit}>
							<Button type="confirm">Submit</Button>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
