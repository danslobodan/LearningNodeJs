import { Publisher, OrderCreatedEvent, Subjects } from '@sdtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated;
}
