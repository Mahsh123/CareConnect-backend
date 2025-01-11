import { Schema, model } from 'mongoose';

const patientSchema = new Schema({
  patientId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobileOrEmail: {
    type: String,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  wardNo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
});

const Patient = model('Patient', patientSchema);
export default Patient;
