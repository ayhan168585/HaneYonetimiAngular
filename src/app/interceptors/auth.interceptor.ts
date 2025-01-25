import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  // localStorage'dan token'ı alıyoruz
  const token = localStorage.getItem('token');

  // İsteği klonlayarak Authorization başlığını ekliyoruz
  const authReq: HttpRequest<any> = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token ?? ''}`
    }
  });

  // Gerekirse debug için log atabilirsiniz
  console.log('AuthInterceptor - Request:', authReq);

  // Zincirdeki bir sonraki handle'a klonlanmış isteği gönderiyoruz
  return next(authReq);
};
