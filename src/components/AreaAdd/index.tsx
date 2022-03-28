import { useState, KeyboardEvent } from 'react';

import * as S from './styles'

type Props = {
  onAdd: (taskName: string) => void
}

export default function AreaAdd({onAdd}: Props) {
  const [inputText, setInputText] = useState('');
  
  function handleKeyUp(e: KeyboardEvent) {
    if(e.code === 'Enter' && inputText !== '') {
      onAdd(inputText);
      setInputText('');
    }
  }

  return (
    <S.Container>
      <span className="image">+</span>
      <input
        type="text"
        placeholder="Add task"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </S.Container>
  );
}