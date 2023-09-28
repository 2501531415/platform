export function resultSuccess(result, message = 'ok' ) {
  return {
    code: 200,
    data:result,
    message,
    type: 'success',
  };
}

export function resultPageSuccess(
  page,
  pageSize,
  list,
  message = 'ok'
) {
  const pageData = pagination(page, pageSize, list);

  return {
    ...resultSuccess({
      items: pageData,
      total: list.length,
    }),
    message,
  };
}

export function resultError(message = 'Request failed', code = 404, result = null) {
  return {
    code,
    result,
    message,
    type: 'error',
  };
}
