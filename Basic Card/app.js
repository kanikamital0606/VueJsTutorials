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
        guestNames: [],
        // to overcome submit class problem 
        formSubmitClass: '',
        //capacity limit 
        eventCapacity: 10,
        //percentage bar 
        eventCapacityPercentage: 0


    },
    //comment it , now no use 
    // created(){
    //setInterval(this.getNow, 1000);
    // },
    methods: {
        formSubmitted: function () {

            //to display name
            //console.log(this.newNameText)

            //put if condition to limit attendees list
            if (this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
                console.log(this.newNameText) //display atendess list
                this.guestNames.push(this.newNameText) //push names in empty array guestList
                this.newNameText = '' //after push and diplay in guest list again become empty 
                this.formSubmitClass = "submitted" //submitted array
                this.eventCapacityPercentage = this.guestNames.length / (this.eventCapacity / 100)
                // ^|| to increase percentage bar
            }
            // this.guestNames.push(this.newNameText)
            // this.newNameText = ''
        },
        // getNow: function () {
        //     const today = new Date();
        //     const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        //     const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        //     const dateTime = date + ' ' + time;
        //     this.event.timestamp = dateTime;
        // },
        data(){
            return {
                value: this.eventCapacityPercentage,
                max: 100
            }
        },
        randomValue() {
            this.value = this.guestNames.length / (this.eventCapacity / 100)
        }

    },
    //add computed: to sort names alphabetically


    computed: {
        sortNames: function () {
            return this.guestNames.sort()
        }
    },

});
