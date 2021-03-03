
const FilterByCities = props =>{
  const handleChange = (e)=>{
    props.handleFilter({
      key:'location',
      value : e.target.value
    })
  }
  const citiesList = props.cities.map((city,i)=>{
    return( <label key={i} className="display-block">      
    <input type="checkbox" name="location" value={city} onChange={handleChange}/>
    {city}
   </label>)
  })
  return (
    <>
    <label className="form__label display-block" htmlFor="gender">
      Ciudad:
    </label>
    {citiesList}
      </>
  )
}
export default FilterByCities;
