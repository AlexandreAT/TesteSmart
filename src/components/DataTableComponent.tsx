import { useSelector } from 'react-redux';
import MUIDataTable from "mui-datatables";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CharacterData, Subtitle, DataTableContainer } from '../styles/MainContent';

const DataTableComponent = () => {
    const { characterData, theme } = useSelector((rootReducer: any) => rootReducer.characterReducer);

    // const themeOverrides = createTheme({
    //     components: {
    //         MuiTableHead: {
    //             styleOverrides: {
    //                 root: {
    //                     '& th': {
    //                         backgroundColor: '#4C4C4C',
    //                         color: '#ffffff',
    //                         fontWeight: '700',
    //                         borderBottomColor: '#4C4C4C',
    //                         paddingTop: '0px',
    //                         paddingBottom: '0px',
    //                     },
    //                 },
    //             },
    //         },
    //         MuiTableBody: {
    //             styleOverrides: {
    //                 root: {
    //                     '& td': {
    //                         backgroundColor: '#2E2E2E',
    //                         color: '#ffffff',
    //                         borderBottom: 'none',
    //                         textAlign: 'center',
    //                         padding: '8px',
    //                     },
    //                 },
    //             },
    //         },
    //     },
    // });

    const columns = [
        { name: "Status", options: { filter: false } },
        { name: "Species", options: { filter: false } },
        { name: "Gender", options: { filter: false } },
        { name: "Origin", options: { filter: false } },
    ];

    const data = characterData ? [
        [characterData.status, characterData.species, characterData.gender, characterData.origin.name],
    ] : [];

    const options = {
        filter: false,
        elevation: 0,
        selectableRows: "none",
        viewColumns: false,
        download: false,
        print: false,
        pagination: false,
        search: false,
        responsive: "standard",
    };

    return (
        characterData && (
            <CharacterData>
                <Subtitle themeColor={theme}>Dados do personagem</Subtitle>
                <DataTableContainer>
                    {/* <ThemeProvider theme={themeOverrides}> */}
                        <MUIDataTable
                            title={""}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    {/* </ThemeProvider> */}
                </DataTableContainer>
            </CharacterData>
        )
    );
}

export default DataTableComponent;
