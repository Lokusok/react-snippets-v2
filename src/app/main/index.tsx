import Header from "../../components/header";

import PageLayout from "../../components/page-layout";
import Snippets from "../../containers/snippets";

function Main() {
  return (
    <PageLayout head={<Header />}>
      <Snippets />
    </PageLayout>
  );
}

export default Main;
