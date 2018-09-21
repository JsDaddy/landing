import * as mongoose from 'mongoose';

export class TechnologiesModel {
    public async getContent(query: any = {}): Promise<any> {
        const technologiesModel: mongoose.Model<mongoose.Document> = mongoose.model('Technologies');
        return await technologiesModel.findOne({...query})
        .lean();
    }
}
