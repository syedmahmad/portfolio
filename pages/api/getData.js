import serviceCalls from "../../services/ServiceCalls";

export const getPageData = async (route) => {
    try {
        const result = await serviceCalls.getFromCMS(route);
        return result;
    } catch (e) {
        return {};
    }
};