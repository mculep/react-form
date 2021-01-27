import WizardForm from "./components/WizardForm";
import WizardList from "./components/WizardList";
import { useState } from "react";


function App() {

  const [wizards, setWizards] = useState([]);
  const [wizardToEdit, setWizardToEdit] = useState({});

  const chooseWizard = (wizard) => {
    console.log(`App sees ${wizard.name}`);
    setWizardToEdit(wizard);
  };

  const onSubmit = (wizard) => {
    console.log('===========');
    console.log('New Wizard');
    console.log(wizard);

    const newWizardArray = [
      ...wizards,
      wizard
    ];

    setWizards(newWizardArray);
    // setWizards([
    //   ...wizards,
    //   wizard
    // ]);
  };

  return (
    <div>
      <WizardForm
        title="Add New Wizard"
        onSubmit={onSubmit}
        wizard={wizardToEdit}
      />

      <WizardList
        wizards={wizards}
        chooseWizard={chooseWizard}
      />

    </div>
  );
}

export default App;