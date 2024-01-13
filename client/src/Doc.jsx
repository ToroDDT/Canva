import React, { useState, useRef } from "react";
import { useEditable } from "use-editable";
import "/src/CSS/Content.css";

function EditableElement() {
  const [code, setCode] = useState("Welcome");
  const editorRef = useRef(null);

  useEditable(editorRef, setCode);

  return (
    <h1>
      <p
        className="border"
        style={{
          whiteSpace: "pre-wrap",
          fontFamily: "inter",
          outline: 0,
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
