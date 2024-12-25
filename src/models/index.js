import { readdirSync } from 'fs'
import path from 'path'
import { Sequelize, DataTypes } from 'sequelize'
import config from '../../config/config.json' assert { type: 'json' }
import { fileURLToPath } from 'url'
import associate from './associations.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const basename = path.basename(__filename)
const db = {}
const env = process.env.NODE_ENV || 'development'
const dbConfig = config[env]

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    ...dbConfig,
    define: {
      ...dbConfig.model,
    },
  }
)

const importModels = async () => {
  const files = readdirSync(__dirname).filter(
    (file) => file !== basename && file.slice(-3) === '.js'
  )
  try {
    await Promise.all(
      files.map(async (file) => {
        if (file === 'associations.js') return
        const modelPath = path.join(__dirname, file)
        const { default: model } = await import(`file://${modelPath}`)
        const sequelizeModel = model(sequelize, DataTypes)
        db[sequelizeModel.name] = sequelizeModel
      })
    )
  } catch (error) {
    console.error(error)
  }
  associate(db)

  db.sequelize = sequelize
}

await importModels()

export default db
