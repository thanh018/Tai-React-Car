import AES from 'crypto-js/aes';
import HmacSHA256 from 'crypto-js/hmac-sha256';
import EncBase64 from 'crypto-js/enc-base64';
import EncUtf8 from 'crypto-js/enc-utf8';

export function AESEncrypt({
  data,
  secretKey,
  isObject = typeof data === 'object',
}) {
  return AES.encrypt(isObject ? JSON.stringify(data) : data, secretKey).toString();
}

export function AESDecrypt({
  data,
  secretKey,
}) {
  const bytes = AES.decrypt(data, secretKey);
  const decryptedString = bytes.toString(EncUtf8);
  try {
    const json = JSON.parse(decryptedString);
    return json;
  } catch (e) {
    return decryptedString;
  }
}

export function HmacSHA256Hash({
  data,
  secretKey,
}) {
  const hash = HmacSHA256(data, secretKey);
  const hashInBase64 = EncBase64.stringify(hash);
  return hashInBase64;
}
