// import request, { extend } from 'umi-request';
// import { authService } from './../auth-service';
// // request interceptor, change url or options.
// request.interceptors.request.use((url, options) => {
//   if (authService.tokens?.access?.token) {
//     // options.headers.append('Authorization', `Bearer ${authService.tokens.access.token}`);
//     const headers = {
//       'Authorization': `Bearer ${authService.tokens.access.token}`
//     };
//     return {
//       url,
//       options: {...options, headers}
//     };
//   }
// });
