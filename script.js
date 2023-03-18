function displayData(data, api) {
    const table = document.getElementById("data-table");
    data.forEach((item) => {
      const row = table.insertRow(-1);
      const apiCell = row.insertCell(0);
      const userIdCell = row.insertCell(1);
      const idCell = row.insertCell(2);
      const titleCell = row.insertCell(3);
      const completedCell = row.insertCell(4);
      apiCell.innerHTML = api;
      userIdCell.innerHTML = item.userId;
      idCell.innerHTML = item.id;
      titleCell.innerHTML = item.title;
      completedCell.innerHTML = item.completed;
    });
  }
  
  function PromiseAPI1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((data) => {
            displayData(data, "API 1");
            resolve(true);
          });
      }, 1000);
    });
  }
  
  function PromiseAPI2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => {
            displayData(data, "API 2");
            resolve(true);
          });
      }, 2000);
    });
  }
  
  function PromiseAPI3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => {
            displayData(data, "API 3");
            resolve(true);
          });
      }, 3000);
    });
  }
  
  document.getElementById("start-btn").addEventListener("click", () => {
    PromiseAPI1().then((res1) => {
      if (res1) {
        PromiseAPI2().then((res2) => {
          if (res2) {
            PromiseAPI3();
          }
        });
      }
    });
  });