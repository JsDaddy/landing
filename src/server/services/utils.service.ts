export class UtilsService {
  public getLangulagesLinks(languages: any[], lang: string, fixUrl?: boolean, id?: string) {
    return languages.map((language: any) => {
      const langMenu = fixUrl
        ? {
          ...language,
          link: `/${language.title.toLowerCase()}/courses/${id}`,
        }
        : language;

      if (language.title.toLowerCase() !== lang) {
        return langMenu;
      }
      return {
        ...langMenu,
        active: 'active',
      };
    });
  }

  public getCourseLinks(menu: any[], lang: string) {
    return menu.map((item: any) => {
      if (item.link === '#courses') {
        return {
          ...item,
          link: `/${lang}/courses#courses`,
        };
      }
      if (item.link === '#mentors') {
        return {
          ...item,
          link: `/${lang}/courses#mentors`,
        };
      }
      return item;
    });
  }
}
