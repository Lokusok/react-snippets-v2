import style from './style.module.scss';

import { TSnippet } from '../../models';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  snippet: TSnippet;
};

function SnippetView({ snippet }: Props) {
  return (
    <div>
      <SyntaxHighlighter language='javascript' style={dark}>
        {snippet.code}
      </SyntaxHighlighter>
    </div>
  );
}

export default SnippetView;