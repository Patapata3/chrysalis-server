import {Model} from "sequelize";

export default (sequelize, DataTypes) => {
  class Setting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Setting.belongsTo(models.Web3Connection, {foreignKey: 'web3ConnectionId', as: 'web3Connection'})
      Setting.belongsTo(models.Account, {foreignKey: 'accountId', as: 'account'})
    }
  }
  Setting.init({
    web3ConnectionId: DataTypes.INTEGER,
    accountId: DataTypes.INTEGER,
    isMetamask: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Setting',
  });
  return Setting;
};