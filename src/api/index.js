import axios from "axios";

/* HTTP Request & Response 관련 기본 설정 */
const config = {
    baseUrl: "https://api.hnpwa.com/v0/",
};

/* API 함수들 정리 */
// 뉴스 리스트 api
export const fetchNewsList = () => {
    return axios.get(config.baseUrl + "news/1.json");
};
// 잡 리스트 api
export const fetchJobsList = () => {
    return axios.get(config.baseUrl + "jobs/1.json");
};
// 질문 리스트 api
export const fetchAskList = () => {
    return axios.get(config.baseUrl + "ask/1.json");
};
// 유저 정보 api
export const fetchUserInfo = (userId) => {
    return axios.get(`${config.baseUrl}user/${userId}.json`);
};
// 아이템(ask) 정보 api
export const fetchAskItem = (itemId) => {
    return axios.get(`${config.baseUrl}item/${itemId}/json`);
};
