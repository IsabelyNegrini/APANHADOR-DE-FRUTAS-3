class Player {
constructor() {
this.index = null;
this.distance = 0;
this.name = null;
this.score =0;
this.rank = null ;
}



/*-------- GET COUNT --------*/

getCount() {
var playerCountRef = database.ref('playerCount');
playerCountRef.on("value", (data) => {
playerCount = data.val();
});
}



/*---------- UPDATE COUNT ---------*/

updateCount(count) {
database.ref('/').update({
playerCount: count
});
}



/*--------- UPDATE ---------*/

update() {
var playerIndex = "players/player" + this.index;
database.ref(playerIndex).set({
name: this.name,
distance: this.distance,
score:this.score
});
}



/*-------- STATIC GET PLAYER INFO ------*/

static getPlayerInfo() {
var playerInfoRef = database.ref('players');
playerInfoRef.on("value", (data) => {
allPlayers = data.val();
})
}

    

/*-------- GET PLAYER AT END ---------*/

getPlayerAtEnd(){
database.ref('playerAtEnd').on("value",(data)=>{
this.rank = data.val();
})
}



/*------- STATIC UPDATE PLAYER AT END -------*/

static updatePlayerAtEnd(rank){
database.ref("/").update({
playerAtEnd : rank
})
} 
}
