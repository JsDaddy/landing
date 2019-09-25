import * as mongoose from 'mongoose';
import {messageSchema} from '../schema/massage.schema';

export class MessageModel {
    public async saveMessage(query: any = {}): Promise<any> {
        const messageModel: mongoose.Model<mongoose.Document> = mongoose.model('Messages', messageSchema);
        return await messageModel.create({... query});
    }
}
