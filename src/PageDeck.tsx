import { useState } from 'react'
import Homepage from './Homepage.tsx'
import WhoAmI from './WhoAmI.tsx'
import KeybindingsModal from './KeybindingsModal.tsx'
import './PageDeck.css'

function PageDeck() {
	const [position, setPosition] = useState(1)
	// TODO: Move this into a Context when we start using more keybinds
	const [showKeybindingsModal, setShowKeybindingsModal] = useState(false)
	const [keyBuffer, setKeyBuffer] = useState<string[]>([])

	const onKeyPress = (event: React.KeyboardEvent<any>) => {
		if (keyBuffer.length == 0 && event.key === "p") {
			setKeyBuffer(["p"])
			return
		}
		if (keyBuffer.length == 0 && event.key === "?") {
			setShowKeybindingsModal((val) => !val)
			return
		}
		if (keyBuffer.length == 0 && event.key === "Escape" && showKeybindingsModal) {
			setShowKeybindingsModal(false)
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
		{ position == 1 && <Homepage/> }
		{ position == 2 && <WhoAmI/> }
		{ /*TODO: KeybindingsModal doesn't always toggle if it was toggled just a second ago*/ }
		<KeybindingsModal isOpen={showKeybindingsModal} />
	</div>)
}

export default PageDeck
