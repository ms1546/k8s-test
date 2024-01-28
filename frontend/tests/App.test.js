import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

test('loads and displays greeting', async () => {
  fetch.mockResponseOnce(JSON.stringify({ message: 'Hello from Backend!' }));

  render(<App />);

  await waitFor(() => screen.getByText(/Received from backend:/));

  expect(screen.getByText('Received from backend: Hello from Backend!')).toBeInTheDocument();
});
