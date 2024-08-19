import { SidebarContainer } from '../styles/Sidebar';
import SidebarButton from './SidebarButton';

const Sidebar = () => {

    const characters = [
        { name: 'Rick Sanchez', theme: '#85F217', id: 1 },
        { name: 'Summer Smith', theme: '#FF00EE', id: 3 },
        { name: 'Morty Smith', theme: '#DFFF00', id: 2 },
        { name: 'Squid Costume Morty', theme: '#17EAF2', id: 706 },
        { name: 'Mr. Poopybutthole', theme: '#17EAF2', id: 244 },
        { name: 'Metaphor for Capitalism', theme: '#17EAF2', id: 806 }
    ];

    return (
        <SidebarContainer>
            {characters.map((character) => (
                <SidebarButton key={character.name} character={character} />
            ))}
        </SidebarContainer>
    );
};

export default Sidebar;