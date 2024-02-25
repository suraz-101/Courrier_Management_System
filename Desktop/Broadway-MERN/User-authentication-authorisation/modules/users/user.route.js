const userRouter = require("express").Router();
const userController = require("./user.controller");
const {
  userValidation,
  loginValidation,
  forgetPasswordValidation,
  updateUserValidation,
  updateRoleValidation,
  changePasswordValidation,
} = require("./user.validation");

const { checkRole } = require("../../utils/checkRole");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/profile");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const uploadFile = multer({ storage: storage });

userRouter.post(
  "/registerUser",
  uploadFile.single("profilePic"),
  userValidation,
  async (req, res, next) => {
    try {
      if (req.file) {
        req.body.profilePic = req.file.path;
      }

      const result = await userController.registerUser(req.body);
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  }
);

userRouter.post("/login", loginValidation, async (req, res, next) => {
  try {
    const result = await userController.loginUser(req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

// for forget password
userRouter.post("/otpGenerate", async (req, res, next) => {
  try {
    const result = await userController.generateOtp(req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

userRouter.post(
  "/verifyOtp",
  forgetPasswordValidation,
  async (req, res, next) => {
    try {
      const result = await userController.verifyOtpChangePassword(req.body);
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  }
);

userRouter.get("/", checkRole(["admin"]), async (req, res, next) => {
  try {
    const { name, page, limit } = req.query;
    const search = { name };
    const result = await userController.userList(search, page, limit);
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
});

userRouter.delete("/:id", checkRole(["user"]), async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await userController.deleteUser(id);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

userRouter.put(
  "/updateUsersDetails",
  checkRole(["user"]),
  updateUserValidation,
  async (req, res, next) => {
    try {
      const { id, ...rest } = req.body;
      const result = await userController.updateUsersDetails(id, rest);
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  }
);

userRouter.get(
  "/getSingleUser",
  checkRole(["admin", "user"]),
  async (req, res, next) => {
    try {
      const { email } = req.body;
      const result = await userController.getSingleUser(email);
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  }
);

userRouter.post(
  "/resetPassword",
  checkRole(["admin"]),
  async (req, res, next) => {
    try {
      const { id, ...rest } = req.body;
      const result = await userController.resetPassword(id, rest);
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  }
);

userRouter.post(
  "/changePassword",
  checkRole(["user", "admin"]),
  changePasswordValidation,
  async (req, res, next) => {
    try {
      const { email, ...rest } = req.body;
      console.log(email, rest);
      const result = await userController.changePassword(email, rest);
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  }
);

userRouter.post(
  "/updateRole",
  updateRoleValidation,
  checkRole(["admin"]),
  async (req, res, next) => {
    try {
      const { id, ...rest } = req.body;
      const result = await userController.updateUserRole(id, rest);
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = userRouter;
