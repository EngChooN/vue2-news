import ListView from "@/views/ListView.vue";
import bus from "@/utils/bus";

export default function createListView(name) {
    return {
        // 재상용한 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name: name, // 어떤 HOC로 생성된 컴포넌트인지 구분을 위해서 넣어 줌 따라서 이 코드에서 재사용하기 위한 부분은 created()이다.
        created() {
            bus.$emit("start:spinner");
            this.$store
                .dispatch("FETCH_LIST", this.$route.name)
                .then(() => {
                    console.log("fetched");
                    bus.$emit("end:spinner");
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        render(createElement) {
            return createElement(ListView);
        },
    };
}
