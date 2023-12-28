import { Route, Routes } from "react-router-dom";

import Main from "./main";
import GroupCreator from "./group-creator";
import SnippetCreator from "./snippet-creator";
import Snippet from "./snippet";

import { useAppSelector } from "../store";

function App() {
  const activeModal = useAppSelector((state) => state.modals.active);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<span>404</span>} />
      </Routes>

      {activeModal === 'group-create' && <GroupCreator />}
      {activeModal === 'snippet-create' && <SnippetCreator />}
      {activeModal === 'snippet-view' && <Snippet />}
    </>
  )
}

export default App;
