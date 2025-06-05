

// Where used: Topbar search
// Why practical: Search across Customers, Users, Contacts from one input
//  Can show auto-suggestions or dropdown results












export const GlobalSearch = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch(query)}
      />
      <Button onClick={() => onSearch(query)}>Search</Button>
    </div>
  );
};



