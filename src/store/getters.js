export default {
    isAuthenticated: state => !!state.token && !!state.user
}