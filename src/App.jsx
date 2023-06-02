import { useState } from "react";
import Person from "./Person";

const App = () => {
  const [index, setIndex] = useState(0);
  return (
    <main>
      <article className="review">
        <Person index={index} setIndex={setIndex} />
      </article>
    </main>
  );
};
export default App;
