function myFunction() {
    const number = document.getElementById("input").value;

    if (number > 20 || number < -20){
      return false}

    axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then((res) => {
    
      document.getElementById("dinosaur-photo").src = res.data.sprites.other['official-artwork'].front_default;
      document.getElementById("title").innerHTML = res.data.name;
      document.getElementById("dinosaur-photoo").src = res.data.sprites.other['official-artwork'].front_default;
      document.getElementById("titlee").innerHTML = res.data.name;
      document.getElementById("circle").innerHTML = res.data.id;
      document.getElementById("lawn").innerHTML = res.data.types[0].type.name;


    })
      .catch((error) => {
        console.log(error);
      });
  }
