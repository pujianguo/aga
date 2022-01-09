const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')
const ora = require('ora')

const DIR = './src/i18n'

const getData = (obj, lang) => {
  if (obj === null) return null
  if (typeof obj !== 'object') return obj
  if (Object.prototype.hasOwnProperty.call(obj, lang)) {
    return obj[lang]
  }
  const newObj = {}
  Object.keys(obj).forEach(key => {
    newObj[key] = getData(obj[key], lang)
  })
  return newObj
}

const langList = ['zh', 'en']

const main = async () => {
  try {
    spinner.start('start create language files')

    const files = fs.readdirSync(path.join(DIR, 'modules'))
    files.forEach(file => {
      const jsFileName = file.split('.')[0] + '.js'
      // get yaml content
      const yamlContent = fs.readFileSync(path.join(DIR, 'modules', file), 'utf8')
      //  yaml to json
      const json = yaml.load(yamlContent)
      const pathDir = path.join(DIR, 'lang')
      if (!fs.existsSync(pathDir)) {
        fs.mkdirSync(pathDir)
      }
      langList.forEach(lang => {
        const str = getData(json, lang)
        const langDir = path.join(DIR, 'lang', lang)
        if (!fs.existsSync(langDir)) {
          fs.mkdirSync(langDir)
        }
        // save js file
        fs.writeFileSync(path.join(langDir, jsFileName), `export default ${JSON.stringify(str)}`)
      })
      spinner.info(`creating ${jsFileName}`)
    })
    spinner.succeed('create language files success')
  } catch (e) {
    spinner.fail('error:' + e)
  }
}

const spinner = ora({})
main()
