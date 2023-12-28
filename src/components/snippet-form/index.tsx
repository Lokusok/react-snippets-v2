import { useForm, SubmitHandler } from 'react-hook-form';

import style from './style.module.scss';

import Field from '../field';

import Input from '../../ui/input';
import Button from '../../ui/button';

type TInputs = {
  title: string;
};

type Props = {
  onSubmit: (data: TInputs) => void;
};

function SnippetForm({ onSubmit }: Props) {
  const { register, handleSubmit } = useForm<TInputs>();
  const handleForm: SubmitHandler<TInputs> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className={style.form}>
      <Field>
        <label htmlFor="descr">Название:</label>
        <Input {...register('title')} placeholder="Введите название" />
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
