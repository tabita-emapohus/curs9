const d = new Date();

const time = {
    /*newDate: function(){
        return new Date();
    },
    hour: function(){
        return this.newDate().getHours();
    },
    min: function(){
        return this.newDate().getMinutes()
    },
    sec: function(){
        console.log ("second") 
        return this.newDate().getSeconds()
 */
        hour: function(){
            return new Date().getHours();
        },
        min: function(){
            return new Date().getMinutes()
        },
        sec: function(){
            return new Date().getSeconds()
    }

    




}
