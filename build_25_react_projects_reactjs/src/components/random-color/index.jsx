import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    //#678765
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    let R = randomColorUtility(255);
    let G = randomColorUtility(255);
    let B = randomColorUtility(255);
    console.log(`rgb(${R},${G},${B})`);
    setColor(`rgb(${R},${G},${B})`);
  }

  useEffect(()=>{
    if(typeOfColor == "hex") handleCreateRandomHexColor()
    else handleCreateRandomRgbColor()
  },[typeOfColor])

  return (
    <div
      style={{
        // margin: "0",
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20px",
        //   display: "flex",
        //   gap: "10px",
        }}
      >
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>

      <h1 style={{ fontSize: "4rem", color: "#fff", textAlign: "center" }} > <div>{typeOfColor == "hex" ? "HEX color" : "RGB color" }</div> {color}</h1>
    </div>
  );
}
