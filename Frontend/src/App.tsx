import "/src/CSS/Content.css";
import "/src/CSS/mainApp.css";
import NavBar from "./NavBar";
import TextEditorTools from "./TextEditorTools";
import SideBar from "./SideBar";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlaceHolder } from "./Doc";
interface ContentEditable {
  id: string;
  Elementtype: string;
  text: string;
}

const contentEditableContext: ContentEditable = {
  id: uuidv4(),
  Elementtype: "h1",
  text: "",
};

const Context = createContext({
  contentEditableContext,
});

//import { useState } from "react";
function App() {
  const [state, setState] = useState([{ id: uuidv4() }, { id: uuidv4() }]);
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
