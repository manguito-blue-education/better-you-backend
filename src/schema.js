const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    habits: [Habit!]!
  }

  type Habit {
    id: Int!
    name: String!
    reason: String!
    description: String!
    reminderHour: String!
    confirmationHour: String!
    user: User!
    frequency: Frequency!
  }

  type Frequency {
    id: Int!
    name: String!
    daysValue: Int!
  }

  type Query {
    user(id: Int!): User
    habit(id: Int!): Habit
    allUserHabits(userId: Int!): [Habit!]!
    allFrequencies: [Frequency!]!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    createHabit(
      userId: Int!
      name: String!
      reason: String!
      description: String!
      reminderHour: String!
      confirmationHour: String!
      frequencyId: Int!
    ): Habit!
    createFrequency(name: String!, daysValue: Int!): Frequency!
  }
`;

module.exports = typeDefs;
