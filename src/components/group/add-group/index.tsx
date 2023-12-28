import style from './style.module.scss';
import styleGroup from '../style.module.scss';

import AddBtn from "../../add-btn";

import cn from 'classnames';

type Props = {
  onClick: () => void;
};

function AddGroup({ onClick }: Props) {
  return (
    <div>
      <div className={styleGroup.root}>
        <div className={cn(styleGroup.wrapper, style.root)}>
          <AddBtn onClick={onClick} variant="long" />
        </div>
      </div>
    </div>
  );
}

export default AddGroup;
