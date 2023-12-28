import { TGroupsQuery } from "../../api/groups/types";
import Header from "../../components/header";

import PageLayout from "../../components/page-layout";
import Snippets from "../../containers/snippets";

import { setQuery } from "../../store/slices/search";
import { useAppDispatch } from "../../store";

function Main() {
  const dispatch = useAppDispatch();

  const callbacks = {
    onSearchSubmit: (data: TGroupsQuery) => {
      dispatch(setQuery(data.query));
    },
  };

  return (
    <PageLayout head={<Header onSearchSubmit={callbacks.onSearchSubmit} />}>
      <Snippets />
    </PageLayout>
  );
}

export default Main;
