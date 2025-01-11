import Nurse from "../model/nurseModel.js";

// Add a new nurse
const addNurse = async (req, res) => {
  const { nurseId, name, mobileOrEmail, department, wardNo } = req.body;

  try {
    const newNurse = new Nurse({ nurseId, name, mobileOrEmail, department, wardNo });
    await newNurse.save();
    res.status(201).json({ message: 'Nurse added successfully', nurse: newNurse });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Nurse ID must be unique' });
    } else {
      res.status(500).json({ message: 'Failed to add nurse', error: error.message });
    }
  }
};

// Get all nurses
const getNurses = async (req, res) => {
  try {
    const nurses = await Nurse.find();
    res.status(200).json(nurses);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve nurses', error: error.message });
  }
};

export { addNurse, getNurses };
