import style from './style.module.scss';

import { AiOutlineDelete } from 'react-icons/ai';

type Props = {
  onClick: () => void;
};

function DeleteBtn({ onClick }: Props) {
  return (
    <button onClick={onClick} title="Удалить?" className={style.button}>
      <AiOutlineDelete size={25} color={'#fff'} />
    </button>
  )
}

export default DeleteBtn;
