import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { HeadingProps } from '@/components/atoms/heading'
import Heading from '@/components/atoms/heading'

describe('Component Heading', () => {
	it('Should render with correct props', () => {
		const props: HeadingProps = {
			as: 'h1',
			label: 'Aria Label',
			title: 'Heading',
		}

		const { getByText } = render(<Heading {...props} />)

		const validateHeadingProps = getByText(props.title)

		expect(validateHeadingProps).toBeInTheDocument()
		expect(validateHeadingProps.tagName.toLowerCase()).toBe('h1')
		expect(validateHeadingProps).toHaveAttribute('aria-label', props.label)
		expect(validateHeadingProps).toHaveClass('c-heading--h1')
	})
})
