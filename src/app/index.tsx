import { Route, Routes } from "react-router-dom";
import Main from "./main";

import ModalLayout from "../components/modal-layout";
import GroupCreator from "./group-creator";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<span>404</span>} />
      </Routes>

      <GroupCreator />
    </>
  )
}

export default App;
