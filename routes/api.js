const router = require("express").Router();
const Workout = require("../models/workout.js");

// router.get("/api/workouts", (req, res) => {
//     Workout.find({})
//         .sort({ date: -1 })
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.put("/api/workouts/:id", function(req, res) {
    db.Workout.updateOne({ _id: req.params.id }, {$push: { exercises: req.body }} ).then(function(dbWorkout) {
      res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
  });

router.delete("/api/:id", (req, res) => {
    db.Workout.remove(
      {
        _id: mongojs.ObjectID(req.params.id)
      },
      (error, removed) => {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          console.log(removed);
          res.send(removed);
        }
      }
    );
  });



module.exports = router;