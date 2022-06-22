import { FC, ReactNode, useState, useRef, useLayoutEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export interface HorizontalScrollerProps {
	children: ReactNode;
	heading?: string;
}

const HorizontalScroller: FC<HorizontalScrollerProps> = ({
	children,
	heading,
}) => {
	const [usedElements, setUsedElements] = useState<number>(0);
	const [transformation, setTransformation] = useState<number[][]>([[0, 0]]);
	const [totalWidth, setTotalWidth] = useState<number>(0);
	const [individualWidths, setIndividualWidths] = useState<number[]>([]);

	const content = useRef<HTMLDivElement>(null);
	const contentContainer = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!content) return;

		const contentElements: HTMLCollection | undefined =
			content.current?.children;
		if (!contentElements) return;

		const contentElementsArray = Array.from(contentElements);

		let tempTotalWidth: number = 0;
		const tempIndividualWidths: number[] = [];

		contentElementsArray.forEach((element) => {
			tempTotalWidth += element.clientWidth;
			tempIndividualWidths.push(element.clientWidth);
		});
		// setUsedElements(visibleElementCount);
		setTotalWidth(tempTotalWidth);
		setIndividualWidths(tempIndividualWidths);
	}, []);

	type direction = "L" | "R";

	const handleScroll = (pointer: direction) => {
		if (pointer === "L")
			return setTransformation((init) => {
				if (init.length === 1) return init;
				const temp = [...init];
				return temp.splice(0, init.length - 1);
			});

		let sumTransformation: number = 0;
		if (!contentContainer.current) return;
		let countingWidth: number = contentContainer.current?.clientWidth;
		let newUsedElementsCount: number = 0;
		const SPACINGOFFSET = 20;

		transform: {
			for (let i: number = 0; i < individualWidths.length; i++) {
				const lastTransformationValue = transformation.at(-1);
				if (!lastTransformationValue) return;
				if (i < lastTransformationValue[1]) continue;

				countingWidth -= individualWidths[i] + SPACINGOFFSET;
				if (countingWidth < 0) {
					// setUsedElements((init) => init + newUsedElementsCount);
					setTransformation((init): number[][] => {
						const lastElement = init.at(-1);
						if (lastElement === undefined) return init;
						const lastElementCount = lastElement[0];
						const lastElementUsedCount = lastElement[1];
						if (lastElementCount === undefined) {
							return [...init, [sumTransformation, lastElementUsedCount]];
						}
						return [
							...init,
							[
								lastElementCount + sumTransformation,
								newUsedElementsCount + lastElementUsedCount,
							],
						];
					});
					break transform;
				}
				sumTransformation += individualWidths[i] + SPACINGOFFSET;
				newUsedElementsCount += 1;
			}
			console.log("nothing more here");
		}
	};

	let transformationPositionInit = transformation.at(-1);
	if (!transformationPositionInit) transformationPositionInit = [0, 0];
	let transformationPosition = transformationPositionInit[0];

	return (
		<div className="w-full overflow-x-hidden">
			<div className="px-5 mb-2 flex items-center w-full">
				<h6>{heading}</h6>
				<div className="flex space-x-2 ml-auto">
					<MdKeyboardArrowLeft
						onClick={() => handleScroll("L")}
						className="cursor-pointer active:opacity-70 transition-all w-[22px] h-[22px] bg-secondary rounded-full text-light"
					/>
					<MdKeyboardArrowRight
						onClick={() => handleScroll("R")}
						className="cursor-pointer active:opacity-70 transition-all w-[22px] h-[22px] bg-secondary rounded-full text-light"
					/>
				</div>
			</div>
			<div ref={contentContainer} className="w-full overflow-x-hidden">
				<div
					className={`flex transition-all flex-row w-fit ml-5 gap-5 relative`}
					style={{
						left: `-${transformationPosition}px`,
					}}
					ref={content}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default HorizontalScroller;
