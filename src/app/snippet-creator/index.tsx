import SnippetForm from "../../components/snippet-form";
import ModalLayout from "../../containers/modal-layout";

import { useUpdateSnippetsMutation } from "../../api/groups";

import { useAppDispatch, useAppSelector } from "../../store";
import { setActiveModal } from "../../store/slices/modals";

function SnippetCreator() {
  const dispatch = useAppDispatch();

  const [updateSnippets] = useUpdateSnippetsMutation();
  const activeGroup = useAppSelector((state) => state.groups.active);

  const callbacks = {
    submit: (data: { title: string }) => {
      console.log(`Received data:`, data);
      if (activeGroup) {
        // TODO: FIX
        const newGroup = {
          ...activeGroup,
          snippets: [...activeGroup.snippets, {
                id: String(Date.now()), title: data.title, code: 'print("hello world")',
              }],
        };
        updateSnippets(newGroup);
        dispatch(setActiveModal(null));
      }
    },
  };

  return (
    <ModalLayout title="Создание нового сниппета">
      <SnippetForm onSubmit={callbacks.submit} />
    </ModalLayout>
  );
}

export default SnippetCreator;
