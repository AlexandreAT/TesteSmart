import styled from 'styled-components';

const ContentContainer = styled.div`
  padding: 45px 100px 20px 60px;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    padding: 35px 40px 20px 30px;
  }

  @media (max-width: 480px) {
    padding: 20px 20px 10px 10px;
  }
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const CharacterTitle = styled.h1`
  margin-left: 30px;
  font-size: 44px;
  font-weight: bold;
  color: #ffffff;
  text-align: left;
  line-height: 68px;

  @media (max-width: 768px) {
    margin-left: 0px;
    text-align: center;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

const Subtitle = styled.p<{ themecolor: string }>`
  color: ${({ themecolor }) => themecolor};
  font-size: 19px;
  margin-left: 30px;
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    margin-left: 0px;
    text-align: center;
    font-size: 16px;
  }
`;


const DataTableContainer = styled.div`
  width: 630px;

  @media (max-width: 1200px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CharacterImg = styled.img<{ themecolor: string }>`
  border: 2px solid ${({themecolor}) => themecolor};
  box-shadow: 0 0 15px 1px ${({themecolor}) => themecolor};
  border-radius: 50%;

  @media (max-width: 1200px) {
    width: 200px;
    height: 200px;
  }
  
  @media (max-width: 480px) {
    width: 140px;
    height: 140px;
  }
`;

const DataContent = styled.div`
  margin-top: 2.2rem;
  width: 100%;
  height: 400px;

  @media (max-width: 480px) {
    height: 300px;
  }
`;

const BarStyle = styled.div<{ themecolor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px;
  background-color: #3a3a3a;
  border: 2px solid ${({ themecolor }) => themecolor};
  box-shadow: 0 0 5px 1px ${({ themecolor }) => themecolor};
  border-radius: 5px;
  color: ${({ themecolor }) => themecolor};
`;

export { CharacterTitle, ContentContainer, ContentHeader, CharacterImg, CharacterInfo, Subtitle, DataTableContainer, DataContent, BarStyle };