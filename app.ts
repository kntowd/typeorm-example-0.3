import { AppDataSource } from "./database/data-source"
import { Photo } from "./database/entity/Photo"

const express = require('express')
const app = express()
const port = 3000


app.get('/', async(req, res) => {
  const articleRepository = await AppDataSource.getRepository(Photo);
  const photos = await articleRepository.find({});
  console.log(photos);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
