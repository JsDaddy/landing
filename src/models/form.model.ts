import * as mongoose from 'mongoose';

export class FormModel {
  public async getForm(query: {section: string, lang?: string}): Promise<any> {
    const formModel: mongoose.Model<mongoose.Document> = mongoose.model('Form');
    return await formModel.findOne(query).lean();
  }
}
