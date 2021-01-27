import React from 'react'

const WizardList = (props) => {
    return (
        <ul>

            {
                props.wizards.map(w => <li key={w.name}
                    onClick={(e) => {
                        console.log(w.name)
                        props.chooseWizard(w);
                    }}
                >
                    {w.name}: {w.occupation} - {w.house}</li>)
            }
        </ul>
    )
}

export default WizardList
