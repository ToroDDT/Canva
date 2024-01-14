import NavBar from "./NavBar";
import EditableElement from "./Doc";
import TextEditorTools from "./TextEditorTools";
import SideBar from "./SideBar";
import "/src/CSS/mainApp.css";

//import { useState } from "react";
function App() {
  return (
    <>
      <NavBar />
      <div id="main-application">
        <SideBar />
        <div id="text-editor-ui">
          <TextEditorTools />
          <div id="editor">
            <EditableElement />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
