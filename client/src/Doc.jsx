import { useState } from "react";
import sanitizeHtml from "sanitize-html";
import ContentEditable from "react-contenteditable";
import { useCallback } from "react";
import "/src/CSS/Content.css";

const EditableElement = () => {
  let correct = "CODING DESERT OF DESPAIR";
  const [content, setContent] = useState("CODING DESERT OF DESPAIR");
  const onContentChange = useCallback((evt) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };

    setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
  }, []);

  if (content == correct) {
    return (
      <h1 className="placeHolder editor-page">
        <ContentEditable
          onChange={onContentChange}
          onBlur={onContentChange}
          html={content}
        />
      </h1>
    );
  } else {
    return <H1 />;
  }
};

function H1() {
  const [text, setText] = useState("");
  const onTextChange = useCallback((evt) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };

    setText(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
  }, []);

  return (
    <div className="editor-page">
      <h1>
        <ContentEditable
          onChange={onTextChange}
          onBlur={onTextChange}
          html={text}
        />
      </h1>
    </div>
  );
}

function H2() {
  const [text, setText] = useState("");
  const onTextChange = useCallback((evt) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };

    setText(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
  }, []);

  return (
    <div className="editor-page">
      <h2>
        <ContentEditable
          onChange={onTextChange}
          onBlur={onTextChange}
          html={text}
        />
      </h2>
    </div>
  );
}

function H3() {
  const [text, setText] = useState("");
  const onTextChange = useCallback((evt) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };

    setText(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
  }, []);

  return (
    <div className="editor-page">
      <h3>
        <ContentEditable
          onChange={onTextChange}
          onBlur={onTextChange}
          html={text}
        />
      </h3>
    </div>
  );
}

function Paragraph() {
  const [text, setText] = useState("");
  const onTextChange = useCallback((evt) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };

    setText(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
  }, []);

  return (
    <div className="editor-page">
      <p>
        <ContentEditable
          onChange={onTextChange}
          onBlur={onTextChange}
          html={text}
        />
      </p>
    </div>
  );
}

export default EditableElement;
