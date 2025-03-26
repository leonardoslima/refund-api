import { Router } from "express"
import multer from "multer"

import uploadsConfig from "@/configs/upload"
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization"
import { UploadsController } from "@/controllers/uploads-controller"

const uploadsRoutes = Router()
const uploadsController = new UploadsController()

const upload = multer(uploadsConfig.MULTER)

uploadsRoutes.use(verifyUserAuthorization(["employee"]))
uploadsRoutes.post("/", upload.single("file"), uploadsController.create)

export { uploadsRoutes }