import * as mongoose from 'mongoose';

export class HeaderModel {
    public async getContent(query: any = {}): Promise<any> {
        const headerModel: mongoose.Model<mongoose.Document> = mongoose.model('Header');
        return await headerModel.findOne({...query})
        .lean();
    }
}
