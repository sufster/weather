export default function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="input-group">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />

      <button onClick={onSearch}>Search</button>
    </div>
  );
}