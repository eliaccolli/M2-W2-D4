const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }
  
  const prices = [34, 5, 2]
  const shippingCost = 50
  let utenteCheEffettuaLAcquisto = marco

  let cart = 0;
  
  for (i=0; i<prices.length; i++) {
    cart += prices[i];
  }

  console.log(cart);

  if (utenteCheEffettuaLAcquisto.isAmbassador === true) {
    cart = cart * 0.7;
  }

  console.log(cart);

  if (cart > 100) {
    console.log ("Il prezzo finale è di " + cart + "$, la spedizione la offriamo noi!");
  }
  else {
    cart = cart + shippingCost;
    console.log(cart);
    console.log ("Il prezzo finale è di " + cart + "$, comprensivi di 50$ di spedizone");
  }

  const primoArrayUtenti = [];
  const arryaAmbassador = [];
  primoArrayUtenti.push (marco, paul, amy);

  for (i=0; i<primoArrayUtenti.length; i++) {
    if (primoArrayUtenti[i].isAmbassador === true) {
        console.log (primoArrayUtenti[i].name + " " + primoArrayUtenti[i].lastName + " è ambassador")
        arryaAmbassador.push (primoArrayUtenti[i]);
    }
    else {
        console.log (primoArrayUtenti[i].name + " " + primoArrayUtenti[i].lastName + " non è ambassador")
    }
  }
  console.log (arryaAmbassador);