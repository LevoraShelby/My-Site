import "./WhoAmI.css" 

function WhoAmI() {
	return (<>
			<h1>Who Am I?</h1>
			<h3>Who Am I?</h3>
			<p>My name is Levora!</p>
			<h3>What do I do?</h3>
			<p>I'm a programmer and sometimes a writer. I also like playing TTRPGs and I am working on creating a GURPS module where the players fight dinosaurs with futuristic weaponry.</p>
			<h3>What's my favorite bird?</h3>
			<p>I think cardinals are pretty cool. Look at this one:</p>
			<img src="https://www.scenichudson.org/wp-content/uploads/2022/11/scenichudson_20220138.jpg" />
			<p className="caption">Frank Beres</p>
			<h3>What do I make this site with?</h3>
			<p>I made this site as a react app with Vite as a starting point. I'm also working on it all in VIM, my beloved.</p>
			<img src="https://media1.tenor.com/m/xl-PA-sk1LcAAAAd/vim-my-beloved.gif" className="beloved"/>
			<p className="caption">https://tenor.com/view/vim-my-beloved-vi-unix-command-line-gif-24684584</p>
		</>)
}

export default WhoAmI
