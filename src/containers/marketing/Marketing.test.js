import React from 'react';
import { render } from '@testing-library/react';
import Marketing from './Marketing';

test('renders learn react link', () => {
	const { getByText } = render(<Marketing />);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
