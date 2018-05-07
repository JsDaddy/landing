import * as mongoose from 'mongoose';

export class MainContentModel {
  public async getContent(): Promise<any[]> {
    const maniContentModel: mongoose.Model<mongoose.Document> = mongoose.model('MainContent');
    return await maniContentModel.findOne().lean();
  }
}
