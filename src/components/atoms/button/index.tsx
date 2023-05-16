import Link from 'next/link'

import style from './styles/button.module.scss'

export type ButtonProps = {
	/**
	 * The label displayed on the button
	 */
	label: string

	/**
	 * Determines if the button is primary (true) or secondary (false)
	 */
	primary?: boolean

	/**
	 * The size of the button: 'small', 'medium', or 'large'
	 */
	size?: 'small' | 'medium' | 'large'

	/**
	 * The URL the button redirects to
	 */
	url: string
}

/**
 * The component renders an internal link element with the provided properties.
 * The link element has various properties including the target URL, title, accessibility description, and CSS classes
 * based on the button properties.
 */
const Button = ({ primary = true, size = 'medium', label = 'Button', url = '#' }: ButtonProps) => (
	<Link
		role='link'
		href={url}
		title={`Go to ${url} page`}
		aria-label={`Link to go to ${label} page`}
		rel='nofollow'
		className={[
			style['c-button'],
			style['c-button--' + size],
			primary ? style['c-button--primary'] : style['c-button--secondary'],
		].join(' ')}
	>
		{label}
	</Link>
)

export default Button
