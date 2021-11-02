const upload = require("../config/multerConfig");
const { uploadImage } = require("../controllers/image");
const { validateUserIdParams } = require("../middleware/validateRouteParams");
const router = require("express").Router();
const protect = require("../middleware/auth");

router.post(
  "/upload/:userId",
  protect,
  validateUserIdParams,
  upload.imageUpload.any(),
  uploadImage
);

module.exports = router;
