import style from './style.module.scss';

import { AiOutlineDelete } from 'react-icons/ai';

type Props = {
  onClick: () => void;
};

function DeleteGroup({ onClick }: Props) {
  return (
    <div className={style.delete}>
      <button onClick={onClick} title="Удалить?" className={style.button}>
        <AiOutlineDelete size={25} color={'#fff'} />
      </button>
    </div>
  )
}

export default DeleteGroup;
