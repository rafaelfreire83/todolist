import styled from 'styled-components';

type Prop = {
  done: boolean
}

export const Container = styled.div<Prop>`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 20px;
  background-color: var(--color-border);
  border-radius: 8px;
  
  label { 
    margin-left: 10px;
    text-decoration: ${props => props.done ? 'line-through' : 'initial'};
  }
`;
