const { gql } = require("apollo-server-express");

const workoutTypeDefs = gql`
  type Workout {
    _id: ID
    workoutTime: String
    notes: String
    exercises: [Exercise]
  }
  type Exercise {
    exerciseName: String
    exerciseType: String
    exerciseMuscle: String
  }
  type Query {
    workouts: [Workout]
  }
  type Mutation {
    addWorkout: Workout
  }
`;
module.exports = workoutTypeDefs;
