import { useState } from "react";
import sanitizeHtml from "sanitize-html";
import ContentEditable from "react-contenteditable";
import { useCallback } from "react";
import "/src/CSS/Content.css";

const EditableElement = () => {
  let correct = "CODING DESERT OF DESPAIR!!";
  const [content, setContent] = useState("CODING DESERT OF DESPAIR!!");
  const [text, setText] = useState("");
  const onContentChange = useCallback((evt) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };

    setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
  }, []);

  const onTextChange = useCallback((evt) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };

    setText(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
  }, []);

  if (content == correct) {
    return (
      <h1 className="placeHolder">
        <ContentEditable
          onChange={onContentChange}
          onBlur={onContentChange}
          html={content}
        />
      </h1>
    );
  } else {
    //setContent("");
    return (
      <h1 className="">
        <ContentEditable
          onChange={onTextChange}
          onBlur={onTextChange}
          html={text}
        />
      </h1>
    );
  }
};

export default EditableElement;
