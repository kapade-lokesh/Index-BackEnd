import { User } from "../Models/user.Model.js";
import { BadReqError } from "../utils/BadReqError.js";

const CreateUser = async (params) => {
    try {
        console.log("hitting repo layer ");
        const NewUser = await User.create(params);
        console.log("user", NewUser);
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
