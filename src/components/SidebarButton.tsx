import { CustomButton } from '../styles/Sidebar';
import useCharacter from '../hooks/useCharacter';

interface Props {
    character: Character;
}

interface Character{
    name: string;
    theme: string;
    id: number;
}

const SidebarButton = ({ character }:Props) => {

    const { handleCharacter, currentCharacter, theme } = useCharacter();

    let buttonColor = '#3a3a3a';
    let textColor = '#FFFFFF';
    let fontWeight = 300;

    if (character.name === currentCharacter) {
        buttonColor = theme;
        textColor = '#121212';
        fontWeight = 700;
        if(character.name === 'Summer Smith'){
            textColor = '#fdfdfd'
        }
    }

    return (
        <CustomButton variant="contained" onClick={() => handleCharacter(character)} buttoncolor={buttonColor} textcolor={textColor} fontWeight={fontWeight} disableRipple >
            {character.name}
        </CustomButton>
    )
}

export default SidebarButton