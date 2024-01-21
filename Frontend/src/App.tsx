import "/src/CSS/Content.css";
import "/src/CSS/mainApp.css";
import "./CSS/index.css";
import { useContext, useState } from "react";
import { PlaceHolder } from "./ContentEditable";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import TextEditorTools from "./TextEditorTools";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const ContentEditableContext = createContext({
  id: uuidv4(),
  ElemenType: "h1",
  color: "",
});

function App() {
  interface ContentEditableDetails {
    id: string;
    ElementType: string;
    color: string;
  }

  const [amount, setAmount] = useState<
    { id: string; ElementType: string; color: string }[]
  >([{ id: uuidv4(), ElementType: "h1", color: "" }]);

  const changeAmount = (elementType) => {
    setAmount([
      ...amount,
      { id: uuidv4(), ElementType: elementType, color: "" },
    ]);
  };
  console.log(amount);
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
        <ContentEditableContext.Provider value={{ amount, changeAmount }}>
          <div id="text-editor-ui">
            <TextEditorTools />
            <div id="editor">
              <div className="editor-page">
                <ul className="editable-content">
                  {amount.map((element) => {
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
        </ContentEditableContext.Provider>
      </div>
    </>
  );
}

// pass state of

export default App;
