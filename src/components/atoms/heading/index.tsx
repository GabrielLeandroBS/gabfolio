import style from './styles/heading.module.scss'

export type HeadingProps = {
	/**
	 * The type of HTML tag to be used for rendering the heading.
	 * Available options: 'h1', 'h2', 'h3', 'h4'
	 */
	as: 'h1' | 'h2' | 'h3' | 'h4'

	/**
	 * The text of the heading.
	 */
	title: string

	/**
	 * An additional label associated with the heading.
	 */
	label: string
}

/**
 * The Heading component is a small React function that renders a heading based on the provided props.
 * It accepts three props: as, title, and label. The as prop defines the HTML tag type to be used for rendering the heading,
 * with a default value of 'h1'. The title prop represents the main text of the heading, while the label prop provides an additional
 * label associated with the heading. The component renders the heading with the corresponding HTML tag,
 * applying the appropriate style class and adding the label for accessibility using the aria-label attribute.
 */
const Heading = ({ as = 'h1', title = 'Heading', label = 'Heading to yout content' }: HeadingProps) => {
	const Tag = as

	return (
		<Tag aria-label={label} className={style['c-heading--' + as]}>
			{title}
		</Tag>
	)
}

export default Heading
