import { useState } from "react";
import StyledCard from "./StyledCard";

export default function Card() {
	const [state, setState] = useState(0)
	
	// increments or decrements the value of state
	function cs(n:number) {
		setState((prev) => {
			return prev+=n
		})
	} 

	return (
		<StyledCard state={state}>
			<h2>{state}</h2>
			<button disabled={state<-5} onClick={()=>cs(-1)} className='red'>Reduce</button>
			<button disabled={state>5} onClick={()=>cs(1)} className='inc'>Increase</button>
		</StyledCard>
	)
}