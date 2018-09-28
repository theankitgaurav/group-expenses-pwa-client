export default {
    AUTH_SUCCESS: (state, {token, user}) => {
        state.token = token;
        state.user = user;
    },
    authError: (state) => {
        state.token = null;
        state.user = null;
    },
    AUTH_LOGOUT: (state) => {
        state.token = null;
        state.user = null;
    },
    setTitle: (state, title) => {
        state.title = title;
    },
    enableNavigationTabs: (state, value) => {
        state.appConfig.enableNavigationTabs = value;
    },
    backButtonRequired: (state, value) => {
        state.appConfig.backButtonRequired = value;
    },
    SET_EXPENSES: (state, list) => {
        state.entriesList = list;
    },
    setGroupsList: (state, list) => {
        state.groupsList = list;
    },
    SHOW_ERROR: (state, err) => {
        console.log(`Error: `, err);
        state.showError = true;
        state.errorMessage = err.toString();
    }
}