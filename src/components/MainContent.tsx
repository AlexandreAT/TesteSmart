import { useSelector } from 'react-redux';
import { CharacterTitle, ContentContainer, ContentHeader, CharacterImg, CharacterInfo } from '../styles/MainContent';
import { Loading } from '../styles/Loading';
import useFetchInitialCharacter from '../hooks/useFetchInitialCharacter';
import LoadingComponent from './LoadingComponent';
import DataTableComponent from './DataTableComponent';


const MainContent = () => {

    useFetchInitialCharacter();

    const { currentCharacter, characterData } = useSelector((rootReducer: any) => rootReducer.characterReducer);

    return (
        <ContentContainer>
            <ContentHeader>
                <CharacterInfo>
                    <CharacterTitle>{currentCharacter}</CharacterTitle>
                    {!characterData && (
                        <Loading><LoadingComponent /></Loading>
                    )}
                    <DataTableComponent/>
                </CharacterInfo>
                {characterData && (
                    <CharacterImg src={characterData.image} alt={characterData.name} />
                )}
            </ContentHeader>
        </ContentContainer>
    )
}

export default MainContent