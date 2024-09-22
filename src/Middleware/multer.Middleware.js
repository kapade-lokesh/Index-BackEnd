import multer from "multer";
import path from "path";

multer.diskStorage({
    destination: function (req, file, next) {
      next(null, '/uploads')
    },
    filename: (req, file, next) => {
        next(null, `${Date.now()}${path.extname(file.originalname)}`);
      },
  })
  
  export const upload = multer({ storage: storage })