import { useEffect } from 'react';

import GroupsGrid from "../../components/groups-grid";

import { useAppDispatch, useAppSelector } from "../../store";

import { setActiveModal } from "../../store/slices/modals";
import { useDeleteGroupMutation, useLazyGetGroupsQuery } from "../../api/groups";

function Snippets() {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.search.query);

  const callbacks = {
    onNewGroup: () => dispatch(setActiveModal('group-create')),
    onNewSnippet: () => dispatch(setActiveModal('snippet-create')),
    onSnippetClick: () => dispatch(setActiveModal('snippet-view')),
    onGroupDelete: (id: string) => deleteGroup(id),
  };

  const [getGroups, { data: groups }] = useLazyGetGroupsQuery();
  const [deleteGroup] = useDeleteGroupMutation();

  useEffect(() => {
    getGroups(searchQuery);
  }, [getGroups, searchQuery]);

  if (!groups) {
    return <></>;
  }

  return (
    <GroupsGrid
      groups={groups}
      onNewGroup={callbacks.onNewGroup}
      onNewSnippet={callbacks.onNewSnippet}
      onSnippetClick={callbacks.onSnippetClick}
      onGroupDelete={callbacks.onGroupDelete}
    />
  );
}

export default Snippets;