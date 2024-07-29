import { useState } from "react";

// Inputs are controlled by React, and will block without the propper setup!
// The code below is necessary to be able to type something into the text field, while also retrieving the event
// It also "tracks" the change then, though
export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function onSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <form>
      <p>
        {name.firstName} {name.lastName}
      </p>
      <input
        // Javascript spread operator: "copy existing stuff from an array, object in here"
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        type="text"
        value={name.firstName}
      ></input>
      <input
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        type="text"
        value={name.lastName}
      ></input>
      <button onClick={(e) => onSubmit(e)}>Submit</button>
    </form>
  );
}
