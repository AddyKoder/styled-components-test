import styled from "styled-components";

export default styled.div`
	border: 2px solid ${p => p.state == 0 ? 'grey' :p.theme.clr};
	padding: 1em 1em;
	border-radius: 1em;
	transition: transform .25s;
	:hover{
		transform: scale(1.1);
	}

	button{
		margin-inline:1em;
		font-size: 1rem;
		border:1px solid transparent;
		border-radius: 5px;
		background-color: transparent;
		padding: .5em 1em;

		:hover{
			cursor: pointer;
		}
		:disabled:hover{
			cursor: not-allowed
		}
	}

	.red{
		text-decoration: ${({ state }:{state:number}) => state<-5?'line-through':'none' };
	}
	.inc{
		text-decoration: ${({ state }:{state:number}) => state>5?'line-through':'none' };
	}

	.red:hover{
		border-color: red;
	}
	.inc:hover{
		border-color: green;
	}

	h2{
		font-size: 3rem;
		margin-block:.5em;
		font-weight: 200;
		color:${({ state }: { state: number })=> state == 0?'grey':state>0?'green':'red'}
	}
`


