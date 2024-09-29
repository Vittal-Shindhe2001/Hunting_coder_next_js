// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'
import path from 'path';
export default async function handler(req, res) {
  const dirPath = path.join(process.cwd(), 'blogdata');
  if (!fs.existsSync(dirPath)) {
    await fs.promises.mkdir(dirPath)
  }
  let data = await fs.promises.readdir(dirPath)
  let myfile
  const allblogs = []
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile((`${dirPath}/` + item), 'utf-8')
    allblogs.push(JSON.parse(myfile))

  }
  res.status(200).json(allblogs);

}
