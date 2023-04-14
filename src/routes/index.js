import { Router } from "express"
import { method, importData } from "./../controllers/controller.js"
import multer from "multer"
import fs from 'fs-extra'
import excelToJson from "convert-excel-to-json"

const router = Router()

var upload = multer({dest: "uploads/"})

router.post('/', upload.single('file') ,importData)

router.get('/create', (req, res) => res.render('create', {title: 'Create'}))

router.get('/update', (req, res) => res.render('update', {title: 'Update'}))

router.get('/delete', (req, res) => res.render('delete', {title: 'Delete'}))

export default router;