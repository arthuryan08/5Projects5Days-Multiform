import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  border: 2px solid #16195C;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 2px solid #496459;
  }
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #191959;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`

export const Info = styled.div`
  flex: 1;
`

export const Title = styled.div``

export const Description = styled.div``