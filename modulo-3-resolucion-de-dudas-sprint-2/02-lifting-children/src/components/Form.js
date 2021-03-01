function Form(props) {
  console.log("Form props", props);
  return (
  <form>
    <h2>Formulario</h2>
    {props.children}
  </form>
  );
}

export default Form;