import CardDisplay from "./CardDisplay";
import styled from "styled-components";

export default styled(CardDisplay)`

	display:grid;
	grid-template-columns: 1fr 1fr 1fr;
	max-width: 1000px;
	margin-inline:auto;
	text-align: center;
	align-items: center;
	justify-items: center;
	grid-row-gap: 3em;

`