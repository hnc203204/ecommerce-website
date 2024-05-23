const router = require("express").Router();
const {
  postProduct,
  patchProduct,
  deleteProduct,
  getProduct,
  getProducts,
  getCategoryProducts,
  postReview,
  getRecommendedProducts,
} = require("../controllers/product");
const checkAuth = require("../middlewares/checkAuth");
const getCurrentId = require("../middlewares/getUser");

router.post("/", checkAuth(), postProduct);
router.patch("/:id", checkAuth(), patchProduct);
router.delete("/:id", checkAuth(), deleteProduct);
router.get("/recommended", checkAuth("user"), getRecommendedProducts);
router.get("/:id", getProduct);
router.get("/",getProducts);
router.get("/category/:id", getCategoryProducts);
router.post("/:id/review", checkAuth("user"), postReview);

module.exports = router;
