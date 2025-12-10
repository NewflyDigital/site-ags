const CACHE_EXPIRATION_DAYS = 7;

export const db =
  typeof window !== "undefined"
    ? new Promise((resolve, reject) => {
        const request = indexedDB.open("imageCacheDB", 1);

        request.onupgradeneeded = event => {
          const db = event.target.result;
          if (!db.objectStoreNames.contains("images")) {
            const store = db.createObjectStore("images", { keyPath: "url" });
            store.createIndex("timestamp", "timestamp", { unique: false });
          }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      })
    : null;

export const saveImageToDB = async (url, blob) => {
  if (!db) return;
  const database = await db;
  const transaction = database.transaction("images", "readwrite");
  const store = transaction.objectStore("images");

  const timestamp = Date.now();

  store.put({ url, blob, timestamp });

  cleanOldImages(database);
};

export const getImageFromDB = async url => {
  if (!db) return;

  const database = await db;

  return new Promise(resolve => {
    const transaction = database.transaction("images", "readonly");
    const store = transaction.objectStore("images");
    const request = store.get(url);

    request.onsuccess = () => {
      const result = request.result;
      if (!result) {
        resolve(null);
        return;
      }

      const expirationTime = CACHE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000;

      if (Date.now() - (result.timestamp || 0) > expirationTime) {
        removeImageFromDB(url);
        resolve(null);
        return;
      }

      resolve(result.blob);
    };

    request.onerror = () => resolve(null);
  });
};

// Remover imagem específica do IndexedDB
export const removeImageFromDB = async url => {
  const database = await db;
  const transaction = database.transaction("images", "readwrite");
  const store = transaction.objectStore("images");
  store.delete(url);
};

export const cleanOldImages = async database => {
  const transaction = database.transaction("images", "readwrite");
  const store = transaction.objectStore("images");
  const request = store.getAll();

  request.onsuccess = () => {
    const expirationTime = CACHE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000;
    const now = Date.now();

    request.result.forEach(entry => {
      if (now - (entry.timestamp || 0) > expirationTime) {
        store.delete(entry.url); // Remove imagens expiradas
      }
    });
  };
};

// Limpar todo o cache manualmente
export const clearImageCache = async () => {
  const database = await db;
  const transaction = database.transaction("images", "readwrite");
  const store = transaction.objectStore("images");
  store.clear();
};
