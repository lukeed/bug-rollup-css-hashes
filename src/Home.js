import Container from './components/Container';
import * as Page from './components/Page';

export default function () {
	let inner = Container({
		narrow: true,
		children: 'text'
	});

	let header = Page.Header({
		children: inner
	});

	return Page.Content({
		children: header
	});
}
