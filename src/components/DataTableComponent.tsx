import { useSelector } from 'react-redux';
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from '@mui/material/styles';
import { themeOverrides } from '../styles/TableTheme';
import { Subtitle, DataTableContainer } from '../styles/MainContent';

const DataTableComponent = () => {
    const { currentCharacter, characterData, theme } = useSelector((rootReducer: any) => rootReducer.characterReducer);

    let genderColumn = { name: "Gender", options: { filter: false } };
    let genderValue = characterData.gender;

    if (currentCharacter === "Squid Costume Morty") {
        genderColumn = { name: "Type", options: { filter: false } };
        genderValue = characterData.type;
    }

    const columns = [
        { name: "Status", options: { filter: false } },
        { name: "Species", options: { filter: false } },
        genderColumn,
        { name: "Origin", options: { filter: false } },
    ];

    let originName = '';
    if (characterData) {
        originName = characterData.origin.name;
    }
    const trimmedOriginName = originName.split(' ')[0];

    const data = characterData ? [
        [characterData.status, characterData.species, genderValue, trimmedOriginName],
    ] : [];

    const options = {
        filter: false,
        elevation: 0,
        selectableRows: undefined,
        viewColumns: false,
        download: false,
        print: false,
        pagination: false,
        search: false,
        sort: false,
        responsive: undefined,
    };

    return (
        characterData && (
            <div>
                <Subtitle themecolor={theme}>Dados do personagem</Subtitle>
                <DataTableContainer>
                    <ThemeProvider theme={themeOverrides}>
                        <MUIDataTable
                            title={""}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </ThemeProvider>
                </DataTableContainer>
            </div>
        )
    );
}

export default DataTableComponent;
