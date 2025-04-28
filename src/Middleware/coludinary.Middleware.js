import { cloudinary } from "../Config/cloudinary.config.js";

const uploadOnCloudinary=async(imagePath)=>{
    try {
        if(!imagePath) return null;

        const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
          console.log(cloudinaryResponse)
    } catch (error) {
        console.log(error)
    }
}

export {uploadOnCloudinary}