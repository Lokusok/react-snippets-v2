import ModalLayout from "../../containers/modal-layout";
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
    <ModalLayout title="Создание группы">
      <GroupForm onSubmit={callbacks.submit} />
    </ModalLayout>
  );
}

export default GroupCreator;
