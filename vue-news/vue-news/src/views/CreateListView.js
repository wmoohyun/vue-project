import ListView from './ListView'
import bus from '../utils/bus'

export default function createListView(name) {
    return {
       // 하이오더 컴포넌트 - 코드 재사용 목적
       // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
       // 강의 : 하이 오더 컴포넌트가 적용된 앱 구조 설명 및 흐름 정리 에서 jobsView, askView, newsView vue 파일 삭제
       name: name,
       created (){
        bus.$emit('start:spinner');

        // setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                console.log('fetched @@@')
                bus.$emit('end:spinner')
            })
            .catch((error) => {
                console.log(error)
            });
        // }, 3000)
       },
       render(createElement) {
        return createElement(ListView)
       }

    }
}