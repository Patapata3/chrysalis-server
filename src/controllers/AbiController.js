import model from '../models';

const {Abi} = model;

export default {
    async getAbis(req, res) {
        try {
            const abis = await Abi.findAll()
            res.status(200).send(abis)
        } catch (error) {
            console.log(error)
            return res.status(500).send({message: 'Could not fetch the abis'})
        }
    },

    async postAbi(req, res) {
        const {key, abi} = req.body
        try {
            const results = await Abi.create({key, abi})
            return res.json(results)
        } catch (e) {
            console.log(e)
            return res.status(500).send({message: 'Could not post the abi'})
        }
    },

    async deleteAbi(req, res) {
        try {
            const results = await Abi.destroy({
                where: {id: req.params.id}
            })
            return res.json(results)
        } catch (e) {
            console.log(e)
            return res.status(500).send({message: 'Could not delete the abi'})
        }
    }
}