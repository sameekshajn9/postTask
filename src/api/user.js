import { axiosClient } from '../store';
import { toPromise } from '../utils/to-promise';

export const checkUser = data =>
  toPromise((resolve, reject) => {
    return axiosClient
      .post('/check-user', data)
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
