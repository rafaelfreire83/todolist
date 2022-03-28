import { ItemType } from '../../types/ItemType';

import * as S from './styles'

type Props ={
  item: ItemType;
  onChange: (id:number, done:boolean) => void;
}

export default function InputCheck({item, onChange}: Props) {

  return (
    <S.Container done={item.done}> 
      <input
        type="checkbox"
        checked={item.done}
        onChange={e => onChange(item.id, e.target.checked)}
      />
      <label>{item.name}</label>
    </S.Container>
  );
}