import app from './src/app.js'
import db from './src/models/index.js'
const { sequelize } = db
const PORT = process.env.PORT || 3000

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`, `http://localhost:${PORT}`)
  })
})
