export default function ({ store, redirect, $http }) {
  // 🔒 Redirect if user is not authenticated
  if (!store.getters['auth/isAuth']) {
    return redirect('/')
  }
  // ♻️ On page refresh
  if (!$http._defaults.headers['Authorisation'])
    $http.setToken(store.state.auth.token, "Bearer");
}