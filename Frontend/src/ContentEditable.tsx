import { useState } from "react";
import sanitizeHtml from "sanitize-html";
import ContentEditable from "react-contenteditable";
import { useCallback } from "react";
import "/src/CSS/Content.css";
import { PropTypes } from "prop-types";

function PlaceHolder() {
  const [text, setText] = useState<string>("");
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
