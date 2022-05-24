const express = require('express');
const router = express.Router();
router.get('/', async (req, res) => {
  try {
    //     const { name, icon, devicesCount = 0 } = req.body;
    //     const roomExist = await roomModel.exists({ name: name.toLowerCase() });
    //     if (roomExist) {
    //       return res.status(409).json({ message: 'Room name already in use.' });
    //     }
    //     const newRoom = await roomModel.create({
    //       name: name.toLowerCase(),
    //       icon,
    //       devicesCount,
    //     });
    //     res.status(201).json({
    //       room: newRoom,
    //     });
  } catch (error) {
    return res.status(500).json({
      message: 'Error occurred. Please Try again.',
      error: error,
    });
  }
});
module.exports = router;
