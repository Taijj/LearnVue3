import Hello from "./components/Hello";

// Components have to start with a capital letter, to distinguish them from normal HTML tags
// .jsx - a kind of HTML + Javascript mixture
export default function App() {
  return (
    <div className="App">
      Hello World!
      <Hello />
    </div>
  );
}
