import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gql, useLazyQuery } from '@apollo/client';

interface Character {
  name: string;
  theme: string;
  id: number;
}

const GetCharacter = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      episode {
        id
      }
      origin {
        name
      }
      location {
        name
      }
      image
    }
  }
`;

const useCharacter = () => {
  const { currentCharacter, theme } = useSelector((rootReducer: any) => rootReducer.characterReducer);
  const dispatch = useDispatch();
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(currentCharacter);

  const [getCharacterById] = useLazyQuery(GetCharacter, {
    onCompleted: (data) => {
      dispatch({
        type: 'change/character',
        payload: {
          currentCharacter: selectedCharacter.name,
          theme: selectedCharacter.theme,
          characterId: selectedCharacter.id,
          characterData: data.character
        },
      });
    },
  });

  useEffect(() => {
    if (currentCharacter && selectedCharacter.id) {
      getCharacterById({ variables: { id: selectedCharacter.id } });
    }
  }, [selectedCharacter.id, getCharacterById]);

  const handleCharacter = (character: Character) => {
    if (currentCharacter !== character.name) {
      setSelectedCharacter(character);
      getCharacterById({ variables: { id: character.id } });
    }
  };

  return {
    handleCharacter,
    currentCharacter,
    theme,
  };
};

export default useCharacter;
