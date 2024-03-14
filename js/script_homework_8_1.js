const film2 = {
    name: "Dune: part  two",
    ratingIMDB: 0 ,
    director: "Denis Villeneuve",
    getInfo: function () {
      for (let key in this){
        if (typeof this[key] != 'function'){
            console.log(key + ': ' + this[key]);
        }
      }
    }
}
film2.Distributor = "Warner Bros. Pictures"
film2.getInfo()