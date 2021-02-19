
function CatItem(props) {
  return (
    <li>
      <a href="http://lorempixel.com">{props.name}</a>
      <img src={"http://placekitten.com/"+props.src} alt="Random cat" />
      <img src={`http://placekitten.com/${props.src}`} alt="Random cat" />
    </li>
  );
}

export default CatItem;