import Nav from '../Nav';
import Container from '../Container';
import Newsletter from '../Newsletter';
import Copyright from '../Copyright';

export function Content(props) {
	return `<div>${props.children}</div>`;
}

export function Header(props) {
	return `<header>${Nav()}${props.children}</header>`;
}

export function Footer() {
	let output = Container({
		narrow: true,
		children: Newsletter() + Copyright()
	});
	return `<footer>${output}</footer>`;
}
