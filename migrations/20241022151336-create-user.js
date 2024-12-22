"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            username: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            role_id: {
                type: Sequelize.INTEGER,
                defaultValue: 3,
                references: {
                    model: "Roles",
                    key: "id",
                },
            },
            password: {
                type: Sequelize.STRING,
            },
            profile_picture: {
                type: Sequelize.STRING,
            },
            isVerified: {
                type: Sequelize.BOOLEAN,
            },
            verificationToken: {
                type: Sequelize.TEXT,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Users");
    },
};
