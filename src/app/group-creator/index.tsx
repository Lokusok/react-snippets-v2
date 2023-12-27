import ModalLayout from "../../components/modal-layout";
import GroupForm from "../../components/group-form";

function GroupCreator() {
  return (
    <ModalLayout title="Создание группы">
      <GroupForm />
    </ModalLayout>
  );
}

export default GroupCreator;
