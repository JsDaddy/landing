import * as mongoose from 'mongoose';

export class UsersModel {
  public async getForm(query: {section: string, lang?: string}): Promise<any> {
    const formModel: mongoose.Model<mongoose.Document> = mongoose.model('Users');
    return await formModel.findOne(query).lean();
  }
}
