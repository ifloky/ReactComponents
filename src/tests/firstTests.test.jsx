import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/react-hooks';
import SearchPage from '../pages/searchPage/searchPageView';

test('Test SearchPage', async () => {
  const { findByTestId, unmount } = render(<SearchPage />, {
    wrapper: ({ children }) => children,
  });

  const SearchPageName = await findByTestId('main-text');
  expect(SearchPageName.innerText).toContain(
    'What planet are you interested in?'
  );
  unmount();
});
