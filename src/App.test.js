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
  // TODO: Write a more rigorous test of the figure component being rendered
});

test('renders WrongLetters', () => {
  render(<App />);
  const myWrongLetters = screen.getByText(/Incorrect guesses:/i);
  expect(myWrongLetters).toBeInTheDocument();
  // TODO: Write a more rigorous test of the WrongLetters component being rendered
});
