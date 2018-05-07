import * as mongoose from 'mongoose';

export class CoursesModel {
  public async getContent(): Promise<any[]> {
    const coursesModel: mongoose.Model<mongoose.Document> = mongoose.model('Courses');
    return await coursesModel.findOne().lean();
  }
}
