import * as mongoose from 'mongoose';

export class WebDevelopmentModel {
  public async getContent(query: any = {}): Promise<any> {
    const webDevelopmentModel: mongoose.Model<mongoose.Document> = mongoose.model('WebDevelopment');
    return await webDevelopmentModel.findOne({...query})
      .lean();
  }
}
