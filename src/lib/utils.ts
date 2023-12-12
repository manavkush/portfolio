export function validateString(str: unknown) {
  if (!str || typeof str !== 'string') {
    return false;
  }
  return true;
}
