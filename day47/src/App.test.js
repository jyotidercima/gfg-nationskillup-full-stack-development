import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render the main heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Testing React Components/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders the button with label "Click Me"',() =>{
  render(<App/>);
  const buttonElement = screen.getByTheDocument();
});

test('renders the fetch button with label "Fetch Data"', () => {
  render(<App />);
  const fetchButtonElement = screen.getByText(/Fetch Data/i);
  expect(fetchButtonElement).toBeInTheDocument();
});
