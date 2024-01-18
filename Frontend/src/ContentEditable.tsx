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
}

function Togglebutton({ ID }) {
  const [toggle, setToggle] = useState(false);

  const conponentID = ID;
  const addComponenet = setState(false);
  const toggleButton = setToggle(true);
  if (!toggle) {
    return <button>+</button>;
  } else {
    return <SelectOptionsMenu />;
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
