const ExcelJS = require('exceljs')

exports.main = async ({ file_content }) => {
  const inputBuffer = Buffer.from(file_content, 'base64')
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(inputBuffer)
  return { "csv": (await workbook.csv.writeBuffer()).toString() }
}
