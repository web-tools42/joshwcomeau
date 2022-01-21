export function buildErrorMessage(code, params) {
  switch (code) {
    case 'AWS.ECommerceService.NoExactMatches':
      return `Oh no! We couldn’t find any ${params.type} by that name.`;
    default:
      return null;
  }
}
