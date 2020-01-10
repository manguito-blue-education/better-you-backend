const bcrypt = require("bcryptjs");

const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.User.findByPk(id);
    },
    async habit(root, { id }, { models }) {
      return models.Habit.findByPk(id);
    },
    async allUserHabits(root, { userId }, { models }) {
      return models.Habit.findAll({
        where: {
          userId
        }
      });
    },
    async allFrequencies(root, {}, { models }) {
      return models.Frequency.findAll();
    }
  },
  Mutation: {
    async createUser(root, { name, email, password }, { models }) {
      return models.User.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10)
      });
    },
    async createFrequency(root, { name, daysValue }, { models }) {
      return models.Frequency.create({ name, daysValue });
    },
    async createHabit(
      root,
      {
        userId,
        name,
        reason,
        description,
        reminderHour,
        confirmationHour,
        frequencyId
      },
      { models }
    ) {
      return models.Habit.create({
        userId,
        name,
        reason,
        description,
        reminderHour,
        confirmationHour,
        frequencyId
      });
    }
  },
  User: {
    async habits(user) {
      return user.getHabits();
    }
  },
  Habit: {
    async user(habit) {
      return habit.getUser();
    },
    async frequency(habit) {
      return habit.getFrequency();
    }
  }
};

module.exports = resolvers;
