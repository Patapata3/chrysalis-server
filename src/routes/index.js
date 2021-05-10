import ConnectionController from "../controllers/ConnectionController";


export default (app) => {
    app.get('/web3Connections', ConnectionController.getConnections);

// Create a catch-all route for testing the installation.
    app.all('*', (req, res) => res.status(200).send({
        message: 'Hello World!',
    }));
};