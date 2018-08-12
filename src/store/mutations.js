export default {
    authSuccess:  (state, {token, user}) => {
        state.token = token;
        state.user = user;
    },
    authError: (state) => {
        state.token = null;
        state.user = null;
    },
    authLogout: (state) => {
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
    setEntriesList: (state, list) => {
        state.entriesList = list;
    },
    setGroupsList: (state, list) => {
        state.groupsList = list;
    }
}