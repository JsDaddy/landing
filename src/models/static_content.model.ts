import * as mongoose from 'mongoose';

export class StaticContentModel {
  public async getContentHashMap(section: string[], lang = 'en'): Promise<HashMap> {
    const menuModel: mongoose.Model<mongoose.Document> = mongoose.model('StaticContent');
    const content = await menuModel.find({ name: { $in: section }, lang, hidden: false }).lean();
    return content.reduce((acc: HashMap, next: any) => {
      return {...acc, [next.name]: next};
    }, {});
  }
}
