import { useState } from 'react';
import Biodata from './component/Biodata';
import Component1 from './component/Component1';
import Component2 from './component/Component2';
import Component4 from './component/Component4';

import NewBiodata from './component/NewBiodata';
import ClassComponent from './component/perbandingan/ClassComponent';
import FunctionCompeent from './component/perbandingan/FunctionComponent';


function App() {

  const [mount, setMount] = useState(false)
  return (
    <div>

      <Component1 />
      <Component1 />
      <Component1 />

      <hr></hr>
      <Component2 />
      <Component2 />

      <Biodata nama="fikri" semester="3" hobi={<Hobi />} />
      <Biodata nama="isnaini" semester="5" />


      <NewBiodata name="Fuad" />

      <hr></hr>
      <Component4 />

      <hr></hr>

      <FunctionCompeent />
      <hr />
      <ClassComponent />
      <hr />
      <b>unmount</b>

      <br />
      {mount && <FunctionCompeent />}

      <button onClick={() => setMount(p => !p)}>
        {mount ? "UnMount" : "Mount"}
      </button>
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
