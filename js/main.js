$("#navbar a, .btn").on("click",function(event){
    if(this.hash !== ""){
        event.preventDefault();
        const hash = this.hash;
        $("html, body").animate({scrollTop: $(hash).offset().top - 100},800);
    
    }
});
myFriend = [1,2,3,"sdjas","hdkjs"]
for(r = 0; r < myFriend.length; r++) {
if (typeof myFriend[r]==="string") {
    console.log(myFriend[r]);
}
}