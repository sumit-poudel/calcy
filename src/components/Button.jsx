export default function Button(props) {
  return (
    <button onClick={props.func}
      className={props.class ? props.class : null}
      id={props.id ? props.id : null}
      value={props.inside}
    >
      <h2>{props.inside}</h2>
    </button>
  );
}
