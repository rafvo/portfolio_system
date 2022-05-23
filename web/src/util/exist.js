export function exist(data) {
  const valid = Boolean(data && typeof data !== undefined);
  if (!valid) return false;

  if (data instanceof Array) return Boolean(data.length > 0);

  else if (data instanceof Object)
    return Boolean(
      Object.keys(data).length > 0
    );

  else return Boolean(data);
}

export function isNotNullable(data) {
  return Boolean(typeof data !== undefined && data !== null && data !== "" && data !== NaN);
}