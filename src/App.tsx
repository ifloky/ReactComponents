import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/searchPage/searchPageView';
import DetailsPage from './pages/DetailPage/DetailPageView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/search/:page" element={<SearchPage />} />
        <Route path="/search/:page/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
