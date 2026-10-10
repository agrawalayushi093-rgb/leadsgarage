// Relative build paths support both domain-root and subfolder static hosting.
export function publicAsset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
