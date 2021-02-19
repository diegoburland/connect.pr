const { Router } = require("express");
const CarController = require("../controllers/car.controller");

const router = Router();
const carController = new CarController();
router.get("/", carController.all);
router.post("/", carController.store);

module.exports = router;
