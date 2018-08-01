module.exports = (sequelize, DataTypes) => {
  const MemberFacebook = sequelize.define("memberFacebook", {
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

  MemberFacebook.associate = models => {
    MemberFacebook.belongsTo(models.Member, {
      foreignKey: "memberId",
      onDelete: "CASCADE"
    });
  };

  return MemberFacebook;
};
