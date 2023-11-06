import CircleLine2 from "components/UI/CircleLine2/CircleLine2";

const CircleStepper = ({numberOfSteps, step}) => {
	return (
		<>
			{
				[...Array(numberOfSteps).keys()].map(index => {
					return <CircleLine2 key={index} number={index + 1} active={index + 1 <= step ? true : false} />
				})
			}
		</>
	)
}

export default CircleStepper;