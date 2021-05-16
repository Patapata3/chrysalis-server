import ConnectionController from "../controllers/ConnectionController";
import AccountController from "../controllers/AccountController";
import AbiController from "../controllers/AbiController";
import SettingsController from "../controllers/SettingsController";
import ProcessController from "../controllers/ProcessController";
const cors = require('cors')


export default (app) => {
    app.use(cors())

    // Connections
    app.get('/web3Connections', ConnectionController.getConnections);
    app.post('/web3Connections', ConnectionController.postConnection);
    app.delete('/web3Connections/:id', ConnectionController.deleteConnection);

    // Accounts
    app.get('/accounts', AccountController.getAccounts);
    app.post('/accounts', AccountController.postAccount);
    app.delete('/accounts/:id', AccountController.deleteAccount);

    //Abis
    app.get('/abis', AbiController.getAbis);
    app.post('/abis', AbiController.postAbi);
    app.delete('/abis/:id', AbiController.deleteAbi);

    // Settings
    app.get('/settings', SettingsController.getSettings);
    app.post('/settings', SettingsController.postSettings);
    app.delete('/settings/:id', SettingsController.deleteSettings);
    app.patch('/settings/:id', SettingsController.updateSettings);

    // Processes
    app.get('/processes', ProcessController.getProcesses);
    app.post('/processes', ProcessController.postProcess);
    app.delete('/processes/:id', ProcessController.deleteProcess);
};