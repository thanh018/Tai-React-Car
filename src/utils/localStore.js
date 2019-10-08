import localforage from 'localforage';
import {
  AESEncrypt,
  AESDecrypt,
  HmacSHA256Hash,
} from 'utils/crypto';

import {
  lineGlobalSecretKey,
} from 'config/api';

const store = localforage.createInstance({
  name: 'line-drk',
  storeName: 'config',
});

export const genHash = ({
  name,
  secretKey,
}) => HmacSHA256Hash({
  data: name, // generate hashed name
  secretKey,
});

export const getFromLocalStore = ({
  name,
}) => store.getItem(name);

export const setToLocalStore = ({
  name,
  data,
}) => store.setItem(name, data);


export const setEncryptedData = async ({
  name,
  data,
  secretKey = lineGlobalSecretKey,
  hashed = true,
}) => {
  const finalName = hashed ? genHash({
    name,
    secretKey,
  }) : name;
  const encryptedData = AESEncrypt({
    data,
    secretKey,
  });
  await setToLocalStore({
    name: finalName,
    data: encryptedData,
  });
  return encryptedData;
};

export const getDecryptedData = async ({
  name,
  secretKey = lineGlobalSecretKey,
  hashed = true,
}) => {
  const finalName = hashed ? genHash({
    name,
    secretKey,
  }) : name;
  const data = await getFromLocalStore({
    name: finalName,
  });
  const decryptedData = data ? AESDecrypt({
    data,
    secretKey,
  }) : undefined;
  return decryptedData;
};

export const fromLocalStore = async ({
  name,
  secretKey,
  data,
}) => {
  const hashedName = genHash({
    name,
    secretKey,
  });
  let item = await getFromLocalStore({
    name: hashedName,
  });
  if (!item) {
    item = AESEncrypt({
      data,
      secretKey,
    });
    await setToLocalStore({
      name: hashedName,
      data: item,
    });
  }
  const decryptedData = AESDecrypt({
    data: item,
    secretKey,
  });
  return decryptedData;
};

const favouriteHotels = localforage.createInstance({
  name: 'line-drk',
  storeName: 'favourite-hotels',
});

export const getFavouriteHotels = async key => favouriteHotels.getItem(key);

export const setFavouriteHotels = async (
  key,
  data,
) => {
  let hotelsObject = await getFavouriteHotels(key);
  if (hotelsObject === null) {
    hotelsObject = { ...data };
    favouriteHotels.setItem(key, hotelsObject);
  } else {
    const temp = {};
    Object.assign(temp, {
      ...hotelsObject,
      ...data,
    });
    favouriteHotels.setItem(key, temp);
  }
};

export const checkHotels = async ({ key, hotelId }) => {
  const hotelsObject = await getFavouriteHotels(key);
  if (hotelsObject === null) return false;
  const haveHotels = !!hotelsObject[`${hotelId}`];
  return haveHotels;
};

export const removeFavouriteHotels = async ({
  key,
  hotelId,
}) => {
  const hotels = await getFavouriteHotels(key);
  if (hotels) {
    delete hotels[`${hotelId}`];
    favouriteHotels.setItem(key, hotels);
  }
};
