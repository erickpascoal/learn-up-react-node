import { Router } from 'express';

import courseRouter from './course.routes';
import moduleRouter from './module.routes';
import lessonRouter from './lesson.routes';

const routes = Router();

routes.use('/courses', courseRouter);
routes.use('/modules', moduleRouter);
routes.use('/lessons', lessonRouter);

export default routes;