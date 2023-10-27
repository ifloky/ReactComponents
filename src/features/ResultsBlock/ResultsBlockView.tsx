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
      <div>
        {searchResults.map((result: Planet) => (
          <div key={result.id}>
            <h3>name: {result.name}</h3>
            <p>climate: {result.climate}</p>
            <p>diameter: {result.diameter}</p>
            <p>rotation_period: {result.rotation_period}</p>
            <p>terrain: {result.terrain}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ResultsBlock;
