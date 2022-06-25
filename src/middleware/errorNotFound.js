const error404 = (req, res, next) => {
    res.status(400).send("Page not found")
}

module.exports = error404
