import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Planet, ResultsBlockProps } from '../../types/interfaces';
import DetailsPage from '../../pages/DetailPage/DetailPageView';

const ResultsBlock: React.FC<ResultsBlockProps> = ({
  searchResults,
  currentPage,
}) => {
  const navigate = useNavigate();
  const [selectedPlanet, setSelectedPlanet] = useState(false);
  const handleBackClick = () => {
    if (selectedPlanet) {
      navigate(`/search/${currentPage}`);
      setSelectedPlanet(false);
    }
  };

  return (
    <div className="results-block">
      <div className="left-side">
        {searchResults.length > 0 ? (
          searchResults.map((result: Planet, index: number) => (
            <div key={index + 1} className="left-side__planet">
              <h3 className="left-side__planet-name">
                <span>name:</span> {result.name}
              </h3>
              <p className="left-side__planet-climate">
                <span>climate:</span> {result.climate}
              </p>
              <p className="left-side__planet-diameter">
                <span>diameter:</span> {result.diameter}
              </p>
              <p className="left-side__planet-rotation">
                <span>rotation_period:</span> {result.rotation_period}
              </p>
              <p className="left-side__planet-terrain">
                <span>terrain:</span> {result.terrain}
              </p>
              <Link
                to={`/search/${currentPage}
/details/${result.url ? result.url.slice(-2) : ''}`}
                onClick={() => setSelectedPlanet(true)}
              >
                Details
              </Link>
            </div>
          ))
        ) : (
          <h2> No results </h2>
        )}
      </div>
      <div
        className="right-side"
        onClick={handleBackClick}
        style={{ display: selectedPlanet ? 'flex' : 'none' }}
      >
        <div>
          <DetailsPage />
        </div>
      </div>
    </div>
  );
};

export default ResultsBlock;
