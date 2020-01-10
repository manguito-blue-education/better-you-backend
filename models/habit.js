"use strict";
module.exports = (sequelize, DataTypes) => {
  const Habit = sequelize.define(
    "Habit",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      reason: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      reminderHour: {
        type: DataTypes.STRING,
        allowNull: false
      },
      confirmationHour: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Habit.associate = function(models) {
    Habit.belongsTo(models.User, { foreignKey: "userId" });
    Habit.hasOne(models.Frequency, { foreignKey: "frequencyId" });
  };
  return Habit;
};
