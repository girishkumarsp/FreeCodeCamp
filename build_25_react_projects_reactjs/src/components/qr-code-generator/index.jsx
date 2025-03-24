import { useState } from "react";
import QrCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    try {
      setQrCode(input);
      setInput("")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QrCode
          id="qr-code-value"
          value={qrCode}
          size={400}
          bgColor="lightblue"
        />
      </div>
    </div>
  );
}
