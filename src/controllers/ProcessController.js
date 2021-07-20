import model from '../models'

const {Process} = model

export default {
    async getProcesses(req, res) {
        try {
            const processes = await Process.findAll({include: ['tasks']})
            res.status(200).send(processes)
        } catch (e) {
            console.log(e)
            return res.status(500).send({message: 'Could not fetch the processes'})
        }
    },

    async postProcess(req, res) {
        try {
            const {name, address, tasks} = req.body
            const results = await Process.create({
                name: name, address: address, tasks: tasks}, {
                include: ['tasks']
            })
            return res.json(results)
        } catch (e) {
            console.log(e)
            return res.status(500).send({message: 'Could not post the process and its tasks'})
        }
    },

    async deleteProcess(req, res) {
        try {
            const results = await Process.destroy({
                where: {id: req.params.id}
            })
            return res.json(results)
        } catch (e) {
            console.log(e)
            return res.status(500).send({message: 'Could not delete the process'})
        }
    }
}
