import BannerIMG from './components/BannerIMG';
import CardMedicos from './components/CardMedicos';
import Rodape from './components/Rodape';
function App() {
  return (
    <div className="App">
      <CardMedicos nomeMedico="Will" descricao="Teste de Descrição e Recebimento de dados lalala sem criatividade pra texto e não vamos usar lorem huahauhu"  />
      <BannerIMG/>
      <Rodape/>

    </div>
  );
}

export default App;
