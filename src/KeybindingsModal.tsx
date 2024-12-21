import {ReactElement} from 'react'
import Modal from 'react-modal'

// TODO: Some sort of warning is appearing whenever this opens and closes. Needs to be fixed
// TODO: Add new keybindings
// TODO: Use keyboard icons when making this pretty
const KeybindingsModal = (props: {isOpen: boolean}): ReactElement => {
	return (<Modal isOpen={props.isOpen ?? false} contentLabel='Keybindings'>
			<p>p,1 =&gt; Home Page</p>
			<p>p,2 =&gt; Who Am I?</p>
			<p>? =&gt; Toggle keybindings modal</p>
		</Modal>)
}

export default KeybindingsModal
