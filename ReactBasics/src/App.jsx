import HelloBasic from "./components/HelloBasic";
import HelloDynamic from "./components/HelloDynamic";
import Fruits from "./components/Fruits";

// Components have to start with a capital letter, to distinguish them from normal HTML tags
// .jsx - a kind of HTML + Javascript mixture
export default function App() {
  // Non strings need curly braces in tags!
  const seatNumbers = [1, 4, 8];
  return (
    <div className="App">
      Hello World!
      <HelloBasic />
      <HelloDynamic message="Howdy" name="Mike" seatNumbers={seatNumbers} />
      <Fruits />
    </div>
  );
}
