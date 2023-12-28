import { useForm, SubmitHandler  } from 'react-hook-form';

import style from './style.module.scss';

import Field from '../field';

import Input from '../../ui/input';
import Button from '../../ui/button';

import { TGroupMutation } from '../../api/groups/types';

type TInputs = TGroupMutation;

type Props = {
  onSubmit: (data: TInputs) => void;
}

function GroupForm({ onSubmit }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<TInputs>();
  const handleForm: SubmitHandler<TInputs> = (data) => {
    onSubmit(data);
  };

  const options = {
    titleOpts: {
      maxLength: { value: 25, message: "Максимум - 25 символов" },
      minLength: { value: 3, message: 'Минимум - 3 символа' },
    },
    descrOpts: {
      maxLength: { value: 100, message: "Максимум - 100 символов" },
      minLength: { value: 5, message: 'Минимум - 5 символов' },
    },
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} className={style.form}>
      <Field>
        <label htmlFor="title">Название:</label>
        <Input {...register('title', options.titleOpts)} placeholder="Введите название" required />
        {errors.title && <span className={style.error}>{errors.title.message}</span>}
      </Field>

      <Field>
        <label htmlFor="description">Краткое описание:</label>
        <Input
          {...register('description', options.descrOpts)}
          placeholder="Кратко, но ёмко"
          multiline
        />
        {errors.description && <span className={style.error}>{errors.description.message}</span>}
      </Field>

      <div className={style.bottom}>
        <Button>Создать</Button>
      </div>
    </form>
  );
}

export default GroupForm;
