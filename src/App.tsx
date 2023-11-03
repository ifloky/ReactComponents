import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchPage from './pages/searchPage/searchPageView';
import DetailsPage from './pages/DetailPage/DetailPageView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchPage />,
    errorElement: (
      <div>
        {' '}
        PAGE NOT FOUND, KARL <br />
        <span>404 KARL</span>
      </div>
    ),
  },
  {
    path: '/search/:page',
    element: <SearchPage />,
    children: [
      {
        path: '/search/:page/details/:id',
        element: (
          <DetailsPage
            currentPage={1}
            selectedPlanet={null}
            _updateSelectedPlanet={() => {
              return;
            }}
          />
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
