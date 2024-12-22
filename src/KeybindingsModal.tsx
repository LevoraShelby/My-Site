import {ReactElement} from 'react'
import Modal from 'react-modal'
import "./KeybindingsModal.css"

// TODO: Some sort of warning is appearing whenever this opens and closes. Needs to be fixed
// TODO: Add new keybindings
// TODO: Use keyboard icons when making this pretty
const KeybindingsModal = (props: {isOpen: boolean}): ReactElement => {
	return (<Modal isOpen={props.isOpen ?? false} contentLabel='Keybindings' className="keybindingsModal">
			<p>{getKeyImg("shift")},{getKeyImg("slash-questionmark")} =&gt; Toggle keybindings modal</p>
			<p>{getKeyImg("p")},{getKeyImg("1")} =&gt; Home Page</p>
			<p>{getKeyImg("p")},{getKeyImg("2")} =&gt; Who Am I?</p>
			<p>{getKeyImg("p")},{getKeyImg("3")} =&gt; Writings</p>
			<h1>Writings Page</h1>
			<p>{getKeyImg("k")} =&gt; Move up in menu</p>
			<p>{getKeyImg("j")} =&gt; Move down in menu</p>
			<p>{getKeyImg("q")} =&gt; Exit writing back to menu</p>
		</Modal>)
}

const getKeyImg = (key: string): ReactElement => {
	return <img src={`/keys/${key}.svg`} className={ `keybindingKey ${key === "shift" ? "shift" : ""}`} />
}

export default KeybindingsModal
