const initialState = {
    currentCharacter: 'Rick Sanchez',
    theme: '#85F217',
    characterId: 1,
    characterData: null,
}

const characterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'change/character':
            return {
                ...state,
                currentCharacter: action.payload.currentCharacter,
                theme: action.payload.theme,
                characterId: action.payload.characterId,
                characterData: action.payload.characterData, 
            };
        case 'fetch/initialCharacter':
            return {
                ...state,
                characterData: action.payload.characterData,
            };
        default:
            return state;
    }
}

export default characterReducer;