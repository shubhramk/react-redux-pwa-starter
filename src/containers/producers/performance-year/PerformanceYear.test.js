import React from 'react';
import { render } from '@testing-library/react';
import PerformanceYear from './Producers';

test('renders learn react link', () => {
	const { getByText } = render(<PerformanceYear />);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
