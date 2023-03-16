

function Option(props) {
    const { id, value, name, handleSelection, selection, isSubmitted, styles } = props


    const selected = selection === value

    if (selected) {
        if (!isSubmitted)
            styles.background = '#D6DBF5'
        styles.outline = 'none'
    }


    return (
        <>
            <input type="radio"
                id={id}
                name={name}
                value={value}
                onChange={handleSelection}
                checked={selected}
                disabled={isSubmitted}
                required
            />
            <label htmlFor={id} className="option" style={styles}  dangerouslySetInnerHTML={{__html:value}}></label>
        </>
    )

}

export default Option