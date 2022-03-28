import { useState } from 'react';
import AreaAdd from './components/AreaAdd';
import InputCheck from './components/InputCheck';

import { ItemType } from './types/ItemType';

import './App.css';
import * as S  from './App.styles';

export default function App() {
  const [list, setList] = useState<ItemType[]>([
    { id: 1, name: 'Fazer umas paradas 2', done: false },
    { id: 2, name: 'Fazer umas paradas 2', done: true }
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length+1,
      name: taskName,
      done: false
    });

    setList(newList);
  }
 
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done
      }
    }

    setList(newList);
  }

  return (
    <S.Container>
      <S.Header>
        <h1>Lista de Tarefas</h1>
      </S.Header>
      <S.Main>
        <AreaAdd onAdd={handleAddTask}/>

        {list.map((item, index) => (
          <InputCheck
            key={index}
            item={item}
            onChange={handleTaskChange}
          />
        ))}
      </S.Main>
    </S.Container>
  );
}