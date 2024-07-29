import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍏" },
    { name: "Mango", price: 7, emoji: "🥭" },
    { name: "Banana", price: 2, emoji: "🍌" },
    { name: "Orange", price: 5, emoji: "🍊" },
    { name: "Pineapple", price: 8, emoji: "🍍" },
  ];

  // Loops are done with the map() function, note the key attribute!
  return (
    <ul>
      {fruits.map((f) => (
        <Fruit key={f} />
      ))}
    </ul>
  );
}
