function App() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-3xl font-semibold">Counter with Redux</h1>
      <div className="flex gap-10 mt-10">
        <button className="border-2 p-3 rounded-md font-medium hover:bg-gray-200">
          Increment
        </button>
        <div className="border-2 px-4 pt-3 rounded-full font-medium">0</div>
        <button className="border-2 p-3 rounded-md font-medium hover:bg-gray-200">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
