import * as mongoose from 'mongoose';

export class AdvantagesModel {
  public async getContent(query: any): Promise<any> {
    const advantagesModel: mongoose.Model<mongoose.Document> = mongoose.model('Advantages');
    return await advantagesModel.findOne(query).lean();
  }
}
