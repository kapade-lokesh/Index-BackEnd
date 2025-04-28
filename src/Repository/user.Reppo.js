import { uploadOnCloudinary } from "../Middleware/coludinary.Middleware.js";
import { User } from "../Models/user.Model.js";
import { BadReqError } from "../utils/BadReqError.js";
import fs from "fs/promises";

const CreateUser = async (params) => {
  try {
    const NewUser = await User.create(params);
    const { profile } = params;
    const cloudinaryResponse = await uploadOnCloudinary(profile);
    console.log(cloudinaryResponse);
    fs.unlink(profile);
    return NewUser;
  } catch (error) {
    if (error.name === "ValidationError") {
      const errorList = Object.keys(error.errors).map((prop) => {
        return error.errors[prop].message;
      });
      console.log("this is error list", errorList);
      throw new BadReqError(errorList);
    }
    console.log(error);
  }
};

export { CreateUser };
