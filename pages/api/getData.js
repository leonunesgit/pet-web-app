import { readDataFromDb } from "./dbFunctions";

export default async (req, res) => {
    if(req.method === 'GET') {
        try {
            const data = await readDataFromDb();
            res.status(200).json(data);
        } catch {
            res.status(500).json({ error: 'Error fetching the data from the DB' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}