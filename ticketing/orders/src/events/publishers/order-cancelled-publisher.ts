import { Subjects, Publisher, OrderCancelledEvent } from '@sdtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}
