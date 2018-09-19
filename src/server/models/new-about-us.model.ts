import * as mongoose from 'mongoose';

export class NewAboutUsModel {
    public async getContent(query: any = {}): Promise<any> {
        const newAboutUsModel: mongoose.Model<mongoose.Document> = mongoose.model('NewAboutUs');
        return await newAboutUsModel.find({...query, hidden: false})
        .lean();
    }
}
