import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@xps179720/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
