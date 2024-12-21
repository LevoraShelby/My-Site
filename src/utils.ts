type KeyboardListener = (event: KeyboardEvent) => void
function replaceKeyBinder(onKeyPress: KeyboardListener, prevOnKeyPress: React.MutableRefObject<KeyboardListener|undefined>) {
	if (prevOnKeyPress.current != undefined) {
		document.removeEventListener("keypress", prevOnKeyPress.current)
	}
	document.addEventListener("keypress", onKeyPress)
	prevOnKeyPress.current=onKeyPress
}

export { replaceKeyBinder } 
export type { KeyboardListener }
