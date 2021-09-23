import BannerIMG from './components/BannerIMG';
import BannerPrincipal from './components/BannerPrincipal';
import Especialidade from './components/Especialidades';
import FormFiltro from './components/FormFiltro';
import Profissionais from './components/Profissionais';
import Rodape from './components/Rodape';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <NavBar />
        <BannerPrincipal />
        <FormFiltro />
        <Especialidade />
        <Profissionais />
        {/* <CardMedicos nomeMedico="Will" descricao="Teste de Descrição e Recebimento de dados lalala sem criatividade pra texto e não vamos usar lorem huahauhu"  /> */}
        <BannerIMG />
        <Rodape />
      </ThemeProvider>
    </div>
  );
}

export default App;
