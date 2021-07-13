import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header', () => {
  render(<App />);
  const myHeader = screen.getByText(/Beca's Hangman Experiment/i);
  expect(myHeader).toBeInTheDocument();
});
