let forma = document.getElementById ("forma");
let color = document.getElementById ("color");
let name = document.getElementById ("iname");

console.log (forma.value);
console.log (forma.value);

save_data_firebase(data);


const save_data_firebase = (d) => {
  db.collection("contactos")
    .add(d)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      get_data_firebase();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

let contactos_arr = [];

const get_data_firebase = () => {
  contactos_arr = [];
  db.collection("")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        contactos_arr.push(doc.data());
      });
      buildList();
    });
};

const buildList = () => {
  lista.innerHTML = "";
  contactos_arr.forEach((e) => {
    lista.insertAdjacentHTML(
      "beforeend",
      `
     <li>${e.name} - ${e.forma}</li>
    `
    );
  });
};

get_data_firebase();