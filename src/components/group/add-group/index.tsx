import style from './style.module.scss';
import styleGroup from '../style.module.scss';

import AddBtn from "../../add-btn";

import cn from 'classnames';

function AddGroup() {
  return (
    <div className={cn(styleGroup.root, style.root)}>
      <AddBtn variant="long" />
    </div>
  );
}

export default AddGroup;
