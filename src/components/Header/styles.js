import styled from "styled-components";
export const Container = styled.header `
  grid-area: header; /* quando rolar minha tela, quero que fique fixo, então trabalho com  a estratégia de grid area */

  height: 105px;
  width: 100%;

  border-bottom-width: 1px; /* borda abaixo */
  border-bottom-style: solid; /* linha sólida abaixo */
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between; /* na horizontal, cada um fica em uma extremidade*/

  padding: 0 80px;

  background: orange;
`;