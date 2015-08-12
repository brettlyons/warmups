function Person ( name, title, evil, enemyOfKing ) {
  this.name = String(name);
  this.title = String(title);
  this.evil = Boolean(evil);
  this.enemyOfKing = Boolean(enemyOfKing);

  var that = this;

  return {
    getName: function (  ) {
      return that.name;
    },
    getTitle: function (  ) {
      return that.title;
    },
    setTitle: function ( newTitle  ) {
      that.title = newTitle;
    },
    getEvil: function (  ) {
      return that.evil;
    },
    setEvil: function ( newEvil ) {
      that.evil = newEvil;
    },
    getEnemyofKing: function (  ) {
      return that.enemyOfKing;
    },
    setEnemyofKing: function ( newEoKStatus ) {
      that.enemyOfKing = newEoKStatus;
    }
  };
}

var myself = new Person( "brett", "Unknown", false, false );
var otherperson = new Person ( "XYZ", "ThisTitle", true, false );
var joker = new Person("The Joker", "Joker", true, true);
//console.log(myself);

function Castle ( ) {
  this.people = [];
  var that = this;
  return {
    getPeople: function (  ) {
      return that.people;
    },

    addPerson: function ( person ) {
      if ( person.getEnemyofKing() == false ) {
        that.people.push(person);
      }
      else {
        console.log("Could not put person into castle.");
      }
    },

    rmPerson: function ( person ) {
      that.people.pop(person);
    }
  }
}

var myCastle = new Castle();
myCastle.addPerson(joker);
myCastle.addPerson(myself);
myCastle.addPerson(otherperson);
console.log(myCastle.getPeople());

