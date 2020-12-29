export default function ({ store, redirect }) {
  // 🔒 Redirect if user is not authenticated
  if (!store.getters['auth/isAuth']) {
    return redirect('/')
  }
}