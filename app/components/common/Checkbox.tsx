import { ChangeEventHandler, memo } from 'react';

type Props = {
  id: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  intermediate?: boolean;
  className?: string;
  rtl?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function Checkbox(props: Props) {
  return <div>Checkbox</div>;

}


export default memo(Checkbox);