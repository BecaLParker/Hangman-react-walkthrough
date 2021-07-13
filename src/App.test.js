import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header', () => {
  render(<App />);
  const myHeader = screen.getByText(/Beca's Hangman Experiment/i);
  expect(myHeader).toBeInTheDocument();
});

test('renders Figure', () => {
  render(<App />);
  const myFigure = screen.getByText(/Death awaits.../i);
  expect(myFigure).toBeInTheDocument();
  // TODO: Write a more rigerous test of the figure component being rendered
});
