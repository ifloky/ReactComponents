import { useState } from 'react';

interface SearchBlockProps {
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
}

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
