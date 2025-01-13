import Admin from "../model/adminModel.js";

const verify_Admin = async (req, res) => {
  const { uniqueId, password } = req.body;

  try {
    // Find admin by unique ID
    const admin = await Admin.findOne({ uniqueId });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Compare passwords
    const isPasswordValid = await password == admin.password;
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', adminId: admin._id });
    } 
    catch (error) {
    res.status(500).json({ message: 'Failed to login', error: error.message });
  }
}

export { verify_Admin};