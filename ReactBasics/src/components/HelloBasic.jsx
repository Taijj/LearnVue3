// jsx == "Javascript Extension"

const name = "Rob";
function aFunction() {
  return "Wow!";
}

export default function HelloBasic() {
  // jsx needs to always return one single element, potentially containing multiple others!
  // This can be circumvented with "fragments" <>...</> (kinda like empty tags)
  return (
    <>
      <h3>Hello {name}!</h3>
      <p>Do some Javascript: {10 + 20}</p>
      <p>Call a function: {aFunction()}</p>
    </>
  );
}
