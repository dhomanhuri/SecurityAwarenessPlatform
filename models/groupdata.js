"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class GroupData extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            GroupData.belongsTo(models.Group, {
                foreignKey: "group_id",
                as: "groups",
                onDelete: "CASCADE",
            });
        }
    }
    GroupData.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            other_info: DataTypes.TEXT,
            group_id: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "GroupData",
        }
    );
    return GroupData;
};
