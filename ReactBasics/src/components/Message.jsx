export default function Message() {
  function onClick() {
    alert("hOi!");
  }

  return (
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
