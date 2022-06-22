import { FC } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineLaunch } from "react-icons/md";

type icon = "dropdown" | "link";

export interface ReelCardProps {
	image: string;
	name: string;
	active?: boolean;
	icon: icon;
}

const ReelCard: FC<ReelCardProps> = ({ image, name, icon, active }) => {
	// this function is not working with typescript
	const handleIcon = () => {
		if (icon === "dropdown") {
			return (
				<div className="group-hover:mt-2 transition-all">
					{active ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
				</div>
			);
		}
		return <MdOutlineLaunch className="text-secondary" />;
	};

	return (
		<div className="space-y-3">
			<div className="shadow-constant rounded-md overflow-hidden mb-1 w-[250px] h-[150px] bg-secondary">
				<img src={image} alt={name} className="w-full h-full object-cover" />
			</div>
			<div className="group flex flex-row space-x-1 items-center">
				<h6 className="capitalize">{name}</h6>
				{handleIcon()}
			</div>
		</div>
	);
};

export default ReelCard;
