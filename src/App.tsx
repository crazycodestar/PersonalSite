import React, { FC } from "react";
// import "./App.css";
import Button from "./components/Button";
import {
	Card,
	CardHeading,
	CardImage,
	CardBody,
	CardButton,
} from "./components/Card";
import HorizontalScroller from "./components/HorizontalScroller";
import NavBar from "./components/NavBar";
import ReelCard from "./components/ReelCard";

const App: FC = () => {
	return (
		<div>
			<NavBar />

			{/* hero */}
			<div className="w-full p-5 lg:p-0 lg:mb-8">
				<div
					className="w-full p-10 pt-28 items-center flex flex-col bg-primary relative rounded-md h-auto mt-60
												md:flex-row-reverse md:justify-between gap-2 md:pt-10 md:mt-0
												lg:px-44
				"
				>
					<div
						className="w-2/3 bg-secondary overflow-hidden rounded-md h-80 absolute -top-[225px] left-1/2 -translate-x-1/2
													md:static md:translate-x-0 md:flex-shrink-0 md:w-[300px] 
					"
					>
						<img
							src="https://images.unsplash.com/photo-1606122017369-d782bbb78f32?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
							alt="image here"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="md:max-w-[500px]">
						<h2>Hello!</h2>
						<div className="mt-3 mb-4">
							<h4>I'm Olalekan Adekanmbi</h4>
							<p className="detail2 mt-1">
								I am a software developer fully proficient in both frontend and
								backend development makeing me a fullstact developer with up to
								three years of experience. I am also fully proficient in design,
								using figma, as most of my projects are initally designed before
								developed. I also have proficiency in mobile development, using
								react Native, making me an all in one solution to help you
								develop your presence on the internet
							</p>
						</div>
						<div className="space-y-2 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-2">
							<Button>hire me</Button>
							<Button secondary>services</Button>
						</div>
					</div>
				</div>
			</div>

			{/* services */}

			<div className="py-5 lg:px-44 space-y-10">
				<h4 className="capitalize text-center text-secondary">What I can do</h4>

				<div
					className="flex flex-col space-y-3
											md:flex-row md:space-y-0 md:justify-between md:gap-3 md:px-5
			"
				>
					<Card>
						<CardImage src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dWklMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=500" />
						<CardHeading>UI/UX design</CardHeading>
						<CardBody>
							This is the ideation process when the foundation for the website
							or mobile app is throughly constructed in preparation for the
							development
						</CardBody>
						<CardButton>View designs</CardButton>
					</Card>
					<Card>
						<CardImage src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVpJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" />
						<CardHeading>FullStack Development</CardHeading>
						<CardBody>
							Complete development of both the frontend and backend. By building
							both the frontend and backend, consistency and scalability is
							maintained
						</CardBody>
						<CardButton>Web projects</CardButton>
					</Card>
					<Card>
						<CardImage src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHVpJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" />
						<CardHeading>Mobile Development</CardHeading>
						<CardBody>
							Cross-platform application with a single code base.
						</CardBody>
						<CardButton>Mobile projects</CardButton>
					</Card>
				</div>
			</div>
			{/* portfolio */}
			<div className="bg-primary py-5 lg:px-44">
				<h4 className="capitalize text-center text-secondary">protfolio</h4>
				<div className="mt-5 space-y-5">
					<HorizontalScroller heading="UI/UX design">
						<ReelCard
							image="https://cdn.dribbble.com/users/1720295/screenshots/16367386/media/dd9904dc89806e743fd12c51f585f113.png?compress=1&resize=450x338&vertical=top"
							name="algrora"
							icon="dropdown"
							active={false}
						/>
						<ReelCard
							image="https://cdn.dribbble.com/users/1720295/screenshots/16367386/media/dd9904dc89806e743fd12c51f585f113.png?compress=1&resize=450x338&vertical=top"
							name="algrora"
							icon="dropdown"
							active={false}
						/>
						<ReelCard
							image="https://cdn.dribbble.com/users/1720295/screenshots/16367386/media/dd9904dc89806e743fd12c51f585f113.png?compress=1&resize=450x338&vertical=top"
							name="algrora"
							icon="dropdown"
							active={false}
						/>
					</HorizontalScroller>
					<HorizontalScroller heading="Algrora">
						<div className="w-[200px] h-[300px] bg-grey-light rounded-md ring-2 my-1">
							1 200
						</div>
						<div className="w-[100px] h-[300px] bg-grey-light rounded-md ring-2 my-1">
							2 100
						</div>
						<div className="w-[400px] h-[300px] bg-grey-light rounded-md ring-2 my-1">
							3 400
						</div>
						<div className="w-[200px] h-[300px] bg-grey-light rounded-md ring-2 my-1">
							4 200
						</div>
						<div className="w-[200px] h-[300px] bg-grey-light rounded-md ring-2 my-1">
							5 200
						</div>
						<div className="w-[200px] h-[300px] bg-grey-light rounded-md ring-2 my-1">
							6 200
						</div>
						<div className="w-[100px] h-[300px] bg-grey-light rounded-md ring-2 my-1">
							7 100
						</div>
						<div className="w-[400px] h-[300px] bg-grey-light rounded-md ring-2 my-1">
							8 400
						</div>
						<div className="w-[200px] h-[300px] bg-grey-light rounded-md ring-2 my-1">
							9 200
						</div>
						<div className="w-[200px] h-[300px] bg-grey-light rounded-md ring-2 my-1">
							0 200
						</div>
					</HorizontalScroller>
				</div>
				<div className="mt-3">
					<h6 className="mx-5 mb-3">Web development</h6>
					<ReelCard
						image="https://cdn.dribbble.com/users/1720295/screenshots/16367386/media/dd9904dc89806e743fd12c51f585f113.png?compress=1&resize=450x338&vertical=top"
						name="algrora"
						icon="link"
					/>
				</div>
				<div className="mt-3">
					<h6 className="mx-5 mb-3">Mobile development</h6>
					<ReelCard
						image="https://cdn.dribbble.com/users/1720295/screenshots/16367386/media/dd9904dc89806e743fd12c51f585f113.png?compress=1&resize=450x338&vertical=top"
						name="algrora"
						icon="dropdown"
						active={false}
					/>
				</div>
			</div>
			{/* hire me */}
			<div className="flex flex-row space-x-3 p-5 justify-center h-[300px] items-center">
				<div className="max-w-[150px] h-[150px] rounded-md overflow-hidden bg-secondary">
					<img
						src="https://images.unsplash.com/photo-1606122017369-d782bbb78f32?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
						alt="Olalekan"
						className="w-full h-full object-cover"
					/>
				</div>
				<div>
					<h4>Hire me</h4>
					<p className="detail1 my-2 text-dark">
						I'm really looking forward to working with you.
					</p>
					<div className="mr-auto flex">
						<Button>send email</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
