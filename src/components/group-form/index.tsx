import style from './style.module.scss';

import Input from '../../ui/input';
import Button from '../../ui/button';

function GroupForm() {
  const callbacks = {
    submit: (e: React.FormEvent) => {
      e.preventDefault();
    },
  };

  return (
    <form onClick={callbacks.submit} className={style.form}>
      <div className={style.field}>
        <label htmlFor="descr">Название:</label>
        <Input placeholder="Введите название" />
      </div>

      <div className={style.field}>
        <label htmlFor="descr">Краткое описание:</label>
        <Input placeholder="Кратко, но ёмко" multiline />
      </div>

      <div className={style.bottom}>
        <Button>Создать</Button>
      </div>
    </form>
  );
}

export default GroupForm;
