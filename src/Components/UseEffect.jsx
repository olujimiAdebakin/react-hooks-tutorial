

// this hook allows you to perform side effects in your functional components.
// - fetching data from Api
// -Directly updating the dom
// Timers like Settimeout and setinterval
// to make use of useffect we need to provide first the callback function and second the dependency

import { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCounter] = useState(0);
  const [name, setName] = useState("lekan"); // Initialize name as a string

  useEffect(() => {
    setTimeout(() => {
      setCounter((count) => count + 1);
      setName("lekan updated");
    }, 2000);
  }, [count, name]);

  return (
    <>
      <div>
        <h1>Hello, useEffect!</h1>
        <p>This component demonstrates the useEffect hook.</p>
      </div>

      <h1>I have rendered {count} times!</h1>
      <h1>I am {name}</h1>
    </>
  );
}
