interface PersistentData<T> {
  value: T;
  version: number | undefined;
}

export function getPersistent<T>(key: string, expectedVersion: number) {
  const json = localStorage.getItem(key);
  if (!json) return null;

  const data = JSON.parse(json) as PersistentData<T>;

  if (expectedVersion !== undefined && expectedVersion != data.version) {
    clearPersistent(key);
    return null;
  }

  return data.value;
}

export function setPersistent<T>(key: string, version: number, value: T) {
  const data: PersistentData<T> = {
    value: value,
    version: version,
  };

  localStorage.setItem(key, JSON.stringify(data));
}

export function clearPersistent(key: string) {
  localStorage.removeItem(key);
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export function randomString(length: number) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
