import { CreateUser } from "../Repository/user.Reppo.js";
import { ApiError } from "../utils/ApiError.js";

const Register = async (req, res) => {
  console.log("register called");
  console.log(req.file);
  try {
    const user = await CreateUser({ ...req.body, profile: req.file.path });
    res.status(200).json({
      message: "User successfully created",
      data: user,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({
        message: error.message,
        status: error.statusCode,
      });
    }

    return res.status(500).json({ message: "Internal server error" });
  }
};

export { Register };
