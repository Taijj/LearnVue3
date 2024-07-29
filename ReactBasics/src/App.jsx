import HelloBasic from "./components/HelloBasic";
import HelloDynamic from "./components/HelloDynamic";
import Fruits from "./components/Fruits";
import Conditional from "./components/Conditional";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

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
      <Conditional isColleg={true} />
      <Message />
      <Counter />
      <Form />
    </div>
  );
}
