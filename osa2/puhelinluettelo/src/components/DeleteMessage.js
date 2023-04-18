const DeleteMessage = ({ message }) => {
    if (message === null) {
        return null
    }
    return (
        <div className="deletion">
            {message}
        </div>
    )
}

export default DeleteMessage