import { useEffect } from 'react';

import GroupsGrid from "../../components/groups-grid";

import { useAppDispatch, useAppSelector } from "../../store";
import { setActiveModal } from "../../store/slices/modals";
import { setActiveGroup } from '../../store/slices/groups';

import { useDeleteGroupMutation, useLazyGetGroupsQuery } from "../../api/groups";

import { TGroup } from '../../models';

function Snippets() {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.search.query);

  const callbacks = {
    onNewGroup: () => dispatch(setActiveModal('group-create')),
    onNewSnippet: (group: TGroup) => {
      dispatch(setActiveModal('snippet-create'));
      dispatch(setActiveGroup(group));
    },
    onSnippetClick: () => dispatch(setActiveModal('snippet-view')),
    onGroupDelete: (id: string) => deleteGroup(id),
  };

  const [getGroups, { data: groups }] = useLazyGetGroupsQuery();
  const [deleteGroup] = useDeleteGroupMutation();

  useEffect(() => {
    getGroups({ query: searchQuery });
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