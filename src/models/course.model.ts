import * as mongoose from 'mongoose';

export class CourseModel {
  public async getCourseContent(): Promise<any[]> {
    const courseModel: mongoose.Model<mongoose.Document> = mongoose.model('Course');
    return await courseModel.findOne().lean();
  }
}
