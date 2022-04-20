import { Notify } from 'notiflix/build/notiflix-notify-aio';


const URL = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(name) {
  /*
   * Отправляем запрос на сервер
   * Если ответ не 200 возвращаем объект данных
   */
  return fetch(`${URL}${name}?fields=name,capital,population,flags,languages`).then(response => {
    if (!response.ok) {
      Notify.failure('Oops, there is no country with that name');
    }
    return response.json();
  });
}