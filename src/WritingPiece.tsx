import axios from "axios"
import {ReactElement, useContext, useEffect, useRef, useState} from "react"
import {KeyBufferContext} from "./App"
import {KeyboardListener, replaceKeyBinder} from "./utils"
import TextPage from "./TextPage"
import "./WritingPiece.css"

// TODO: Split into pages. Process page breaks
function WritingPiece(props: {title: string, close: () => void}): ReactElement {
	const [text, setText] = useState<string | undefined>(undefined)
	const [hasErrorOccured, setHasErrorOccurred] = useState<boolean>(false)
	const keyBuffer = useContext(KeyBufferContext)
	const prevOnKeyPress = useRef<KeyboardListener|undefined>(undefined)

	useEffect(()=>{
		axios.get<string>("http://localhost:8080/writings/" + props.title)
			.then( resp => setText(resp.data) , _ => setHasErrorOccurred(true))
	}, [])

	const onKeyPress = (event: KeyboardEvent): void => {
		if (keyBuffer.length == 0 && event.key === "q") {
			props.close()
		}
	}
	replaceKeyBinder(onKeyPress, prevOnKeyPress)

	return (<div className="writingPiece">
			<h2>{props.title}</h2>
			{text != undefined && <TextPage text={text}/>}
			{text == undefined && !hasErrorOccured && <p>Loading...</p>}
			{text == undefined && hasErrorOccured && <p>Error!</p>}
		</div>)
}

export default WritingPiece
