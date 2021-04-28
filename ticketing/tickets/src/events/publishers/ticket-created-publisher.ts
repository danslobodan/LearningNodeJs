import { Publisher, Subjects, TicketCreatedEvent } from '@sdtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}
