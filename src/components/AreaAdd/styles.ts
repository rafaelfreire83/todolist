import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  padding: 10px 15px;
  border: 1px solid var(--color-border);
  border-radius: 8px;

  .image {
    margin-right: 20px;
    font-size: 30px;
  }
  
  input { 
    flex: 1;
    font-size: 20px;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
  }

`;
