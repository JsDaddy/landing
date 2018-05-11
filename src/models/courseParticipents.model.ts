import * as mongoose from 'mongoose';

export class CourseParticipentsModel {
  public async createParticipent(body: any): Promise<any> {
    const participentsModel: mongoose.Model<mongoose.Document> = mongoose.model('CourseParticipents');
    return await participentsModel.create(body);
  }
}
