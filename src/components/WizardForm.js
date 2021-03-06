import React, { useState, useEffect } from 'react'

const WizardForm = (props) => {
    console.log(props.wizard)
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [house, setHouse] = useState('');

    useEffect(() => {
        console.log('the props have changed')
        if (props.wizard.name) {
            setName(props.wizard.name);
            setOccupation(props.wizard.occupation);
            setHouse(props.wizard.house);
        }
    }, [props]);


    useEffect(() => {
        console.log('you changed name')
    }, [name]);


    return (
        <section>
            <h1>{props.title}</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                const wizardObject = {
                    name,
                    occupation,
                    house
                }
                props.onSubmit(wizardObject);
                setName('');
                setOccupation('');
                setHouse('');
            }}>
                <label>
                    Name:
                <input
                        value={name}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setName(e.target.value);
                        }}
                    />
                </label>
                <br />
                <label>
                    Occupation:
                    <input
                        value={occupation}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setOccupation(e.target.value)
                        }}

                    />
                </label>
                <br />
                <label>
                    House:
                    <input
                        value={house}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setHouse(e.target.value)
                        }}
                    />
                </label>
                <br />
                <input type="submit" />
            </form>
        </section>
    )
}

export default WizardForm
