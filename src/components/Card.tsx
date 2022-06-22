import { FC, ReactNode } from "react";
import { MdArrowRightAlt } from "react-icons/md";

export interface CardProps {
	children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
	return (
		<div className="w-[300px] mx-auto rounded-md pb-3 md:h-fit">{children}</div>
	);
};

export interface CardImageProps {
	src: string;
	alt?: string;
}

const CardImage: FC<CardImageProps> = ({ src, alt = "image" }) => {
	return (
		<div className="w-full shadow-constant rounded-md overflow-hidden mb-3 h-[150px]">
			<img className="w-full h-full object-cover" src={src} alt={alt} />
		</div>
	);
};

export interface CardButtonProps {
	children: ReactNode;
}

const CardButton: FC<CardButtonProps> = ({ children }) => {
	return (
		<div className="group active:opacity-60 flex flex-row items-center transition-opacity cursor-pointer capitalize ml-2 pr-3 py-2 bg-transparent w-fit text-secondary">
			<p>{children}</p>
			<MdArrowRightAlt className="group-hover:ml-3 transition-all ml-1" />
		</div>
	);
};

export interface CardHeadingProps {
	children: ReactNode;
}

const CardHeading: FC<CardHeadingProps> = ({ children }) => {
	return <h4 className="mb-2 mx-2 text-secondary">{children}</h4>;
};
export interface CardBodyProps {
	children: ReactNode;
}

const CardBody: FC<CardBodyProps> = ({ children }) => {
	return <p className="detail2 mb-2 mx-2 text-grey">{children}</p>;
};

export { Card, CardImage, CardButton, CardHeading, CardBody };
