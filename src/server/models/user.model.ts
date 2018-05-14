import * as mongoose from 'mongoose';

export class UserModel {
  public async getUsers(role?: string): Promise<any> {
    const userModel: mongoose.Model<mongoose.Document> = mongoose.model('User');
    const query: any = role ? { roles: { $in: [ role ] } } : {};
    return await userModel.find(query).lean();
  }

  public async getUser(query: any): Promise<any> {
    const userModel: mongoose.Model<mongoose.Document> = mongoose.model('User');
    return await userModel.findOne(query);
  }
}
