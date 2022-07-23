import {NextApiRequest, NextApiResponse} from "next";
import DB from 'database/db'
import { request } from "http";

const avo = async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id;
    const db = new DB();
    const entrie = await db.getById(id as string);
    res.status(200).json({data:entrie});
}

export default avo;