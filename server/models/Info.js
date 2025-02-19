import { model, Schema } from "mongoose";

const reservationScheme = new Schema({
  name: String,
gender: String,
age: Number,
height: Number,
weight: Number,
  // seat: String
})

const Reservation = model("reservation", reservationScheme);
export default Reservation;

