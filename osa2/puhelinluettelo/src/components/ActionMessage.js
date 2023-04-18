const ActionMessage = ({ message, type}) => {
    if (message === null) {
        return null
    }
    return (
        <div className={type}>
            {message}
        </div>
    )
}

export default ActionMessage