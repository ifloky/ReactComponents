import React from 'react';
import { Link } from 'react-router-dom';
import { Planet, ResultsBlockProps } from '../../types/interfaces';

const ResultsBlock: React.FC<ResultsBlockProps> = ({ searchResults }) => {
  return (
    <div className="results-block">
      {searchResults.map((result: Planet, index: number) => (
        <div key={index} className="results-block__planet">
          <h3 className="results-block__planet-name">
            <span>name:</span> {result.name}
          </h3>
          <p className="results-block__planet-climate">
            <span>climate:</span> {result.climate}
          </p>
          <p className="results-block__planet-diameter">
            <span>diameter:</span> {result.diameter}
          </p>
          <p className="results-block__planet-rotation">
            <span>rotation_period:</span> {result.rotation_period}
          </p>
          <p className="results-block__planet-terrain">
            <span>terrain:</span> {result.terrain}
          </p>
          <Link to={`/search/${index}`}>Show details</Link>
        </div>
      ))}
    </div>
  );
};

export default ResultsBlock;
