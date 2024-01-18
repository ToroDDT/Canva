import { useState } from "react";
import sanitizeHtml from "sanitize-html";
import ContentEditable from "react-contenteditable";
import { useCallback } from "react";
import "/src/CSS/Content.css";
import { PropTypes } from "prop-types";

function PlaceHolder({ ID }) {
  const [text, setText] = useState<string>("");
  const [element, setElement] = useState<string>("p");
  const onTextChange = useCallback((evt) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };

    setText(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
  }, []);
  if (element == "h1") {
    return (
      <h1 className="editor-element">
        <Togglebutton ID={ID} text={text} />
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
        <Togglebutton ID={ID} text={text} />
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
        <Togglebutton ID={ID} text={text} />
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
        <Togglebutton ID={ID} text={text} />
        <ContentEditable
          onChange={onTextChange}
          onBlur={onTextChange}
          html={text}
        />
      </p>
    );
  }
}

function Togglebutton({ ID }) {
  const [toggle, setToggle] = useState(false);

  const conponentID = ID;
  const toggleButton = setToggle(true);
  if (!toggle) {
    return <button onClick={toggleButton}>+</button>;
  } else {
    return <SelectOptionsMenu ID={conponentID} />;
  }
}

function SelectOptionsMenu() {
  return (
    <div>
      <button>heading 1</button>
      <button> Heading 2</button>
      <button> heading 3</button>
    </div>
  );
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
