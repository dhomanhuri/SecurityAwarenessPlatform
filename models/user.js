"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            profile_picture: DataTypes.STRING,
            role_id: DataTypes.INTEGER,
            verificationToken: DataTypes.TEXT,
            isVerified: DataTypes.BOOLEAN,
        },
        {}
    );

    User.associate = function (models) {
        User.belongsTo(models.Role, { foreignKey: "role_id", as: "roles", onDelete: "CASCADE" });
    };

    return User;
};
