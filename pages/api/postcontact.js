import * as fs from 'fs'
import path from 'path';
export default async function handler(req, res) {
    const dirPath = path.join(process.cwd(), 'contactdata');
    if (req.method === 'POST') {
        // Process a POST request
        try {
         
            if (!fs.existsSync(dirPath)) {
                await fs.promises.mkdir(dirPath, { recursive: true });
            }
            let data = await fs.promises.readdir(dirPath);

            await fs.promises.writeFile(`${dirPath}/${data.length + 1}.json`, JSON.stringify(req.body))
            res.status(200).json(req.body)

        } catch (error) {
            res.status(400).json(error)
            console.log(error);
            
        }
    } else {
        try {
            let data = await fs.promises.readdir(dirPath)
            let result = []
            for (let index = 0; index < data.length; index++) {
                const contact = await fs.promises.readFile(`${dirPath}/${data[index]}`, { encoding: 'utf8' })
                result.push(JSON.parse(contact))
            }
            res.status(200).json(result)
        } catch (error) {
            console.log(error);

        }
    }
}