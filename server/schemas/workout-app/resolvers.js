const { Workout, Exercise } = require("../../models/workout-app");

const workoutResolvers = {
  Query: {
    workouts: async (parent) => {
      try {
        const workouts = await Workout.find();
        return workouts;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutations: {
    addWorkout: async (parent, { workoutTime }) => {
      try {
        const newWorkout = await Workout.create({
          workoutTime,
        });
        return newWorkout;
      } catch (err) {
        console.log(err);
      }
    },
  },
};

module.exports = workoutResolvers;
