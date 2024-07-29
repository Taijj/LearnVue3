export default function Fruit({ fruit }) {
  return (
    <li>
      {fruit.emoji} {fruit.name} ${fruit.price}{" "}
      {fruit.isSoldOut ? " - SOLD OUT!" : ""}
    </li>
  );
}
