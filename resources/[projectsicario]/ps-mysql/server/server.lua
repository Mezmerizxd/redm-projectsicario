-- setImmediate(() => { EXAMPLE
--   setTimeout(() => {
--     emit("mysql:insert", "INSERT INTO table (param1, param2, param3) VALUES (?, ?, ?)", ["data1", "data2", "data3"], "server message");
--   }, 5000);
-- })

RegisterNetEvent("mysql:insert")
AddEventHandler("mysql:insert", function(query, data, message)
  exports.oxmysql:insert(query, data, function()
    print(message)
  end)
end)

RegisterNetEvent("mysql:select")
AddEventHandler("mysql:select", function(query, data, message)
  exports.oxmysql:fetchSync(query, data, function()
    print(message)
  end)
end)

RegisterNetEvent("mysql:execute")
AddEventHandler("mysql:execute", function(query, data, message)
  exports.oxmysql:execute(query, data, function()
    print(message)
  end)
end)
