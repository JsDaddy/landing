import * as mongoose from 'mongoose';

export class LanguagesModel {
  public async getLanguages(query: any): Promise<any> {
    const languagesModel: mongoose.Model<mongoose.Document> = mongoose.model('Languages');
    return await languagesModel.find(query).lean();
  }
}
