function BrandSelectionFilter({ brandList, onBrandChange }) {
  console.log("brandList", brandList);

  const handleChange = (e) => {
    onBrandChange(e.target.value);
  };

  return (
    <div className="flex flex-row items-center">
      <label>Brand:</label>
      <select onChange={handleChange} className="border-2 ml-2">
        <option value="">All</option>
        {brandList?.map((data, index) => (
          <option key={data + index}>{data}</option>
        ))}
      </select>
    </div>
  );
}

export default BrandSelectionFilter;
