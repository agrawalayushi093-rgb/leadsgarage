// An absolute configured base keeps assets correct on nested page URLs.
export function publicAsset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
