import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { gql, useLazyQuery } from '@apollo/client';

const GetCharacter = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      type
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

const useFetchInitialCharacter = () => {
    const { characterId, characterData } = useSelector((rootReducer: any) => rootReducer.characterReducer);
    const dispatch = useDispatch();
    const [getCharacterById] = useLazyQuery(GetCharacter, {
        onCompleted: (data) => {
            dispatch({
                type: 'fetch/initialCharacter',
                payload: {
                    characterData: data.character
                },
            });
        },
    });

    useEffect(() => {
        if (characterId && !characterData) {
            getCharacterById({ variables: { id: characterId } });  
        }
    }, [characterId, characterData, getCharacterById]);
};

export default useFetchInitialCharacter;
