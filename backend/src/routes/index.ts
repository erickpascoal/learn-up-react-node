import { Router } from 'express';

import courseRouter from '../modules/lesson/infra/http/routes/course.routes';
import moduleRouter from '../modules/lesson/infra/http/routes/module.routes';
import lessonRouter from '../modules/lesson/infra/http/routes/lesson.routes';
import awsRouter from '../shared/infra/http/routes/aws.routes';

const routes = Router();

routes.use('/courses', courseRouter);
routes.use('/modules', moduleRouter);
routes.use('/lessons', lessonRouter); 
routes.use('/aws', awsRouter);

export default routes;