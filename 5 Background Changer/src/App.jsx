import React, { useState } from "react";

export default function App() {
  const [color, setColor] = useState("white");

  const handleClick = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl ">
            <button
              onClick={handleClick}
              className="outline-none px-4 py-1 font-bold  rounded-full text-white shadow-lg"
              style={{ backgroundColor: "violet" }}
              value={"violet"}
            >
              Violet
            </button>
            <button
              onClick={handleClick}
              className="outline-none px-4 py-1 rounded-full font-bold text-white shadow-lg"
              style={{ backgroundColor: "indigo" }}
              value={"indigo"}
            >
              Indigo
            </button>
            <button
              onClick={handleClick}
              className="outline-none px-4 py-1 rounded-full font-bold text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              value={"blue"}
            >
              Blue
            </button>
            <button
              onClick={handleClick}
              className="outline-none px-4 py-1 rounded-full font-bold text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              value={"green"}
            >
              Green
            </button>
            <button
              onClick={handleClick}
              className="outline-none px-4 py-1 rounded-full font-bold text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
              value={"yellow"}
            >
              Yellow
            </button>
            <button
              onClick={handleClick}
              className="outline-none px-4 py-1 rounded-full font-bold text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
              value={"orange"}
            >
              Orange
            </button>
            <button
              onClick={handleClick}
              className="outline-none px-4 py-1 rounded-full font-bold text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              value={"red"}
            >
              Red
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
