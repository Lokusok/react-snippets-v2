import { useForm, SubmitHandler } from 'react-hook-form';

import style from './style.module.scss';

import Field from '../field';

import Input from '../../ui/input';
import Button from '../../ui/button';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useEffect, useState } from 'react';

type TInputs = {
  title: string;
  code: FileList;
};

type Props = {
  onSubmit: (data: { title: string, code: string }) => void;
};

function SnippetForm({ onSubmit }: Props) {
  const { register, watch, getValues, formState: { errors } } = useForm<TInputs>();
  const code = watch('code');
  const [codeText, setCodeText] = useState('');

  const options = {
    titleOpts: {
      maxLength: { value: 25, message: "Максимум - 25 символов" },
      minLength: { value: 3, message: 'Минимум - 3 символа' },
    },
  };

  const callbacks = {
    submit: (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ title: getValues('title'), code: codeText });
    },
  };

  useEffect(() => {
    if (!code) return;

    const codeFile = code[0];

    if (!codeFile) return;

    const fileReader = new FileReader();

    fileReader.readAsText(codeFile);
    fileReader.addEventListener('load', () => {
      setCodeText(fileReader.result as string);
    });
  }, [code]);

  return (
    <form onSubmit={callbacks.submit} className={style.form}>
      <Field>
        <label htmlFor="descr">Название:</label>
        <Input {...register('title', options.titleOpts)} placeholder="Введите название" required />
        {errors.title && <span className={style.error}>{errors.title.message}</span>}
      </Field>

      <Field>
        <label htmlFor="code">Код сниппета</label>
        <input
          {...register('code')}
          accept=".txt,.js,.py"
          type="file"
          required
        />
        <SyntaxHighlighter language='javascript' style={dark}>
          {codeText}
        </SyntaxHighlighter>
      </Field>

      <div className={style.bottom}>
        <Button>Создать</Button>
      </div>
    </form>
  );
}

export default SnippetForm;
