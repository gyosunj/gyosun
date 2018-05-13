# gyosun v4.0
[www.gyosun.com](http://www.gyosun.com/)

ExpressJS + Webpack + Marko

```
>> npm i
>> npm run dev
```

##### .vscode examples
```
{
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Run Development",
      "internalConsoleOptions": "openOnSessionStart",
      "program": "${workspaceFolder}/server.js",
      "cwd": "${workspaceFolder}",
      "args": ["profile=DEVELOPMENT"],
      "stopOnEntry": false,
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Run Production",
      "internalConsoleOptions": "openOnSessionStart",
      "program": "${workspaceFolder}/server.js",
      "cwd": "${workspaceFolder}",
      "args": ["profile=PRODUCTION", "port=8889"],
      "stopOnEntry": false,
    },
    {
      "name": "Attach to Process Dev",
      "type": "node",
      "request": "attach",
      "port": 9229,
      "stopOnEntry": false,
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```