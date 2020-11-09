# vscode-json-ls-bin

[![npm](https://img.shields.io/npm/v/vscode-json-ls-bin.svg)](https://www.npmjs.com/package/vscode-json-ls-bin)

JSON Language Server binary built directly from [VSCode](https://github.com/microsoft/vscode).

Inspired by [vscode-langservers/vscode-json-languageserver-bin](https://github.com/vscode-langservers/vscode-json-languageserver-bin/)

## Prerequisites

To install this Language Server you need [npm](https://www.npmjs.com/get-npm) on your machine

## Installing

```bash
npm install --global vscode-json-ls-bin
```

## Launching the Server

The common way to launch it is by using stdio transport:

```bash
json-ls --stdio
```

The server can also be launched with one of the following transports:

```bash
json-ls --socket={number}
json-ls --node-ipc
```

## Versioning

We use [SemVer](http://semver.org/) for versioning.

`MINOR` is changed when the submodule is updated and `PATCH` when only the build method is updated.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
This is a derived work please see [VSCode's LICENSE.txt](https://github.com/Microsoft/vscode/blob/master/LICENSE.txt) for the original copyright and license.
