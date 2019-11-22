import { render, html } from "lit-html";
import p5 from "p5";

import sketch from "./sketch";

import "./reset.css";
import "./index.scss";

const createApp = () => {

	let sketchElement = document.getElementById("sketch");

	document.addEventListener("DOMContentLoaded", () => {
		new p5(sketch, sketchElement)
	});

	return html`
		<main>
			<section id="sketch"></section>
			<section id="information">
				<div id="wrapper">
					<div id="about">
						<h1>
							Jonathon Toon
							<span>
								— is a multidisciplinary software designer based in Sydney, Australia.
							</span>
						</h1>
					</div>

					<div id="work">						
						<h2>
							Work History
						</h2>
						<br/>
						<p>
							Most recently, I was Product and Design Lead at <a href="https://www.moneytree.jp" target="_blank">Moneytree</a>. Responsible for strategic new financial products in Japan and Australia. Mentoring cross-functional teams and developing processes so they could work better together. 
							<br/>
							<br/>
							Prior to that I worked at <a href="https://www.origami.com" target="_blank">Origami</a>, <a href="https://www.xero.com" target="_blank">Xero</a> and <a href="https://www.facebook.com" target="_blank">Facebook</a>.
							<br/>
							<br/>
							Now, I'm looking for something new. For more details my latest portfolio is <a class="link underline white hover-white-50" href="https://www.figma.com/proto/4WuCCKH0BYs1djez3imrJK/Resume?node-id=3%3A759&viewport=75%2C265%2C0.0517074279487133&scaling=contain" target="_blank">available here</a>.
						</p>
					</div>

					<div id="projects">						
						<h2>
							Projects
						</h2>
						<br/>
						<p>
							<a href="https://github.com/jonathontoon/tweet-tray" target="_blank">Tweet Tray</a> — Compose tweets quickly from the desktop without any distractions.
							<br/>
							<br/>
							<a href="https://github.com/transferanyfile" target="_blank">Peershare</a> — Transfer any file you want to anyone you want.
						</p>
					</div>

					<div id="contact">						
						<h2>
							Contact
						</h2>
						<br/>
						<p>
							Feel free to get in touch via <a href="mailto:hi@jonathontoon.com" target="_blank">email</a> or follow me on <a href="https://twitter.com/jonathontoon" target="_blank">Twitter</a>, <a href="https://github.com/jonathontoon" target="_blank">Github</a> or <a href="https://linkedin.com/in/jonathontoon" target="_blank">LinkedIn</a>.
							<br/>
							<br/>
							Content provided under <a href="https://creativecommons.org/licenses/by-nc/3.0/" target="_blank">CC BY 3.0</a>.
						</p>
					</div>
				</div>
			</section>
		</main>
	`;	

};

render(createApp(), document.body);