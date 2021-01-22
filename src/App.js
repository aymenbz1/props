import './App.css';
import Profil from "./profile/component/profil"
import Navigationbar from"./profile/component/navbar/navbar"

function App() {
 
  return (
    <div className="App">
      <Navigationbar/>
      <Profil name="Aymen" bio="GoMycode" profession="Developper"/>

      
    </div>
  );
}

export default App;
