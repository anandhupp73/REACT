function Filter({ setFilterDept }) {
  return (
    <input
      type="text"
      placeholder="Search by Department"
      onChange={(e) => setFilterDept(e.target.value)}
    />
  );
}

export default Filter;
