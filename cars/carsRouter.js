const express = require("express");
const carsDb = require("../data/dbConfig.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await carsDb("cars");
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve cars" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const car = await carsDb("cars").where({ id });
    res.status(200).json(car);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to retrieve car with this specified id" });
  }
});

router.post("/", async (req, res) => {
  try {
    const carData = req.body;
    const [id] = await carsDb("cars").insert(carData);
    const newCarEntry = await carsDb("cars").where({ id });

    res.status(201).json(newCarEntry);
  } catch (err) {
    res.status(500).json({ message: "Failed to store data" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await carsDb("cars")
      .where({ id })
      .del();
    res
      .status(200)
      .json({ message: "Successfully deleted the record", deleted });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete this car" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const carData = req.body;
    const updated = await carsDb("cars")
      .update(carData)
      .where({ id });
    res.status(201).json({ message: "updated successfully", updated });
  } catch (err) {
    res.status(500).json({ message: "Failed to update the record" });
  }
});

module.exports = router;
