import sanitizeHtml from "sanitize-html";
import ContentEditable from "react-contenteditable";
import { useCallback, useEffect, useRef } from "react";
import "/src/CSS/Content.css";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { useContext } from "react";
import { ContentEditableContext } from "./App";

function Togglebutton({ text, switchElement }) {
  const [toggle, setToggle] = useState<boolean>(true);
  const handleToggle = () => {
    setToggle(false);
  };
  if (toggle) {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleToggle();
          console.log("toggle");
        }}
      >
        +
      </button>
    );
  } else {
    return <SelectOptionsMenu text={text} switchElement={switchElement} />;
  }
}

function SelectOptionsMenu({ text, switchElement }) {
  const { amount, changeAmount } = useContext(ContentEditableContext);
  function verifyContentEditableIsEmpty(elementType) {
    if (text == "") {
      switchElement(elementType);
    } else {
      changeAmount(elementType);
    }
  }
  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          verifyContentEditableIsEmpty("h1");
        }}
      >
        heading 1
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          verifyContentEditableIsEmpty("h2");
        }}
      >
        Heading 2
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          verifyContentEditableIsEmpty("h3");
        }}
      >
        heading 3
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          verifyContentEditableIsEmpty("p");
        }}
      >
        P
      </button>
    </div>
  );
}

function PlaceHolder({ ID, ElementType, color }) {
  const [text, setText] = useState("");

  const [span, addSpan] = useState(true);
  const [element, setElementType] = useState<string>(ElementType);

  const onTextChange = useCallback((evt) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p", "span"],
      allowedAttributes: { a: ["href"] },
    };
    if (span) {
      setText(text + `<span> ${text} <span>`);
      addSpan(false);
    } else {
      setText(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
    }
  }, []);

  const changeElement = (element: string) => {
    setElementType(element);
  };

  if (element == "h1") {
    return (
      <h1 className="editor-element">
        <Togglebutton ID={ID} text={text} switchElement={changeElement} />
        <ContentEditable
          onChange={onTextChange}
          onBlur={onTextChange}
          html={text}
        />
      </h1>
    );
  } else if (element == "h2") {
    return (
      <h2 className="editor-element">
        <Togglebutton ID={ID} text={text} switchElement={changeElement} />
        <ContentEditable
          onChange={onTextChange}
          onBlur={onTextChange}
          html={text}
        />
      </h2>
    );
  } else if (element == "h3") {
    return (
      <h3 className="editor-element">
        <Togglebutton ID={ID} text={text} switchElement={changeElement} />
        <ContentEditable
          onChange={onTextChange}
          onBlur={onTextChange}
          html={text}
        />
      </h3>
    );
  } else if (element == "p") {
    return (
      <p className="editor-element">
        <Togglebutton ID={ID} text={text} switchElement={changeElement} />
        <ContentEditable
          onChange={onTextChange}
          onBlur={onTextChange}
          html={text}
        />
      </p>
    );
  }
}

PlaceHolder.propTypes = {
  ID: PropTypes.node,
};

export { PlaceHolder };
