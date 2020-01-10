"use strict";
module.exports = (sequelize, DataTypes) => {
  const Frequency = sequelize.define(
    "Frequency",
    {
      name: DataTypes.STRING,
      daysValue: DataTypes.INTEGER
    },
    {}
  );
  Frequency.associate = function(models) {
    Frequency.hasOne(models.Habit);
  };
  return Frequency;
};
