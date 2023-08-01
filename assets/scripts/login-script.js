/** @module Login-Script */
/** 
* Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/** 
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/** 
* Membuat variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /** 
 * Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
 * @constant {string}
 */
  const email = inputEmailElement.value;

  /** 
 * Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
 * @constant {string}
 */
  const password = inputPasswordElement.value;

  /* Comment :  Menambahkan aksi klik pada button. */
  if (email == expectedEmail && password == expectedPassword) {

    /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();
  } else {

    /* Comment : Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
    showPopUp();
  }
});
