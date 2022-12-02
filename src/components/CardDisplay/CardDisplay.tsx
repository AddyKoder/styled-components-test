import Card from '../Card/Card'

export default function CardDisplay({ n, className }:{n:number, className?:string}) {

	const rec = []
	for (let i = 0; i < n; i++){
		rec.push(i)
	}
	
	return (<div className={className}>
		{rec.map(i => <Card key={i} />)}
		</div>
	) 	 
}
