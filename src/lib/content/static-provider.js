const pages = {};

export const staticProvider = {
  async getPage(slug) {
    return pages[slug] ?? null;
  },

  async getCollection(collectionName) {
    return pages[collectionName] ?? [];
  }
};
