import {ReactElement, useEffect, useState, useContext, useRef} from "react";
import axios from "axios";
import {KeyBufferContext} from "./App";
import WritingPiece from "./WritingPiece";
import {KeyboardListener, replaceKeyBinder} from "./utils";

function Writings(): ReactElement {
	const [titles, setTitles] = useState<string[]>([])
	const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined)
	const [isStoryOpen, setIsStoryOpen] = useState<boolean>(false)
	const keyBuffer = useContext(KeyBufferContext)
	const prevOnKeyPress = useRef<KeyboardListener|undefined>(undefined)

	useEffect(() => {
		const apiTitlesReq = axios.get<string[]>("http://localhost:8080/writings/titles")
		apiTitlesReq.then((res) => {
			if (res.status == 200) {
				setTitles(res.data)
				if (res.data.length != 0) {
					setSelectedIndex(0)
				}
			}
		})
	}, [])

	const onKeyPress = (event: KeyboardEvent): void => {
		if (keyBuffer.length == 0 && ["j","k"].includes(event.key) && selectedIndex != undefined) {
			if (event.key === "j") {
				setSelectedIndex((selectedIndex) => (selectedIndex! + 1) % titles.length)
			}
			if (event.key === "k") {
				setSelectedIndex((selectedIndex) => Math.abs((selectedIndex! - 1) % titles.length))
			}
		}
		if (keyBuffer.length == 0 && event.key === "Enter" && !isStoryOpen && selectedIndex != undefined) {
			setIsStoryOpen(true)
		}
	}
	replaceKeyBinder(onKeyPress, prevOnKeyPress)

	return (<div> 
			{!isStoryOpen &&
				titles.map( (title, i) => (
					<p key={i}>{(i == selectedIndex ? '> ' : '') + title}</p>
				))
			}
			{isStoryOpen && selectedIndex != undefined &&
				<WritingPiece close={() => setIsStoryOpen(false)} title={titles[selectedIndex]}/>
			}
		</div>)
}

export default Writings
