import * as mongoose from 'mongoose';

export class FooterModel {
  public async getContent(query: any = {}): Promise<any> {
    const footerModel: mongoose.Model<mongoose.Document> = mongoose.model('Footer');
    return await footerModel.findOne({...query})
      .lean();
  }
}
