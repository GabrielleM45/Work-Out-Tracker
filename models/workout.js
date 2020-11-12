const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema(
    {
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: String,
            trim: true,
            required: "Enter exercise TYPE"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter exercise NAME"
        },
        weight:
        {
            type: Number
        },
        reps:
        {
            type: Number
        },
        sets:
        {
            type: Number
        },
        duration:
        {
            type:
        }

    distance: {
        type: Number
    },
    duration:
    {
        type: Number,
        required: "Enter exercise duration (min)"
    }
}]
},
{
    toJSON: {
     virtuals: true
    }
  }
);


workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;