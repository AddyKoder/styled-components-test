import Heading from './components/headings/Heading'
import GlobalStyles from './GlobalStyles'
import CardDisplay from './components/CardDisplay/StyledCardDisplay'
import { ThemeProvider } from 'styled-components'

export default function App() {
	return <div>
		<ThemeProvider theme={{clr:'#007be1'}}>
			<GlobalStyles/>
			<Heading> This is the Heading </Heading>
			<CardDisplay n={10} />
		</ThemeProvider>
	</div>
}

