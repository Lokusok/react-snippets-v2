import AddBtn from '../../add-btn';

type Props = {
  onClick: () => void;
};

function AddSnippet({ onClick }: Props) {
  return (
    <AddBtn onClick={onClick} />
  );
}

export default AddSnippet;
