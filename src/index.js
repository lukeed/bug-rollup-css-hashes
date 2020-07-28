import Navaid from 'navaid';

Navaid()
	.on('/', () => import('./Home.js').then(render))
	.on('/about', () => import('./About.js').then(render))
	.listen();

function render(tag, props) {
	let Nxt = tag.default || tag;
	document.body.appendChild(
		Nxt(props)
	);
}
