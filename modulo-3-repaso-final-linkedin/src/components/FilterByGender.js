
const FilterByGender = props =>{
  const handleChange = (e) =>{
    props.handleFilter({
      key:'gender',
      value:e.target.value
    });
  }
  return (
      <>
      <label className="form__label display-block" htmlFor="gender">
      Género:
      </label>
      <select className="form__input-text" name="gender" id="gender" onChange={handleChange}>
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
      </select>
   </>
  )
}
export default FilterByGender;
