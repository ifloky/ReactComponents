import React, { Component } from 'react';

interface Planet {
  id: number;
  name: string;
  climate: string;
  diameter: string;
  rotation_period: string;
  terrain: string;
}

interface ResultsBlockProps {
  searchResults: Planet[];
}

class ResultsBlock extends Component<ResultsBlockProps> {
  render() {
    const { searchResults } = this.props;

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
          </div>
        ))}
      </div>
    );
  }
}

export default ResultsBlock;
