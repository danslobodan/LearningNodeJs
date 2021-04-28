import express, { Request, Response } from 'express';
import { body } from 'express-validator';

import { requireAuth, validateRequest } from '@sdtickets/common';

const router = express.Router();

router.post(
    '/api/orders',
    requireAuth,
    [body('ticketId').not().isEmpty().withMessage('TicketId must be provided')],
    validateRequest,
    async (req: Request, res: Response) => {
        const {} = req.body;

        res.send({});
    }
);

export { router as createOrderRouter };
