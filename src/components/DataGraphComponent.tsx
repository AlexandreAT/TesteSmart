import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Subtitle, DataContent, BarStyle } from '../styles/MainContent';
import useEpisodesByCharacter from '../hooks/useEpisodesByCharacter';

const DataGraphComponent = () => {
    const { theme } = useSelector((rootReducer: any) => rootReducer.characterReducer);
    const { appearancesByMonth } = useEpisodesByCharacter();
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    const abbreviateMonth = (month: string) => {
        const monthMap: { [key: string]: string } = {
            janeiro: 'Jan',
            fevereiro: 'Feb',
            março: 'Mar',
            abril: 'Apr',
            maio: 'May',
            junho: 'Jun',
            julho: 'Jul',
            agosto: 'Aug',
            setembro: 'Sep',
            outubro: 'Oct',
            novembro: 'Nov',
            dezembro: 'Dec',
        };

        return monthMap[month] || month;
    };

    const data = months.map((month) => ({
        month: abbreviateMonth(month),
        count: appearancesByMonth[month] || 0
    }));

    months.forEach((month) => {
        if (!data.find((item) => item.month === abbreviateMonth(month))) {
            data.push({ month: abbreviateMonth(month), count: 0 });
        }
    });

    const CustomLegend = ({ payload }: any) => {
        return (
            <div style={{ marginTop: '10px', marginBottom: '20px' }}>
                {payload.map((index: number) => (
                    <div key={`item-${index}`} style={{ textAlign: 'center', fontSize: '9px', color: '#FFFFFF' }}>
                        <span>Meses do ano</span>
                    </div>
                ))}
            </div>
        );
    };

    const CustomTooltip = ({ payload, label }: any) => {
        if (payload && payload.length) {
            return (
                <BarStyle themecolor={theme}>
                    <p>{label}</p>
                    <p>{payload[0].value}</p>
                </BarStyle>
            );
        }
    };

    return (
        <DataContent>
            <Subtitle themecolor={theme}>Aparições por mês</Subtitle>
            <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#2E2E2E', borderRadius: '5px', padding: '3% 3.6% 0.9% 1.8%' }}>
                <BarChart data={data}>
                    <CartesianGrid stroke="grey" strokeDasharray="2 2" />
                    <XAxis dataKey="month" tick={{ fill: '#FFFFFF', fontSize: '9px', dy: 5 }} />
                    <YAxis dataKey="count" min={0} tick={{ fill: '#FFFFFF', fontSize: '9px', dx: -15 }} label={{ value: 'Número de aparições', angle: -90, position: 'insideLeft', offset: 8, dy: 50, style: { fill: '#FFFFFF', fontSize: '9px' } }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend content={<CustomLegend />} />
                    <Bar dataKey="count" fill={theme} barSize="5.1%" radius={3} />
                </BarChart>
            </ResponsiveContainer>
        </DataContent>
    );
};

export default DataGraphComponent;
