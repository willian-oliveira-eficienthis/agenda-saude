import BannerIMG from './components/BannerIMG';
import CardMedicos from './components/CardMedicos';
import Especialidade from './components/Especialidades';
import FormFiltro from './components/FormFiltro';
import Profissionais from './components/Profissionais';
import Rodape from './components/Rodape';
function App() {
  return (
    <div className="App">
      <FormFiltro/>
      <Especialidade/>
      <Profissionais/>
      {/* <CardMedicos nomeMedico="Will" descricao="Teste de Descrição e Recebimento de dados lalala sem criatividade pra texto e não vamos usar lorem huahauhu"  /> */}
      <BannerIMG/>
      <Rodape/>

    </div>
  );
}

export default App;
