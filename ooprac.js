//function Person ( name, title, evil, enemyOfKing ) {
//this.name = String(name);
//this.title = String(title);
//this.evil = Boolean(evil);
//this.enemyOfKing = Boolean(enemyOfKing);
//}
//var myself = new Person( "brett", "Unknown", false, false );
//console.log(myself);
function Person(name, title, evil, enemyOfKing) {
    this.name = name;
    this.title = title;
    this.evil = evil;
    this.enemyOfKing = enemyOfKing;
}
var myself = new Person("brett", "Unknown", "gerbil", false);
