import * as mongoose from 'mongoose';

export class PortfolioModel {
  public async getContent(query: any = {}): Promise<any> {
    const projectsModel: mongoose.Model<mongoose.Document> = mongoose.model('Projects');
    return await projectsModel.find({...query, hidden: false})
      .lean();
  }
}
