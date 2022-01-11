import ContentfulApi from "@contentful/Api";

export default class ContentfulCategories extends ContentfulApi {
  /**
   * Get All Categories
   */
  static async getAll() {
    const query = `
      {
        blogCategoryCollection {
            items {
                sys {
                    id
                }
                name
                slug
            }
            }
      }`;

    const response = await this.callContentful(query);

    const Categories = response.data.blogCategoryCollection.items
      ? response.data.blogCategoryCollection.items
      : [];

    return Categories;
  }
}
