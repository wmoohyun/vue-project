import axios from 'axios'; // package.json 설치되어있는(= node_modules에 설치되어있는) 라이브러리를 가져 온다.
                           // promise 기반 api 제공

// 1. HTTP Request & Response 와 관련된 기본 설정
const config = {
   baseUrl:  'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchNewsList (){
  // return axios.get(config.baseUrl + 'news/1.json');
  return axios.get(`${config.baseUrl}news/1.json`); // ES6 문법 : 템플릿 스트링
}

function fetchJobsList (){
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

//  fetchJobsList (() => {
//   return axios.get(`${config.baseUrl}jobs/1.json`)
//  })

function fetchAskList (){
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchList (pageName){
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo (username){
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo (itemId){
  return axios.get(`${config.baseUrl}item/${itemId}.json`);
}


export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList
}