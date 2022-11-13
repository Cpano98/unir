"use strict"; //Deactivated on the tsconfig.json file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    let disposable = vscode.commands.registerCommand("extension.gapline", () => {
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        var selection = editor.selection;
        var text = editor.document.getText(selection);
        vscode.window.showInputBox({ prompt: "Lineas?" }).then((value) => {
            let numberOfLines = +value;
            var textInChunks = [];
            text.split("\n").forEach((currentLine, lineIndex) => {
                textInChunks.push(currentLine);
                if ((lineIndex + 1) % numberOfLines === 0)
                    textInChunks.push("");
            });
            text = textInChunks.join("\n");
            editor.edit((editBuilder) => {
                var range = new vscode.Range(selection.start.line, 0, selection.end.line, editor.document.lineAt(selection.end.line).text.length);
                editBuilder.replace(range, text);
            });
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
//Extension in deactivated: Calls this function in case the ext. is no longer required by the user
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map