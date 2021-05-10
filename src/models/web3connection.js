import {Model} from "sequelize";

export default (sequelize, DataTypes) => {
  class Web3Connection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Web3Connection.init({
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Web3Connection',
  });
  return Web3Connection;
};