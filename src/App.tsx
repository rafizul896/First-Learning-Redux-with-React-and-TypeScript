import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/features/hook";

function App() {
  const dispatch = useAppDispatch()
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-3xl font-semibold">Counter with Redux</h1>
      <div className="flex gap-10 mt-10">
        <button
          onClick={handleDecrement}
          className="border-2 p-3 rounded-md font-medium hover:bg-gray-200"
        >
          Decrement
        </button>
        <div className="border-2 px-4 pt-3 rounded-full font-medium">
          {count}
        </div>
        <button
          onClick={handleIncrement}
          className="border-2 p-3 rounded-md font-medium hover:bg-gray-200"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
