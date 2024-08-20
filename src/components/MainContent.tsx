import { useSelector } from 'react-redux';
import { CharacterTitle, ContentContainer, ContentHeader, CharacterImg, CharacterInfo } from '../styles/MainContent';
import { Loading } from '../styles/Loading';
import useFetchInitialCharacter from '../hooks/useFetchInitialCharacter';
import LoadingComponent from './LoadingComponent';
import DataTableComponent from './DataTableComponent';
import DataGraphComponent from './DataGraphComponent';


const MainContent = () => {

    useFetchInitialCharacter();

    const { currentCharacter, characterData, theme } = useSelector((rootReducer: any) => rootReducer.characterReducer);

    if(!characterData){
        return <Loading><LoadingComponent /></Loading>
    }

    return (
        <ContentContainer>
            <ContentHeader>
                <CharacterInfo>
                    <CharacterTitle>{currentCharacter}</CharacterTitle>
                    <DataTableComponent/>
                </CharacterInfo>
                {characterData && (
                    <CharacterImg src={characterData.image} alt={characterData.name} themecolor={theme} />
                )}
            </ContentHeader>
            <DataGraphComponent/>
        </ContentContainer>
    )
}

export default MainContent