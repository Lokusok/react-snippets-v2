import style from './style.module.scss';

import cn from 'classnames';

import Field from './field';
import SnippetsList from '../snippets-list';

type Props = {
  title: string;
  descr: string;
};

function Group() {
  return (
    <article className={cn(style.root, style.group)}>
      <div className={style.inner}>
        <div className={style.stack}>
          <Field className={style.field} variant="small">
            <h3 className={style.title}>Новая группа</h3>
          </Field>
          <Field className={style.field} variant="medium">
            <p className={style.descr}>
              Куски кода, связанные с авторизацией пользователей в системе
            </p>
          </Field>
        </div>

        <SnippetsList />
      </div>
    </article>
  );
}

export default Group;
