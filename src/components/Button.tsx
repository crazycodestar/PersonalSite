import { FC, ReactNode } from "react";

export interface ButtonProps {
	children: ReactNode;
	secondary?: Boolean;
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick, secondary }) => {
	return (
		<div
			className={`transition-opacity px-3 py-2 cursor-pointer bg-secondary  rounded-md text-center capitalize ${
				secondary
					? "ring-1 ring-secondary text-secondary bg-transparent"
					: "text-light"
			}
      active:opacity-70`}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default Button;
