import { AiOutlineDelete } from "react-icons/ai";

import style from './style.module.scss';

import cn from 'classnames';

import Field from './field';
import SnippetsList from '../snippets-list';
import DeleteGroup from './delete-group';

import { TGroup, TSnippet } from '../../models';

type Props = {
  group: TGroup;
  onNewSnippet: () => void;
  onSnippetClick: () => void;
  onGroupDelete: (id: string) => void;
};

function Group(props: Props) {
  const callbacks = {
    deleteGroup: () => {
      props.onGroupDelete(props.group.id);
    },
  };

  return (
    <article className={cn(style.root, style.group)}>
      <div className={cn(style.inner, style.wrapper)}>
        <div className={style.stack}>
          <Field className={style.field} variant="small">
            <h3 className={style.title}>{props.group.title}</h3>
          </Field>
          <Field className={style.field} variant="medium">
            <p className={style.descr}>
              {props.group.description}
            </p>
          </Field>
        </div>

        <SnippetsList
          onNewSnippet={props.onNewSnippet}
          snippets={props.group.snippets}
          onSnippetClick={props.onSnippetClick}
        />
      </div>

      <DeleteGroup onClick={callbacks.deleteGroup} />
    </article>
  );
}

export default Group;
