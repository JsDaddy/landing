import * as mongoose from 'mongoose';

export class CloudDevelopmentModel {
  public async getContent(query: any = {}): Promise<any> {
    const cloudDevelopmentModel: mongoose.Model<mongoose.Document> = mongoose.model('CloudDevelopment');
    return await cloudDevelopmentModel.findOne({...query})
      .lean();
  }
}
