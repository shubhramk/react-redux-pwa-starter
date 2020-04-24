import React from 'react';
import { render } from '@testing-library/react';
import MarketingState from './Producers';

test('renders learn react link', () => {
	const { getByText } = render(<MarketingState />);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
