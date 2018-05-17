import * as mongoose from 'mongoose';

export class EventsModel {
  public async getContent(query: any = {}): Promise<any> {
    const eventsModel: mongoose.Model<mongoose.Document> = mongoose.model('Events');
    return await eventsModel.find({...query, hidden: false})
      .lean();
  }
}
