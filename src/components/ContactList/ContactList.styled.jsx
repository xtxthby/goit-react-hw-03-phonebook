import styled from '@emotion/styled';


export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 4px 8px;
  max-width: 100%;
  width: 300px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  color: #063a36;
  font-size: 14px;
`;

export const Btn = styled.button`
  padding-top: 4px 8px;
  border: none;
  outline: none;
  border-radius: 8px;
  color: #fff;
  background-color: #7ca78c;
`;