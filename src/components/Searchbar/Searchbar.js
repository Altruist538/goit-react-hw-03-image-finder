export const Searchbar = ({ submitForm }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    console.log(query);
    submitForm(query);
    event.target.reset();
  };
  return (
    <>
      <header className="searchbar">
        <form onSubmit={handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};
