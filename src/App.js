import BannerIMG from './components/BannerIMG';
import CardMedicos from './components/CardMedicos';
import Especialidade from './components/Especialidades';
import Profissionais from './components/Profissionais';
import Rodape from './components/Rodape';
function App() {
  return (
    <div className="App">
      <Especialidade/>
      <Profissionais/>
      {/* <CardMedicos nomeMedico="Will" descricao="Teste de Descrição e Recebimento de dados lalala sem criatividade pra texto e não vamos usar lorem huahauhu"  /> */}
      <BannerIMG/>
      <Rodape/>

    </div>
  );
}

export default App;
