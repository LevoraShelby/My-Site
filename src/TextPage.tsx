import {ReactElement} from "react";
import "./TextPage.css"

function TextPage(props: {text: string}): ReactElement {
	return (<div className="textPage">
			{props.text.split("\n").map( (paragraph, i) => <p key={i}>{paragraph}</p>)}
		</div>)
}

export default TextPage
