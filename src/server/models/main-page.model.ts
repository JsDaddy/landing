import * as mongoose from 'mongoose';

export class MainPageModel {
  public async getContent(query: any = {}): Promise<any> {
    const mainPageModel: mongoose.Model<mongoose.Document> = mongoose.model('MainPage');
    return await mainPageModel.findOne({...query})
      .lean();
  }
}
