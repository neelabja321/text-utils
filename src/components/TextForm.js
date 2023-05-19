import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    newText !== ""
      ? props.showAlert("converted to upper case", "success")
      : props.showAlert("Please enter text to continue", "warning");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    newText !== ""
      ? props.showAlert("converted to lower case", "success")
      : props.showAlert("Please enter text to continue", "warning");
  };

  const [text, setText] = useState("");

  const handleCleartext = () => {
    let newText = "";
    setText(newText);
    text !== ""
      ? props.showAlert("text has been cleared", "success")
      : props.showAlert("Please enter text to continue", "warning");
  };

  const handleAsciitext = () => {
    let asciiArr = [];
    for (const key in text) {
      const code = text.charCodeAt(key);
      asciiArr.push(code + " ");
      const finalAsciiArr = asciiArr.join("");
      setText(finalAsciiArr);
    }
    text !== ""
      ? props.showAlert("converted to ascii code", "success")
      : props.showAlert("Please enter text to continue", "warning");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className={"form-control"}
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          Convert to lowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCleartext}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleAsciitext}>
          Convert to ascii code
        </button>
      </div>
      <div
        className={`container my-4`}
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className={props.mode === "dark" ? "text-light" : "text-dark"}>
          Your text summary
        </h2>
        <p>
          <b>
            {text.length === 0
              ? text.length
              : text.split(" ")[text.split(" ").length - 1] === ""
              ? text.split(" ").length - 1
              : text.split(" ").length}
          </b>{" "}
          words and <b>{text.length}</b> charecters
        </p>
        <p>
          <b>
            {text.length === 0
              ? "0.00"
              : 0.008 * text.split(" ").length.toFixed(2)}
          </b>{" "}
          minuites to read
        </p>
        <div
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in textbox text to preview"}
          </p>
        </div>
      </div>
    </>
  );
}
