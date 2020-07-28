import Container from '../Container';
import * as style from './index.css';

export default function () {
	let inner = Container({
		class: style.world,
		children: 'nav text'
	});

	return `<nav>${inner}</nav>`;
}
