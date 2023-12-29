import Modal from "../../containers/modal";
import GroupForm from "../../components/group-form";

import { useAppDispatch } from "../../store";
import { setActiveModal } from "../../store/slices/modals";
import { useAddGroupMutation } from "../../api/groups";

import { TGroupMutation } from "../../api/groups/types";

function GroupCreator() {
  const dispatch = useAppDispatch();
  const [addGroup] = useAddGroupMutation();

  const callbacks = {
    submit: ({title, description}: TGroupMutation) => {
     addGroup({title, description, snippets: []});
     dispatch(setActiveModal(null));
    },
  };

  return (
    <Modal title="Создание группы">
      <GroupForm onSubmit={callbacks.submit} />
    </Modal>
  );
}

export default GroupCreator;
