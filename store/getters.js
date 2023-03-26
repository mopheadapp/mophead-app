export default {
    getBaseURL: (state) => {
        const hostname = window.location.hostname
        const { local, prod } = state.baseURL
        return hostname.includes("localhost") ? local : prod
    }
};