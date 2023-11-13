import { Route, Routes } from 'react-router-dom';
import SearchPage from './pages/searchPage/searchPageView';
import DetailsPage from './pages/DetailPage/DetailPageView';
import MainPageView from './pages/MainPage/MainPageView';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { defState } from './types/interfaces';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state: defState) => state.cash);
  console.log('cash', cash);

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
