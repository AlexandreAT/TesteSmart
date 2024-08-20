import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { gql, useLazyQuery } from '@apollo/client';

const GetEpisodes = gql`
  query GetEpisodes($ids: [ID!]!) {
    episodesByIds(ids: $ids) {
      id
      air_date
    }
  }
`;

const useEpisodeAppearancesByMonth = () => {
    const { characterData } = useSelector((rootReducer: any) => rootReducer.characterReducer);
    const episodeIds = characterData.episode.map((ep: { id: string }) => ep.id);
    const [getEpisodes, { data }] = useLazyQuery(GetEpisodes);
    const [appearancesByMonth, setAppearancesByMonth] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        if (episodeIds.length > 0) {
            getEpisodes({ variables: { ids: episodeIds } });
        }
    }, [characterData]);

    useEffect(() => {
        if (data && data.episodesByIds) {
            const appearances = data.episodesByIds.reduce((count: { [key: string]: number }, episode: { air_date: string }) => {
                const month = new Date(episode.air_date).toLocaleString('default', { month: 'long' });

                if (!count[month]) {
                    count[month] = 0;
                }

                count[month] += 1;

                return count;
            }, {});

            setAppearancesByMonth(appearances);
        }
    }, [data]);

    return { appearancesByMonth };
};

export default useEpisodeAppearancesByMonth;
