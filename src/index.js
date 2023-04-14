import express from 'express'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'
import routes from './routes/index.js'
import morgan from 'morgan'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(morgan("dev"))
app.use(routes)
app.use(express.static(join(__dirname, 'public')))

app.listen(3000)
console.log("Server is listenning on port ", 3000);
