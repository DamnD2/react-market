const firebaseErrorsMap = {
  'auth/invalid-email': 'Вы ввели некорректный Email.',
  'auth/wrong-password': 'Вы ввели неверный пароль.',
  'auth/user-not-found': 'Пользователь с таким Email не найден. Возможно, пользователь был удален.',
  'auth/weak-password': 'Пароль должен состоять не менее чем из 6 символов.',
  'auth/email-already-in-use': 'Адрес электронной почты уже используется другой учетной записью.',
  'auth/too-many-requests': 'Доступ к этой учетной записи был временно отключен из-за множества неудачных попыток входа в систему. Вы можете повторить попытку позже.',
};

export default firebaseErrorsMap;
