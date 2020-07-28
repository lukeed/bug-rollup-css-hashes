import cx from 'clsx';

export default function(props) {
	const Tag = props.tag || 'div';
	const cls = cx('container', props.class);
	return `<${Tag} class=${cls}>${props.children}</${Tag}>`;
}
