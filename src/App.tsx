import { Route, Routes } from 'react-router-dom';
import SearchPage from './pages/searchPage/searchPageView';
import DetailsPage from './pages/DetailPage/DetailPageView';
import MainPageView from './pages/MainPage/MainPageView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPageView />}>
        <Route index element={<SearchPage />} />
        <Route path=":page" element={<SearchPage />} />
        <Route path="search/:page/*" element={<SearchPage />}>
          <Route path="details/:id" element={<DetailsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
