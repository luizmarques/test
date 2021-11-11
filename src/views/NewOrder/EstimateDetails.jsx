import styled from "styled-components";

export const EstimateDetails = () => {
  return (
    <BoxDeafault>
      <p className="m-0">Preencha os dados ao lado para ver o preço</p>
    </BoxDeafault>
  );
};

const BoxDeafault = styled.div`
  background-color: #efefef;
  border: 1px dashed #000000;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 100px;
  text-align: center;
  display: flex;
  justify-content: center;
`;
