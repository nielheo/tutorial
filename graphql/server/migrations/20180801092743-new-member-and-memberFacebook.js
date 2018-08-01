"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable("Members", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
      queryInterface.createTable("MemberFacebooks", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        accessToken: {
          type: Sequelize.STRING,
          allowNull: false
        },
        userId: {
          type: Sequelize.STRING,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        signedRequest: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        memberId: {
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: "Members",
            key: "id",
            as: "memberId"
          }
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable("MemberFacebooks"),
      queryInterface.dropTable("Members");
  }
};
