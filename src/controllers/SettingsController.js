import model from '../models';

const {Setting} = model

export default {
    async getSettings(req, res) {
        try {
            const settings = await Setting.findAll({include: ['web3Connection', 'account']})
            res.status(200).send(settings)
        } catch (error) {
            console.log(error)
            return res.status(500).send({message: 'Could not fetch the settings'})
        }
    },

    async postSettings(req, res) {
        const {web3ConnectionId, accountId} = req.body
        try {
            const results = await Setting.create({web3ConnectionId, accountId})
            return res.json(results)
        } catch (e) {
            console.log(e)
            return res.status(500).send({message: 'Could not post the setting'})
        }
    },

    async deleteSettings(req, res) {
        try {
            const results = await Setting.destroy({
                where: {id: req.params.id}
            })
            return res.json(results)
        } catch (e) {
            console.log(e)
            return res.status(500).send({message: 'Could not delete the setting'})
        }
    },

    async updateSettings(req, res) {
        try {
            const results = await Setting.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            return res.json(results)
        } catch (e) {
            console.log(e)
            return res.status(500).send({message: 'Could not update the setting'})
        }
    }
}