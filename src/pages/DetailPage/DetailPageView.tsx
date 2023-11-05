import { Link } from 'react-router-dom';
import { DetailsPageProps } from '../../types/interfaces';

const DetailsPage: React.FC<DetailsPageProps> = (props) => {
  console.log(props);
  const handleBackClick = () => {
    props._updateSelectedPlanet();
  };
  return (
    <div className="details-container">
      <div>
        <h2>Details</h2>
        {props.selectedPlanet ? (
          <>
            <p>Name: {props.selectedPlanet.name}</p>
            <p>Climate: {props.selectedPlanet.climate}</p>
            <p>Diameter: {props.selectedPlanet.diameter}</p>
            <p>Rotation Period: {props.selectedPlanet.rotation_period}</p>
            <p>Terrain: {props.selectedPlanet.terrain}</p>
          </>
        ) : (
          <p>No details available</p>
        )}
        <Link to={`/search/${props.currentPage}`} onClick={handleBackClick}>
          Back to Results
        </Link>{' '}
      </div>
    </div>
  );
};

export default DetailsPage;
