import style from './style.module.scss';

import cn from 'classnames';

import Field from './field';
import SnippetsList from '../snippets-list';
import DeleteBtn from '../delete-btn';

import { TGroup, TSnippet } from '../../models';

type Props = {
  group: TGroup;
  onNewSnippet: (group: TGroup) => void;
  onSnippetClick: (group: TGroup, snippet: TSnippet) => void;
  onGroupDelete: (id: string) => void;
};

function Group(props: Props) {
  const callbacks = {
    deleteGroup: () => {
      props.onGroupDelete(props.group.id);
    },
    onNewSnippet: () => {
      props.onNewSnippet(props.group);
    },
    onSnippetClick: (snippet: TSnippet) => {
      props.onSnippetClick(props.group, snippet);
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
          onNewSnippet={callbacks.onNewSnippet}
          snippets={props.group.snippets}
          onSnippetClick={callbacks.onSnippetClick}
        />
      </div>

      <div className={style.delete}>
        <DeleteBtn onClick={callbacks.deleteGroup} />
      </div>
    </article>
  );
}

export default Group;
