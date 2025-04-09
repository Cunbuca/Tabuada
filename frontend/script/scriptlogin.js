    fetch("http://localhost:3000/api/user", { credentials: "include" })
      .then(res => {
        if (!res.ok) throw new Error("Não autorizado");
        return res.json();
      })
      .then(data => {
        document.getElementById("info").innerHTML = `
          <h2>Olá, ${data.user.name}</h2>
          <img src="${data.user.picture}" width="100">
          <p>Email: ${data.user.email}</p>
        `;
      })
      .catch(() => {
        window.location.href = "index.html"; // volta para o login
    });