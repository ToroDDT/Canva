import { useState } from "react";
import sanitizeHtml from "sanitize-html";
import ContentEditable from "react-contenteditable";
import { useCallback } from "react";
import "/src/CSS/Content.css";
import { PropTypes } from "prop-types";

function PlaceHolder() {
  const [text, setText] = useState("");
  const onTextChange = useCallback((evt) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };

    setText(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
  }, []);
  return (
    <h1 className="editor-element">
      <ContentEditable
        onChange={onTextChange}
        onBlur={onTextChange}
        html={text}
      />
    </h1>
  );
}

PlaceHolder.propTypes = {
  Element: PropTypes.node,
};

export { PlaceHolder };

// Check if there is no text

//What are the edge cases.

// display text box on screen with a button
// when button is clicked check if there is text
// if there no button edit the existing componet with a new Heading or body style

// create a useState Hook to handle the state of text elements
// text and element type will be organized into objects
// each object in this array will have the element type and text
// on page load, loop through each object
// and render each object as a new conponent
// check array length, if array length is one
// always render the intial state
// for the intial state, make the first object in this array in this format {id:uuid, elementype: h1, text:""}
// check if there are no objects in state, make sure that there is always a textbox
// if there is no text boxes, create a new text box at the beggining

// Button with Component
// if there is no text in current element
// create a new object with this template {id: uuid, elementtype: element, text: ""}
//

// Content Editable Componet
// each componenet will have thier own internal state
// each conponenet will be deleteable
// each conponent will have a button
// this button will create a new pop up menu when clickd on
// create a drop down menu containing different options
// this menu will have the following options
// H1
// H2
// p
// when any options are clicked on
// set Element type on current content Editable
// if there is text on cuurent element
// create new element
// this button will set the state of the element type
