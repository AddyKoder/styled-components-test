import styled from "styled-components";
import { ReactElement } from "react";

function Heading({children, className}:{children:string, className?:string}) {
	return <h1 className={className}>{children}</h1>
}

export default styled(Heading)`
	font-size	: 4rem;
	text-align: center;
` 