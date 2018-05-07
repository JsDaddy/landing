import * as mongoose from 'mongoose';

export class MainContentModel {
  public async getContent(): Promise<any[]> {
    const mainContentModel: mongoose.Model<mongoose.Document> = mongoose.model('MainContent');
    return await mainContentModel.findOne().lean();
  }
}
