import { Router } from 'express'
import { createBooks, deleteBook, updateBook, viewBooks } from '../controllers/bookController'
import { authenticate } from '../middleware/authenticate'
import { authorize } from '../middleware/authorize'
import { Role } from '../models/UserModel'


const router = Router()


router.post("/book",authenticate,authorize([Role.CREATOR]),createBooks)

router.get("/books",authenticate,authorize([Role.VIEWER,Role.VIEW_ALL]),viewBooks)

router.delete("/book",authenticate,authorize([Role.CREATOR]),deleteBook)

router.put("/book",authenticate, authorize([Role.CREATOR]), updateBook)

export {router as BookRouter}

