import {Model} from "sequelize";

export default (sequelize, DataTypes) => {
  class Process extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Process.hasMany(models.Task, {foreignKey: 'processId', as: 'tasks'})
    }
  }
  Process.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Process',
  });
  return Process;
};