import { render, screen } from '@testing-library/react';
import ButtonDownload from './ButtonDownload';

test('renders csv download button', () => {
  render(<ButtonDownload transactions={[]}/>);
  const button = screen.getByText(/Compress Transactions/i);
  expect(button).toBeInTheDocument();
});
