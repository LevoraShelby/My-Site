import { useState } from 'react'
import App from './App.tsx'
import WhoAmI from './WhoAmI.tsx'
import './PageDeck.css'

function PageDeck() {
	const [position, setPosition] = useState(1)
	// TODO: Move this into a Context when we start using more keybinds
	const [keyBuffer, setKeyBuffer] = useState<string[]>([])

	const onKeyPress = (event: React.KeyboardEvent<any>) => {
		if (keyBuffer.length == 0 && event.key === "p") {
			setKeyBuffer(["p"])
			return
		}
		if (keyBuffer.length == 0) {
			return
		}
		if (event.key in ["0","1","2"]) {
			setKeyBuffer([])
			setPosition(parseInt(event.key,10))
		}
	}
	
	return (<div onKeyUp={onKeyPress} tabIndex={0} className='pageDeck'>
		{ position == 1 && <App/> }
		{ position == 2 && <WhoAmI/> }
	</div>)
}

export default PageDeck
