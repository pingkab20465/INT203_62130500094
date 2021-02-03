const app = {
    data() {
        return {
            image_url: "./images/62130500094pic.jpg",
            firstname: "Sittichok",
            lastname: "Pintakul",
            occupation: "Student @SIT KMUTT",
            article_num: 100,
            follower_num: 200,
            rating_num: 9.9,
            button1: "Call",
            button2: "Chat"
        }
    }
}

mountedApp = Vue.createApp(app).mount('#app')