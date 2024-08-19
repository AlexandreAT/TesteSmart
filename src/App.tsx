import { MainPage } from './styles/GlobalStyles'
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <MainPage>
      <Sidebar />
      <MainContent />
    </MainPage>
  )
}

export default App
