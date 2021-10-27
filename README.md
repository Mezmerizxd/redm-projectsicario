# RedM-Project-Sicario


## Insalling

Clone this repository.
```bash
git clone https://github.com/project-sicario/redm-projectsicario 
```

Rename the 'redm-projectsicario' folder to 'server-data'.
```bash
mv redm-projectsicario/ server-data/ 
```

Create folder called 'server-files' in the same directory 'server-data' is in.
```bash
mkdir server-files
```

Go to [FXServer Artifacts](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) and download the latest recommended version.

Extract 'server.7z' and copy all the files inside 'server' to the 'server-files' folder.

Go into 'server-files' and run FXServer.exe and go through the steps until you get to Deployment Type, when there choose Local Server Data and choose the 'server-data' folder we just created. After that you can continue the install process.

Open a terminal inside 'server-data' and run these commands
```bash
yarn

# After yarn has done its job run 

npm run build
```

## Notes

OxMySql Javascript/Typescript Examples
```ts
// Example 1
global.exports.oxmysql.insert("INSERT INTO tableName (param1, param2, param3) VALUES (?, ?, ?)", ["data1", "data2", "data3"])

// Example 2
setTimeout(async() => {
  global.exports.oxmysql.fetch("SELECT * FROM tableName", [], (result) => {
    if (result[0] != null) {
      for (let i = 0; i < result.length; i++) {
        console.log(result[i].param);
      }
    }else {
      console.log("Failed to get data");
    }
  });
}, 5000);
```

Getting player identifier
```ts
for (let i = 0; i < 5; i++) {
  const retval = GetPlayerIdentifier(_source, i);
  console.log(retval);
}
// Returns
steam:111111111111111
license:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
xbl:1111111111111111
live:1111111111111111
license2:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
ip:8.8.8.8
```