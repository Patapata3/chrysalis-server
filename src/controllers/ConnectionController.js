import { Op } from 'sequelize';
import model from '../models';

const {Web3Connection} = model;

export default {
    async getConnections(req, res) {
        try {
            const connections = await Web3Connection.findAll()
            res.status(200).send(connections)
        } catch (error) {
            console.log(error)
            return res.status(500).send({message: 'Could not fetch the connections'})
        }
    }
}