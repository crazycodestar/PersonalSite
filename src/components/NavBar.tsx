import { FC } from "react";

export interface NavBarProps {}

const NavBar: FC<NavBarProps> = (props) => {
	return (
		<div className="flex flex-row justify-between h-20 items-center px-5 bg-primary lg:px-44">
			<h4 className="text-secondary cursor-pointer ">Olalekan</h4>
			<ul className="flex flex-row space-x-5 items-center">
				<li className="hover:underline capitalize cursor-pointer">services</li>
				<li className="hover:underline capitalize cursor-pointer">portfolio</li>
				<li className="px-3 py-2 bg-secondary hover:underline rounded-md text-light capitalize cursor-pointer">
					hire me
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
