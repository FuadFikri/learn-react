import Biodata from './component/Biodata';
import Component1 from './component/Component1';
import Component2 from './component/Component2';
import NewBiodata from './component/NewBiodata';

function App() {
  return (
    <div>

  <Component1/>
  <Component1/>
  <Component1/>

<hr></hr>
   <Component2/>
   <Component2/>

<Biodata nama="fikri" semester="3" hobi={<Hobi/>} />
<Biodata nama="isnaini" semester="5"/>


<NewBiodata name="Fuad" />
    </div>
   
  );
}


// component hobi
const Hobi = () => {
  return (
    <ul>
      <li>Jogging</li>
      <li>Membaca</li>
    </ul>
  )
}


export default App;
