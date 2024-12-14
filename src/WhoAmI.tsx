import "./WhoAmI.css" 

function WhoAmI() {
	// TODO: Add dive after h1 to keep content from going on the sides
	return (<div className="whoamibg">
			<div className="whoami">
				<h1>Who Am I?</h1>
				<h2>Who Am I?</h2>
				<p>My name is Levora, and my pronouns are she/her!</p>
				<h2>What do I do?</h2>
				<p>I'm a programmer and sometimes a writer. I also like playing TTRPGs and I am working on creating a GURPS module where the players fight dinosaurs with futuristic weaponry.</p>
				<h2>What's my favorite bird?</h2>
				<p>I think cardinals are pretty cool. Look at this one:</p>
				<img src="https://www.scenichudson.org/wp-content/uploads/2022/11/scenichudson_20220138.jpg" />
				<p className="caption">Frank Beres</p>
				<h2>What do I make this site with?</h2>
				<p>I made this site as a react app with Vite as a starting point. I'm also working on it all in VIM, my beloved.</p>
				<img src="https://media1.tenor.com/m/xl-PA-sk1LcAAAAd/vim-my-beloved.gif" className="beloved" title="https://tenor.com/view/vim-my-beloved-vi-unix-command-line-gif-24684584" />
				<br/>
			</div>
		</div>)
}

export default WhoAmI
