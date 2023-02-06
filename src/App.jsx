import { useState } from "react";
import NestedCompTest from "./components/NestedCompTest";
import Homepage from "./pages/home/homepage";

export default function App() {
  const [counter, setCounter] = useState(7);

  const foohi = () => {
    console.log("hi123");
  };

  return (
    <div className="App text-center">
      <h1 className="text-2xl underline mt-5 mb-5" onClick={foohi}>
        Dac's Cool React Starter template
      </h1>
      <NestedCompTest onClick={foohi} />
			<Homepage />
      <p>{counter}</p>
      <button className="bg-slate-400 rounded-md text-black p-2 mr-2 mt-5" onClick={() => setCounter(counter - 1)}>
        minus
      </button>
      <button className="bg-slate-400 rounded-md text-black p-2" onClick={() => setCounter(counter + 1)}>
        add
      </button>
    </div>
  );
}
