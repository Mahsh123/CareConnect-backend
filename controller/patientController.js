import Patient from "../model/patientModel.js";


const addPatient = async (req, res) => {
  const { patientId, name, mobileOrEmail, diagnosis, wardNo, date } = req.body;

  try {
    const newPatient = new Patient({ patientId, name, mobileOrEmail, diagnosis, wardNo, date });
    await newPatient.save();
    res.status(201).json({ message: 'Patient added successfully', patient: newPatient });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Patient ID must be unique' });
    } else {
      res.status(500).json({ message: 'Failed to add patient', error: error.message });
    }
  }
};

const getPatient = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve patients', error: error.message });
  }
};

export { addPatient, getPatient };
