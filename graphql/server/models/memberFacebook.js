module.exports = (sequelize, DataTypes) => {
  const memberFacebook = sequelize.define("memberFacebook", {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    accessToken: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    signedRequest: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  memberFacebook.associate = models => {
    memberFacebook.belongsTo(models.member, {
      foreignKey: "memberId",
      onDelete: "CASCADE"
    });
  };

  return memberFacebook;
};
