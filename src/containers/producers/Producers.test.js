import React from 'react';
import { render } from '@testing-library/react';
import Producers from './Producers';

test('renders learn react link', () => {
	const { getByText } = render(<Producers />);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
