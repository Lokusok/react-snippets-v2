import SnippetView from "../../components/snippet-view";
import SnippetTitle from "../../components/snippet-title";

import { useAppDispatch, useAppSelector } from "../../store";
import Modal from "../../containers/modal";

import DeleteBtn from "../../components/delete-btn";
import { useDeleteSnippetMutation } from "../../api/groups";

import { TGroup } from "../../models";
import { setActiveModal } from "../../store/slices/modals";

function Snippet() {
  const dispatch = useAppDispatch();
  const select = useAppSelector((state) => ({
    activeGroup: state.groups.active,
    activeSnippet: state.snippet.active,
  }));
  const [deleteSnippet] = useDeleteSnippetMutation();

  const callbacks = {
    delete: () => {
      if (!select.activeGroup || !select.activeSnippet) return;

      const newGroup: TGroup = {
        ...select.activeGroup,
        snippets: select.activeGroup.snippets.filter((snippet) => snippet !== select.activeSnippet),
      };
      deleteSnippet(newGroup);
      dispatch(setActiveModal(null));
    },
  };

  if (!select.activeSnippet) {
    return <></>;
  }

  return (
    <Modal title="Просмотр сниппета">
      <SnippetTitle>{select.activeSnippet.title}</SnippetTitle>
      <DeleteBtn onClick={callbacks.delete} />
      <SnippetView snippet={select.activeSnippet} />
    </Modal>
  );
}

export default Snippet;
