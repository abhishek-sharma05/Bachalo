import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  const handleAnimalsClick = async () => {
    const response = await fetch("https://99id26j0od.execute-api.us-east-1.amazonaws.com/Animals");
    const data = await response.json();
    console.log(data);
    return data;
  };

  const handleFoodClick = async () => {
    const response = await fetch("https://vmequyr1o1.execute-api.us-east-1.amazonaws.com/food");
    const data = await response.json();
    console.log(data);
    return data;
  };

  const handleHistoryClick = async () => {
    const response = await fetch("https://3etzek63ff.execute-api.us-east-1.amazonaws.com/history");
    const data = await response.json();
    console.log(data);
    return data;
  };

  const handleSportsClick = async () => {
    const response = await fetch("https://odsl8sxcmg.execute-api.us-east-1.amazonaws.com/sports");
    const data = await response.json();
    console.log(data);
    return data;
  };

  return (
    <div className="start">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button style={{ marginRight: "10px" }} onClick={() => console.log(handleAnimalsClick())}>Animals</button>
        <button style={{ marginRight: "10px" }} onClick={() => console.log(handleFoodClick())}>Food</button>
        <button style={{ marginRight: "10px" }} onClick={() => console.log(handleHistoryClick())}>History</button>
        <button style={{ marginRight: "10px" }} onClick={() => console.log(handleSportsClick())}>Sports</button>
      </div>
      <input
        className="startInput"
        placeholder="Enter your name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
