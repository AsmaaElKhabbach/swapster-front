function SearchBar() {

  const handleChangeSearch = (event) => {
    const newValue = event.target.value;
    // J'emet mon intention de modifier le newSearch
    dispatch(changeNewSearch(newValue));
  };
  return (
    <div>
      <form>
        <input
        placeholder="Veuillez entrer votre recherche"
        type="text"
        value={newSearch}
        onChange={handleChangeSearch}>
        </input>
      </form>
    </div>
  )
}

export default 
SearchBar
