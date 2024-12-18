import { useContext, useState } from 'react'
import Homepage from './Homepage.tsx'
import WhoAmI from './WhoAmI.tsx'
import KeybindingsModal from './KeybindingsModal.tsx'
import './PageDeck.css'
import {KeyBufferContext, SetKeyBufferContext} from './App.tsx'

function PageDeck() {
	const [page, setPage] = useState(1)
	const [showKeybindingsModal, setShowKeybindingsModal] = useState(false)
	const keyBuffer = useContext(KeyBufferContext)
	const setKeyBuffer = useContext(SetKeyBufferContext)

	// TODO: It would be nice if key-pressing handling was abstracted away somehow
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
			setPage(parseInt(event.key,10))
		}
	}
	
	return (<div onKeyUp={onKeyPress} tabIndex={0} className='pageDeck'>
		{ page == 1 && <Homepage/> }
		{ page == 2 && <WhoAmI/> }
		<KeybindingsModal isOpen={showKeybindingsModal} />
	</div>)
}

export default PageDeck
