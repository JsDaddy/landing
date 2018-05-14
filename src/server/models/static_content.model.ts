import * as mongoose from 'mongoose';

export class StaticContentModel {
  public async getContentHashMap(
    sections: Section[],
    lang = 'en',
  ): Promise<IHashMap> {
    const query: string[] = sections.reduce((acc: string[], next: any) => {
      if (typeof next === 'string') {
        return [...acc, next];
      }
      return [...acc, next.query];
    }, []);

    const menuModel: mongoose.Model<mongoose.Document> = mongoose.model('StaticContent');
    const content = await menuModel.find({ name: { $in: query }, lang, hidden: false }).lean();

    const sectionHash: IHashMap = sections
      .reduce((hash: IHashMap, section: Section) => {
        return typeof section === 'string'
          ? hash
          : { ...hash, [section.query]: section };
      }, {});

    return content.reduce((acc: IHashMap, next: any) => {
      if (sections.includes(next.name)) {
        return { ...acc, [next.name]: next };
      }
      const section: ISectionQuery = sectionHash[next.name];

      if (section.rewrite) {
        return { ...acc, [section.replace]: next.content };
      }
      return { ...acc, [section.replace]: next };
    }, {});
  }
}
