import * as mongoose from 'mongoose';

export class ProjectParticipentsModel {
  public async createParticipent(body: any): Promise<any> {
    const participentsModel: mongoose.Model<mongoose.Document> = mongoose.model('ProjectParticipents');
    return await participentsModel.create(body);
  }
}
