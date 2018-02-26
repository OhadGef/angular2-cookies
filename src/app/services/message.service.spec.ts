import {MessageService} from './message.service';

describe('messageService', () => {
  const service: MessageService = new MessageService();
  it('should create message', () =>
    expect(service.messages).not.toBe(undefined)
  );
});


