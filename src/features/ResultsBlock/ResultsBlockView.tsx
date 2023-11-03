import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Planet, ResultsBlockProps } from '../../types/interfaces';
import Pagination from '../Pagination/Pagination';
import DetailsPage from '../../pages/DetailPage/DetailPageView';

const ResultsBlock: React.FC<ResultsBlockProps> = ({
  searchResults,
  countResults,
  currentPage,
  countPerPage,
  setCurrentPage,
}) => {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const handleBackClick = () => {
    if (selectedPlanet) {
      setSelectedPlanet(null);
    }
  };

  return (
    <div className="results-block">
      <div className="left-side">
        {searchResults.length > 0 ? (
          searchResults.map((result: Planet, index: number) => (
            <div key={index} className="left-side__planet">
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
                to={`/search/${currentPage}/details/${index}`}
                onClick={() => setSelectedPlanet(result)}
              >
                Details
              </Link>{' '}
            </div>
          ))
        ) : (
          <h2> No results </h2>
        )}
        <Pagination
          countResults={countResults}
          countPerPage={countPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div
        className="right-side"
        onClick={handleBackClick}
        style={{ display: selectedPlanet ? 'flex' : 'none' }}
      >
        <div>
          <DetailsPage
            selectedPlanet={selectedPlanet}
            currentPage={currentPage}
            _updateSelectedPlanet={handleBackClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsBlock;
