import style from './style.module.scss';

import Group from "../group";
import AddGroup from '../group/add-group';

function GroupsGrid() {
  return (
    <div className={style.grid}>
      <Group />
      <Group />
      <Group />
      <AddGroup />
    </div>
  );
}

export default GroupsGrid;
