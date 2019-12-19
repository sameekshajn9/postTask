import { axiosClient } from '../store';
import { toPromise } from '../utils/to-promise';

export const getAllPosts = () =>
  toPromise((resolve, reject) => {
    return axiosClient
      .get('/get-all-tasks')
      .then(response => resolve(response))
      .catch(err => reject(err));
  });

export const postTask = data =>
  toPromise((resolve, reject) => {
    return axiosClient
      .post('/post-task', data)
      .then(response => resolve(response))
      .catch(err => reject(err));
  });

export const upvoteTask = data =>
  toPromise((resolve, reject) => {
    return axiosClient
      .post('/upvote-task', data)
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
