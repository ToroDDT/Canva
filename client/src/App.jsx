import NavBar from "./NavBar";
import EditableElement from "./Doc";
import TextEditorTools from "./TextEditorTools";
import SideBar from "./SideBar";

//import { useState } from "react";
function App() {
  return (
    <>
      <NavBar />
      <div id="main-application">
        <SideBar />
        <div id="text-editor-ui">
          <TextEditorTools />
          <EditableElement />
        </div>
      </div>
    </>
  );
}

export default App;
