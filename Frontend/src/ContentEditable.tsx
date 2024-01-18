import { useState } from "react";
import sanitizeHtml from "sanitize-html";
import ContentEditable from "react-contenteditable";
import { useCallback } from "react";
import "/src/CSS/Content.css";
import { PropTypes } from "prop-types";

function Togglebutton({ changeElement }) {
  const [toggle, setToggle] = useState<boolean>(true);
  const handleToggle = () => {
    setToggle(false);
    alert("false");
  };
  if (toggle) {
    return <button onClick={handleToggle}>+</button>;
  } else {
    return <SelectOptionsMenu switchElement={changeElement} />;
  }
}

function SelectOptionsMenu({ switchElement }) {
  return (
    <div>
      <button
        onClick={() => {
          switchElement("h1");
        }}
      >
        heading 1
      </button>
      <button
        onClick={() => {
          switchElement("h2");
        }}
      >
        Heading 2
      </button>
      <button
        onClick={() => {
          switchElement("h3");
        }}
      >
        heading 3
      </button>
      <button
        onClick={() => {
          switchElement("p");
        }}
      >
        P
      </button>
    </div>
  );
}

function PlaceHolder({ ID }) {
  const [text, setText] = useState<string>("");
  const [element, setElement] = useState<string>("h1");
  const onTextChange = useCallback((evt) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };

    setText(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
  }, []);

  const changeElement = (element: string) => {
    setElement(element);
  };
  if (element == "h1") {
    return (
      <h1 className="editor-element">
        <Togglebutton ID={ID} text={text} swithElement={changeElement} />
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
        <Togglebutton ID={ID} text={text} swithElement={changeElement} />
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
        <Togglebutton ID={ID} text={text} swithElement={changeElement} />
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
        <Togglebutton ID={ID} text={text} swithElement={changeElement} />
        <ContentEditable
          onChange={onTextChange}
          onBlur={onTextChange}
          html={text}
        />
      </p>
    );
  }
}

// when button is clicked check if there is text
// if there is text change existing componet
// if not create a new drop down menu
// drop down menu will have select options
// when chosen add style options such as heading or paragraph

PlaceHolder.propTypes = {
  ID: PropTypes.node,
};

export { PlaceHolder };
