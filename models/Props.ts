import React, { SetStateAction } from "react"
import { Images } from "./api"

export interface ButtonProps {
	type: "confirm" | "delete" | "ghost" | "border"
	children: string
}

export interface InputProps {
	activeIcon: boolean
	place: string
	name: string
	handleChange?: React.Dispatch<SetStateAction<any>>
	initialVal: string
}

export interface ModalProps {
	title: string
	setHandleModal: React.Dispatch<SetStateAction<boolean>>
	data: Images[]
}

export interface GalleryProps {
	data: Images[]
}

export interface IndexProps {
	images: Images[]
}

export interface CardProps {
	data: Images
	handleDelete: Function
}
