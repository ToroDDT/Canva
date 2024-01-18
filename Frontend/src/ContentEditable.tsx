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
    return <SelectOptionsMenu switchElement={changeElement} />;
  }
}

function SelectOptionsMenu({ switchElement }) {
  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          switchElement("h1");
        }}
      >
        heading 1
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          switchElement("h2");
        }}
      >
        Heading 2
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          switchElement("h3");
        }}
      >
        heading 3
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
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

PlaceHolder.propTypes = {
  ID: PropTypes.node,
};

export { PlaceHolder };
