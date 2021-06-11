import model from '../models';
import {where} from "sequelize";

const {Web3Connection} = model;
const {Setting} = model;

export default {
    async getConnections(req, res) {
        try {
            const connections = await Web3Connection.findAll()
            res.status(200).send(connections)
        } catch (error) {
            console.log(error)
            return res.status(500).send({message: 'Could not fetch the connections'})
        }
    },

    async postConnection(req, res) {
        const {address} = req.body
        try {
            const results = await Web3Connection.create({address})
            return res.json(results)
        } catch (e) {
            console.log(e)
            return res.status(500).send({message: 'Could not post the connection'})
        }
    },

    async deleteConnection(req, res) {
        try {
             const results = await Web3Connection.destroy({
                where: {id: req.params.id}
            })
            return res.json(results)
        } catch (e) {
            console.log(e)
            return res.status(500).send({message: 'Could not delete the connection'})
        }
    }
}