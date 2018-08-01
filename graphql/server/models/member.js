module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define("member", {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  Member.associate = models => {
    Member.hasOne(models.memberFacebook, {
      foreignKey: "memberId",
      as: "memberFacebook"
    });
  };

  return Member;
};
