import "./App.css";

import Box from "./components/Box";

import useStore from "./store/Datastore";

function App() {
  const boxes = useStore((store) => store.boxes);

  return (
    <div className="min-h-screen p-10 md:p-40">
      <h3 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl mb-10">
        Drag and Drop using React
      </h3>
      <p className="mb-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
        Sort the below items into correct position
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
        {boxes.map((box, index) => (
          <Box key={index} box={box} />
        ))}
      </div>
    </div>
  );
}

export default App;
