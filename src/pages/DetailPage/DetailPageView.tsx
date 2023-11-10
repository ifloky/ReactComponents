import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { Planet } from '../../types/interfaces';
import { fetchResultsId } from '../../shared/API';
import { useEffect, useState } from 'react';

const DetailsPage: React.FC = () => {
  const { id } = useParams();
  const [searchResults, setSearchResults] = useState<Planet | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const result = await fetchResultsId(id.toString());
          setSearchResults(result);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="details-container">
      <div>
        <h2>Details</h2>
        {searchResults ? (
          <>
            <p>Name: {searchResults.name}</p>
            <p>Climate: {searchResults.climate}</p>
            <p>Diameter: {searchResults.diameter}</p>
            <p>Rotation Period: {searchResults.rotation_period}</p>
            <p>Terrain: {searchResults.terrain}</p>
          </>
        ) : (
          <p className="loader-wrapper">
            <span className="loader"></span>
          </p>
        )}
        <button onClick={handleBackClick}>Back to Results</button>
      </div>
      <Outlet />
    </div>
  );
};

export default DetailsPage;
