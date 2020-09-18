const express = require("express");
const router = express.Router();
const Institute = require("../models/institute.model");
//
router.post("/addinstitute", (req, res, next) => {
    Institute.create({
    name: req.body.name,
    image: req.body.image,
    cost: req.body.cost,
    location: req.body.location,
    description: req.body.description,
    phone: req.body.phone,
    location:req.body.location,
    latitude: req.body.latitude,
    longitude:req.body.longitude
  })
    .then(institute => {
      res.json({ status: "Institute added!" });
    })
    .catch(next);
});

router.get("/getinstitute", (req, res, next) => {
    Institute.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/deleteinstitute/:id", function(req, res, next) {
    Institute.findByIdAndDelete(req.params.id).then(response => {
    console.log("Institute deleted of" + req.params.id);
  });
});

router.get("/:id", function(req, res) {
    Institute.findById(req.params.id)
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.put("/updateinstitute/:id", (req, res, next) => {
    Institute.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      category: req.body.category
    },
    { new: true }
  );
});

module.exports = router;