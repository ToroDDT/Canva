//import { useCallback, useState } from "react";
//import sanitizeHtml from "sanitize-html";
//import ContentEditable from "react-contenteditable";
import { useEffect } from "react";
import React, { useState, useRef } from "react";
import { useEditable } from "use-editable";

function EditableElement() {
  const [code, setCode] = useState("Welcome");
  const editorRef = useRef(null);

  useEditable(editorRef, setCode);

  return (
    <h1 className="App">
      <p
        style={{
          whiteSpace: "pre-wrap",
          fontFamily: "inter",
        }}
        ref={editorRef}
      >
        {code.split(/\r?\n/).map((content, i, arr) => (
          <React.Fragment key={i}>
            <span style={{ color: "black" }}>{content}</span>
            {i < arr.length - 1 ? "\n" : null}
          </React.Fragment>
        ))}
      </p>
    </h1>
  );
}

export default EditableElement;

// create a button to set state
// when button is clicked show possible format styles
// when a specific format is clicked
// add format style to state
