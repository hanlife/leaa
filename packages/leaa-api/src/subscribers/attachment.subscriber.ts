import { EventSubscriber, EntitySubscriberInterface, InsertEvent, RemoveEvent } from 'typeorm';

import { Attachment, User } from '@leaa/common/src/entrys';
import { buildUrl } from '@leaa/api/src/modules/attachment/attachment.property';

@EventSubscriber()
export class AttachmentSubscriber implements EntitySubscriberInterface<Attachment> {
  listenTo(): typeof Attachment {
    return Attachment;
  }

  async afterInsert(event: InsertEvent<Attachment>): Promise<void> {
    const { entity } = event;

    if (entity && entity.module_name === 'user' && entity.type_name === 'avatar' && entity.module_id) {
      event.manager.getRepository(User).update(entity.module_id, { avatar_url: buildUrl(entity) });
    }
  }

  async afterRemove(event: RemoveEvent<Attachment>): Promise<void> {
    const { entity } = event;

    if (entity && entity.module_name === 'user' && entity.type_name === 'avatar' && entity.module_id) {
      event.manager.getRepository(User).update(entity.module_id, { avatar_url: null });
    }
  }
}
