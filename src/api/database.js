import idb from 'idb';

const openDb = () => {
  if (!navigator.serviceWorker) {
    return Promise.resolve();
  }

  return idb.open('gdgbali', 1, upgradeDb => {
    upgradeDb.createObjectStore('events', { keyPath: 'id' });
    upgradeDb.createObjectStore('eventSessions', { keyPath: 'slugUrl' });
  });
};

const dbTx = async (objStore, txMode) => {
  const db = await openDb();
  return db.transaction(objStore, txMode).objectStore(objStore);
};

const save = async (reqVerb, objStore, responseData) => {
  const tx = await dbTx(objStore, 'readwrite');

  switch (reqVerb) {
    case 'GET_SINGLE':
      tx.put(responseData);
      break;
    default:
      responseData.forEach(item => {
        tx.put(item);
      });
      break;
  }
};

const getFromLocal = async (reqVerb, objStore, id) => {
  const tx = await dbTx(objStore, 'readonly');

  if (reqVerb === 'GET_LIST') {
    return tx.getAll();
  }

  return tx.get(id);
};

export default {
  save,
  getFromLocal,
};
