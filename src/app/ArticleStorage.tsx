'use client';

export const getLikeKey = (articleName: string) =>
  `developer_blog_${articleName}`;

class ArticleStorage {
  private get storage() {
    return localStorage;
  }

  private get isStorageReady() {
    return 'localStorage' in globalThis;
  }

  like(articleName: string) {
    const likeKey = getLikeKey(articleName);
    this.storage.setItem(likeKey, JSON.stringify(true));
  }

  liked(articleName: string): boolean {
    if (!this.isStorageReady) {
      return false;
    }
    const likeKey = getLikeKey(articleName);
    const likeValueString = this.storage.getItem(likeKey);
    const likeValue = likeValueString
      ? JSON.parse(likeValueString) === true
      : false;
    return likeValue;
  }
}
export const articleStorage = new ArticleStorage();
