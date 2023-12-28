import style from './style.module.scss';

import Group from "../group";
import AddGroup from '../group/add-group';

import { TGroup } from '../../models';

type Props = {
  groups: TGroup[];
  onNewGroup: () => void;
  onNewSnippet: (group: TGroup) => void;
  onSnippetClick: () => void;
  onGroupDelete: (id: string) => void;
};

function GroupsGrid(props: Props) {
  return (
    <div className={style.grid}>
      {props.groups.map((group) => (
        <Group
          key={group.id}
          group={group}
          onNewSnippet={props.onNewSnippet}
          onSnippetClick={props.onSnippetClick}
          onGroupDelete={props.onGroupDelete}
        />
      ))}
      <AddGroup onClick={props.onNewGroup} />
    </div>
  );
}

export default GroupsGrid;
