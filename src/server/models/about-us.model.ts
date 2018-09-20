import * as mongoose from 'mongoose';

export class AboutUsModel {
    public async getContent(query: any = {}): Promise<any> {
        const aboutUsModel: mongoose.Model<mongoose.Document> = mongoose.model('AboutUs');
        return await aboutUsModel.findOne({...query})
        .lean();
    }
}
