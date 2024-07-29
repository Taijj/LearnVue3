// Props are readonly!
// Destructure props, variable naming must match the naming of the tag attributes.
export default function HelloDynamic({ message, name, seatNumbers }) {
  return (
    <div>
      <h1>
        {message} {name} {seatNumbers}!
      </h1>
    </div>
  );
}

// Alternative way to handle props:
// props is an object with named fields according to what's given as tag attributes.
function HelloDynamicAlt(props) {
  return (
    <div>
      <h1>
        {props.message} {props.name} {props.seatNumbers}!
      </h1>
    </div>
  );
}
