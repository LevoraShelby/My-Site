import { useContext, useRef, useState } from 'react'
import Homepage from './Homepage.tsx'
import WhoAmI from './WhoAmI.tsx'
import KeybindingsModal from './KeybindingsModal.tsx'
import './PageDeck.css'
import {KeyBufferContext, SetKeyBufferContext} from './App.tsx'
import ShortStories from './ShortStories.tsx'
import {KeyboardListener, replaceKeyBinder} from './utils.ts'

function PageDeck() {
	const [page, setPage] = useState<number>(1)
	const [showKeybindingsModal, setShowKeybindingsModal] = useState<boolean>(false)
	const keyBuffer = useContext(KeyBufferContext)
	const setKeyBuffer = useContext(SetKeyBufferContext)
	const prevOnKeyPress = useRef<KeyboardListener|undefined>(undefined)

	const onKeyPress = (event: KeyboardEvent) => {
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
		if (event.key in ["0","1","2","3"]) {
			setKeyBuffer([])
			setPage(parseInt(event.key,10))
		}
	}
	replaceKeyBinder(onKeyPress, prevOnKeyPress)
	
	// TODO: KeybindingsModal isn't opening for some reason. Needs to be fixed.
	return (<div className='pageDeck'>
		{ page == 1 && <Homepage/> }
		{ page == 2 && <WhoAmI/> }
		{ page == 3 && <ShortStories/> }
		<KeybindingsModal isOpen={showKeybindingsModal} />
	</div>)
}

export default PageDeck
