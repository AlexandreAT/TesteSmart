import styled from 'styled-components';

const ContentContainer = styled.div`
  padding: 45px 100px 20px 60px;
  width: 100%;
  height: 100%;
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  position: relative;
`;

const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const CharacterTitle = styled.h1`
  margin-left: 30px;
  font-size: 44px;
  font-weight: bold;
  color: #ffffff;
  text-align: left;
  line-height: 68px;
`;

const CharacterData = styled.div`

`;

const Subtitle = styled.p<{ themeColor: string }>`
  color: ${({ themeColor }) => themeColor};
  font-size: 19px;
  margin-left: 30px;
  margin-bottom: 1rem;
  font-weight: 600;
`;


const DataTableContainer = styled.div`
  width: 630px;
`;

const CharacterImg = styled.img`

`;

export { CharacterTitle, ContentContainer, ContentHeader, CharacterImg, CharacterInfo, CharacterData, Subtitle, DataTableContainer };