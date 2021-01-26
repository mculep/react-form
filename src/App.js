
import './App.css';
import House from './components/House';
import Occupation from './components/Occupation';
import WizardForm from './components/WizardForm';
import { useState } from 'react'


function App() {
  const [wizards, setWizards] = useState([])
  return (
    <div>

      <WizardForm title="Add and new Wizard"
        onSubmit={(wizard) => {
          console.log("==================");
          console.log('here is the new wizard')
          console.log(wizard)

          const newWizardArray = [
            ...wizards,
            wizard
          ];
          setWizards(newWizardArray)
          // setWizards([
          //   ...wizards,
          //   wizards
          // ])
        }} />
      <ul>

        {
          wizards.map(w => <li key={w.name}>{w.name}: {w.occupation} - {w.house}</li>)
        }
      </ul>
      <Occupation />
      <House />
    </div>
  );
}

export default App;
