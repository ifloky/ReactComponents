import React, { Component } from 'react';

class ResultsBlock extends Component {
  render() {
    const { searchResults, error, onRetry } = this.props;

    return (
      <div>
        {error ? (
          <div>
            <p>Ошибка: {error}</p>
            <button onClick={onRetry}>Повторить</button>
          </div>
        ) : (
          searchResults.map((result) => (
            <div key={result.id}>
              <h3>{result.title}</h3>
              <p>{result.description}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default ResultsBlock;
