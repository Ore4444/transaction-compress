import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders something', () => {
  render(<App />);
  const linkElement = screen.getBy(/Add new Transaction/i);
  expect(linkElement).toBeInTheDocument();
});
