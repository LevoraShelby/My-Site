import {createContext, ReactElement, useState} from "react";
import PageDeck from "./PageDeck";

const KeyBufferContext = createContext<string[]>([])
const SetKeyBufferContext = createContext<(s: string[])=>void>((s)=>{})

function App(): ReactElement {
	const [keyBuffer, setKeyBuffer] = useState<string[]>([])
	return (<>
			<KeyBufferContext.Provider value={keyBuffer}>
				<SetKeyBufferContext.Provider value={setKeyBuffer}>
					<PageDeck/>
				</SetKeyBufferContext.Provider>
			</KeyBufferContext.Provider>
		</>)
}

export default App
export {KeyBufferContext,SetKeyBufferContext}
