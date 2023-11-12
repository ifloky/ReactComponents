import { Route, Routes } from 'react-router-dom';
import SearchPage from './pages/searchPage/searchPageView';
import DetailsPage from './pages/DetailPage/DetailPageView';
import MainPageView from './pages/MainPage/MainPageView';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPageView />} />
      <Route path="/search/:page/*" element={<SearchPage />}>
        <Route path="details/:id" element={<DetailsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
