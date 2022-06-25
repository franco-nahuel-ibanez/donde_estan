const handleHttpError = (req, message="Algo salio mal", code=403) => {
    res.status(code).json({ok: false, data: message})
}

module.exports = handleHttpError