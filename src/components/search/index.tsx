import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import style from './style.module.scss';

import { IoSearchOutline } from 'react-icons/io5';

import { TGroupsQuery } from '../../api/groups/types';

type Props = {
  className?: string;
  onSubmit: (obj: TGroupsQuery) => void;
};

function Search(props: Props) {
  const { register, handleSubmit, watch, getValues } = useForm<TGroupsQuery>();
  const queryValue = watch('query');
  const handleForm: SubmitHandler<TGroupsQuery> = (data) => {
    props.onSubmit(data);
  };

  useEffect(() => {
    if (typeof queryValue !== 'string') return;

    if (!queryValue.length) {
      props.onSubmit(getValues());
    }
  }, [queryValue]);

  return (
    <div className={props.className}>
      <form onSubmit={handleSubmit(handleForm)} className={style.form}>
        <input
          {...register('query')}
          className={style.input}
          type="text"
          placeholder="Поиск по любому вхождению"
        />
        <button className={style.button}>
          <IoSearchOutline size={25} />
        </button>
      </form>
    </div>
  );
}

export default Search;
