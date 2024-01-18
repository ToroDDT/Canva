import "/src/CSS/Content.css";
import "/src/CSS/mainApp.css";
import "./CSS/index.css";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlaceHolder } from "./ContentEditable";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import TextEditorTools from "./TextEditorTools";
interface ContentEditableContext {
  id: string;
  ElementType: string;
  text: string;
  color: string;
}

const componentDescription: ContentEditableContext = {
  id: uuidv4(),
  ElementType: "h1",
  text: "",
  color: "",
};

const Context = createContext({
  componentDescription,
});

function App() {
  const [state, setState] = useState([
    { id: uuidv4(), ElementType: "p", color: "" },
  ]);
  const [clickedElement, setClickedElement] = useState<boolean>(false);
  return (
    <>
      <NavBar />
      <div
        onClick={() => {
          setClickedElement(true);
          console.log("working");
        }}
        id="main-application"
      >
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
                        <PlaceHolder
                          ID={element.id}
                          ElementType={element.ElementType}
                          color={element.color}
                        />
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
