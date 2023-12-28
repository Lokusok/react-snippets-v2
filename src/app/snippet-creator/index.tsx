import ModalLayout from "../../containers/modal-layout";

import SnippetForm from "../../components/snippet-form";

function SnippetCreator() {
  return (
    <ModalLayout title="Создание нового сниппета">
      <SnippetForm />
    </ModalLayout>
  );
}

export default SnippetCreator;
