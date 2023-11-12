import { useState } from 'react';
import { SearchBlockProps } from '../../types/interfaces';

const SearchBlock: React.FC<SearchBlockProps> = (props) => {
  const [searchTerm, setSearchTerm] = useState(props.searchTerm);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    props.onSearch(searchTerm.trim());
  };

  return (
    <div className="search-block">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBlock;
