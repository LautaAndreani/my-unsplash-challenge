import { ButtonProps } from "../models/Props"

const Button = ({ type = "confirm", children }: ButtonProps) => {
	const { background, color, border } = {
		background: type === "confirm" ? "bg-btn_confirm" : type === "delete" ? "bg-btn_delete" : "",
		color:
			type === "confirm" || type === "delete" ? "text-default" : type === "border" ? "text-btn_delete" : "text-inputs",
		border: type === "border" ? "border-2" : "",
	}

	return (
		<button type="button" className={`py-4 px-10 rounded-xl border-btn_delete ${background} ${color} ${border}`}>
			{children}
		</button>
	)
}

export default Button
