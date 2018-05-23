import * as mongoose from 'mongoose';

export class CourseModel {
  public async getContent(query: any): Promise<any> {
    const courseModel: mongoose.Model<mongoose.Document> = mongoose.model('Course');
    return await courseModel.findOne({...query, hidden: false})
      .lean();
  }

  public async getAllContent(query: any): Promise<any[]> {
    const courseModel: mongoose.Model<mongoose.Document> = mongoose.model('Course');
    return await courseModel.find({...query, hidden: false})
      .lean();
  }
}
