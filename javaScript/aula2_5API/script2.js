const xhr = new XMLHttpRequest();

xhr.open("POST", "https://jsonplaceholder.typicode.com/todos");
xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

const body = JSON.stringify({
  userId: 99,
  title: "Perdoe meus erros",
  completed: false
});

xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 201) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.log(`Erro: ${xhr.status}`);
  }
};

xhr.send(body);
