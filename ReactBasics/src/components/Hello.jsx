// jsx == "Javascript Extension"

const name = "Rob";

function aFunction() {
  return "Wow!";
}

export default function Hello() {
  // jsx needs to always return one single element, potentially containing multiple others!
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Do some Javascript: {10 + 20}</p>
      <p>Call a function: {aFunction()}</p>
    </div>
  );
}
