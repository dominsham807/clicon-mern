const notFound = (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route does not exist"
    })
}

export default notFound