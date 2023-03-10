import {Request, Response} from 'express';
import {deleteCourseById} from '../src/stock-db';


export function deleteCourse(req: Request, res: Response) {

    const index = req.params["id"];

    if (index === -1) return res.status(404).json({})

    const courses = deleteCourseById(index);

    res.status(200).json(courses);

}
