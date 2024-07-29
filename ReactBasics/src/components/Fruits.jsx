import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍏", isSoldOut: true },
    { name: "Mango", price: 7, emoji: "🥭", isSoldOut: false },
    { name: "Banana", price: 2, emoji: "🍌", isSoldOut: false },
    { name: "Orange", price: 5, emoji: "🍊", isSoldOut: true },
    { name: "Pineapple", price: 8, emoji: "🍍", isSoldOut: true },
  ];

  // Loops are done with the map() function, note the key attribute!
  return (
    <ul>
      {fruits.map((f) => (
        <Fruit key={f.name} fruit={f} />
      ))}
    </ul>
  );
}
