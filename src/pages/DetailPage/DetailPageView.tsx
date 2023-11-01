import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchResultsId } from '../../shared/API';
import { Details } from '../../types/interfaces';

const DetailsPage = () => {
  const { id } = useParams();

  const [details, setDetails] = useState<Details>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetchResultsId(id);
      setDetails(result);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : details ? (
        <div>
          <h2>Details</h2>
          <p>Name: {details.name}</p>
          <p>Climate: {details.climate}</p>
          <p>Diameter: {details.diameter}</p>
          <p>Rotation Period: {details.rotation_period}</p>
          <p>Terrain: {details.terrain}</p>
          <Link to="/">Back to Results</Link>
        </div>
      ) : (
        <div>Details not found</div>
      )}
    </div>
  );
};

export default DetailsPage;
