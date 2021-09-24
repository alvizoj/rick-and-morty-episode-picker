import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeScreen from './components/HomeScreen';

test('Renders LOADING text', () => {
    render(<HomeScreen />);
    const linkElement = screen.getByText(/LOADING/i);
    expect(linkElement).toBeInTheDocument();
});
