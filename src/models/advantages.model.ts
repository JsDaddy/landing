import * as mongoose from 'mongoose';

export class AdvantagesModel {
  public async getAdvantages(query: {section: string, lang?: string}): Promise<any> {
    const advantagesModel: mongoose.Model<mongoose.Document> = mongoose.model('Advantages');
    return await advantagesModel.findOne(query).lean();
  }
}
