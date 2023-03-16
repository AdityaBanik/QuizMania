import { v4 as uuidv4 } from 'uuid';

import Option from "./Option"

import { useState, useEffect } from 'react';


function Question(props) {

    const { question, correctAnswer, options, questionNumber, isSubmitted, updateCount } = props
    const [selection, setSelection] = useState('')
    let correct = false

    function handleSelection(event) {
        setSelection(event.target.value)
    }

    const choices = options.map(option => {

        const id = uuidv4();
        let styles = {}

        if (isSubmitted) {
            styles.cursor = 'auto'
            styles.color = 'grey'

            if (option === correctAnswer) {

                styles.background = '#94D7A2'
                styles.outline = 'none'

                if (option === selection) {
                    correct = true
                }
            }

            else {

                if (option === selection)

                    styles.background = '#F8BCBC'

            }

        }

        return (<Option

            name={questionNumber}
            value={option}
            id={id}
            key={id}
            handleSelection={handleSelection}
            selection={selection}
            isSubmitted={isSubmitted}
            styles={styles}

        />)

    })

    useEffect(() => {
        if (correct) {
            updateCount();
        }
    }, [correct]);

    return (

        <section className='question'>
            <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
            <section className="choices">
                {choices}
            </section>
        </section>

    )

}



export default Question