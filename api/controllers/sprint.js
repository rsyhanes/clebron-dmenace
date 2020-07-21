const { Sprint } = require('./../models/models')

exports.get = async (req, res) => {
    try {
        const sprints = await Sprint.findAll();
        res.json(sprints)
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.post = async (req, res) => {
    try {
        await Sprint.create({
            sprintNumber: req.body.sprintNumber,
            startDate: req.body.startDate,
            endDate: req.body.endDate
        })
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.delete = async (req, res) => {
    try {
        await Sprint.destroy({
            where: {
                id: req.param.id
            }
        })
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}