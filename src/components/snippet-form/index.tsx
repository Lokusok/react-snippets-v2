import style from './style.module.scss';

import Field from '../field';

import Input from '../../ui/input';
import Button from '../../ui/button';

function SnippetForm() {
  const callbacks = {
    submit: (e: React.FormEvent) => {
      e.preventDefault();
    },
  };

  return (
    <form onClick={callbacks.submit} className={style.form}>
      <Field>
        <label htmlFor="descr">Название:</label>
        <Input placeholder="Введите название" />
      </Field>

      <Field>
        <label htmlFor="descr">Краткое описание:</label>
        <Input placeholder="Кратко, но ёмко" multiline />
      </Field>

      <div className={style.bottom}>
        <Button>Создать</Button>
      </div>
    </form>
  );
}

export default SnippetForm;
