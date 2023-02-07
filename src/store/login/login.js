import getters from "@/store/login/getters";
import actions from "@/store/login/actions";
import mutations from "@/store/login/mutations";
export default {
    namespaced: true,
    state: {
        accessToken: null,
    },
    getters,
    actions,
    mutations,
}