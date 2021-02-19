const { request, response } = require("express");
const CarModel = require("../models/car.model");

class CarController {
  all = async (req = request, res = response) => {
    try {
      const cars = await CarModel.find();

      //   const carsString = JSON.stringify(cars);
      //   localStorage.removeItem("cars");
      //   localStorage.setItem("cars", carsString);
      //   const carsLocal = JSON.parse(localStorage.getItem("cars"));

      res
        .json({
          cars,
        })
        .status(200);
    } catch (error) {
      console.log(error);
      throw new Error(`Ups! error ${error}`);
    }
  };

  store(req = request, res = response) {
    let { customerId, year, make, model, color, plate, vin } = req.body;

    if (!customerId) {
      return res.json({
        success: false,
        message: "el id del cliente es requerido",
      });
    }

    if (!year) {
      return res.json({
        success: false,
        message: "el año es requerido",
      });
    }

    if (!make) {
      return res.json({
        success: false,
        message: "la marca es requerida",
      });
    }

    if (!model) {
      return res.json({
        success: false,
        message: "el modelo es requerido",
      });
    }

    if (!plate) {
      return res.json({
        success: false,
        message: "la placa es requerida",
      });
    }

    if (!vin) {
      return res.json({
        success: false,
        message: "el vin es requerido",
      });
    }

    if (!color) {
      return res.json({
        success: false,
        message: "el color es requerido",
      });
    }

    make = make.toLowerCase();
    model = model.toLowerCase();
    color = color.toLowerCase();
    plate = plate.toLowerCase();

    CarModel.find(
      {
        plate: plate,
      },
      (err, previousUsers) => {
        if (err) {
          console.log(err);
          return res.json({
            success: false,
            message: "Server Error",
          });
        } else if (previousUsers.length > 0) {
          return res.json({
            success: false,
            message: "Esta placa ya se encuentra registrada",
          });
        }
        const newCar = new CarModel();
        newCar.customerId = customerId;
        newCar.year = year;
        newCar.make = make;
        newCar.model = model;
        newCar.color = color;
        newCar.plate = plate;
        newCar.vin = vin;

        newCar.save((error) => {
          if (error) {
            console.log(error);
            return res.json({
              success: false,
              message: "Server Error",
            });
          }

          return res.json({
            success: true,
            message: "Carro Registrado!",
          });
        });
      }
    );
  }
}

module.exports = CarController;
