import * as mongoose from 'mongoose';

export class StaticContentModel {
  public async getMenu(query: {section: string, lang?: string}): Promise<any> {
    const menuModel: mongoose.Model<mongoose.Document> = mongoose.model('StaticContent');
    return await menuModel.findOne(query).lean();
  }
}
