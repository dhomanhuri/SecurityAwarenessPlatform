"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Group extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Group.hasMany(models.GroupData, { foreignKey: "group_id", as: "groups", onDelete: "CASCADE" });
        }
    }
    Group.init(
        {
            name: DataTypes.STRING,
            other_info: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "Group",
        }
    );
    return Group;
};
