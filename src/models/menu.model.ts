import * as mongoose from 'mongoose';

export class MenuModel {
  public async getMenu(query: {section: string, lang?: string}): Promise<any> {
    const menuModel: mongoose.Model<mongoose.Document> = mongoose.model('Menu');
    return await menuModel.findOne(query).lean();
  }
}
