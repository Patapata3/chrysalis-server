import {Model} from "sequelize";

export default (sequelize, DataTypes) => {
  class Abi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Abi.init({
    key: DataTypes.STRING,
    abi: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Abi',
  });
  return Abi;
};