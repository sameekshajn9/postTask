// @flow

type TToPromiseParams = (resolve: any, reject: any) => void;

/**
 * @method toPromise: Convert any method to promise
 * for async operations.
 * @param {any} promise
 */
export const toPromise = (promise: TToPromiseParams) =>
  new Promise<any>(promise);
