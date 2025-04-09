function handleCredentialResponse(response) {
    fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: response.credential
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        console.log("Login bem-sucedido!");
        window.location.href = "/dashboard.html";
      }
    });
  }
  