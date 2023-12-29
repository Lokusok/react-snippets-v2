import SnippetForm from "../../components/snippet-form";
import Modal from "../../containers/modal";

import { useUpdateSnippetsMutation } from "../../api/groups";

import { useAppDispatch, useAppSelector } from "../../store";
import { setActiveModal } from "../../store/slices/modals";

function SnippetCreator() {
  const dispatch = useAppDispatch();

  const [updateSnippets] = useUpdateSnippetsMutation();
  const activeGroup = useAppSelector((state) => state.groups.active);

  const callbacks = {
    submit: (data: { title: string, code: string }) => {
      if (activeGroup) {
        const newGroup = {
          ...activeGroup,
          snippets: [...activeGroup.snippets, {
                id: String(Date.now()), title: data.title, code: data.code,
          }],
        };
        updateSnippets(newGroup);
        dispatch(setActiveModal(null));
      }
    },
  };

  return (
    <Modal title="Создание нового сниппета">
      <SnippetForm onSubmit={callbacks.submit} />
    </Modal>
  );
}

export default SnippetCreator;
