new Vue({
    el: "#app",
    data: {
        event: {
          eventTitle: "Fest",
          eventDescription: `It's back! the most awaited fest of the year. Loads of
            fun and excitement jam-packed over three days. Come and let out
            your amazing side......`,
          timestamp: ""
        },
        newNameText: '',
        guestNames : [],
        
    },
    created(){
        setInterval(this.getNow, 1000);
    },
    methods: {
        formSubmitted: function() {
            console.log(this.newNameText)
            this.guestNames.push(this.newNameText)
            this.newNameText = ''
        },
        getNow: function() {
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const dateTime = date +' '+ time;
            this.event.timestamp = dateTime;
        }
    },
})
// new vue({
//     el: "#app",
//     data:{
//         event:{
//             eventDate: "July 9",
//             eventTitle: "Diwali Party Invitation!!",
//             eventDescription: `It's back! the most awaited festival of the season. Loads of fun and excitement jam-packed over two days. Come and let out
//             your fun side......`,
//           timestamp: ""
//         },
//         newNameText: '',
//     }
// })