import NavBar from "./NavBar";
import TextEditorTools from "./TextEditorTools";
import SideBar from "./SideBar";
import "/src/CSS/mainApp.css";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import sanitizeHtml from "sanitize-html";
import { useCallback } from "react";
import "/src/CSS/Content.css";
import { PlaceHolder } from "./Doc";
let Context = createContext({
  id: uuidv4(),
  ElementType: "h1",
  text: "",
});

//import { useState } from "react";
function App() {
  const [text, setText] = useState("please");

  const [state, setState] = useState([{ id: uuidv4() }, { id: uuidv4() }]);
  let onTextChange = useCallback((evt) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: { a: ["href"] },
    };

    setText(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
  }, []);

  return (
    <>
      <NavBar />
      <div id="main-application">
        <SideBar />
        <Context.Provider value={state}>
          <div id="text-editor-ui">
            <TextEditorTools />
            <div id="editor">
              <div className="editor-page">
                <ul className="editable-content">
                  {state.map((element) => {
                    return (
                      <li key={element.id}>
                        <PlaceHolder />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </Context.Provider>
      </div>
    </>
  );
}

export default App;
