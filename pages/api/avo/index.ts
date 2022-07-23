import {NextApiRequest, NextApiResponse} from "next";
import DB from 'database/db'


const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
    const db = new DB();
    const allEntries = await db.getAll();
    const length = allEntries.length;

    res.status(200).json({data:allEntries,length});
}

export default allAvos;