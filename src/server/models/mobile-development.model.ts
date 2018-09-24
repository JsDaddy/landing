import * as mongoose from 'mongoose';

export class MobileDevelopmentModel {
  public async getContent(query: any = {}): Promise<any> {
    const mobileDevelopmentModel: mongoose.Model<mongoose.Document> = mongoose.model('MobileDevelopment');
    return await mobileDevelopmentModel.findOne({...query})
      .lean();
  }
}
