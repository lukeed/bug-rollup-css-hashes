import cx from 'clsx';

export default function (props) {
	const Tag = props.href ? 'a' : 'button';
	const { children, outline, block } = props;
	const cls = cx(outline && 'outline', block && 'block');
	return `<${Tag} class=${cls}>${children}</${Tag}>`;
}
