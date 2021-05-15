import model from '../models';

const {Account} = model;

export default {
    async getAccounts(req, res) {
        try {
            const accounts = await Account.findAll()
            res.status(200).send(accounts)
        } catch (error) {
            console.log(error)
            return res.status(500).send({message: 'Could not fetch the accounts'})
        }
    },

    async postAccount(req, res) {
        const {address, privateKey} = req.body
        try {
            const results = await Account.create({address, privateKey})
            return res.json(results)
        } catch (e) {
            console.log(e)
            return res.status(500).send({message: 'Could not post the account'})
        }
    },

    async deleteAccount(req, res) {
        try {
            const results = await Account.destroy({
                where: {id: req.params.id}
            })
            return res.json(results)
        } catch (e) {
            console.log(e)
            return res.status(500).send({message: 'Could not delete the account'})
        }
    }
}