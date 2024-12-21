import axios from "axios"
import {ReactElement, useContext, useEffect, useRef, useState} from "react"
import {KeyBufferContext} from "./App"
import {KeyboardListener, replaceKeyBinder} from "./utils"

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

	return (<div>
			<h2>{props.title}</h2>
			{text != undefined && text.split("\n").map( (paragraph, i) => <p key={i}>{paragraph}</p>)}
			{text == undefined && !hasErrorOccured && <p>Loading...</p>}
			{text == undefined && hasErrorOccured && <p>Error!</p>}
		</div>)
}

export default WritingPiece
