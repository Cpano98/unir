"use strict"; //Deactivated on the tsconfig.json file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
const vscode = require("vscode"); // Import the module and reference it with the alias vscode in your code below
// This method is called when your extension is activated
function activate(context) {
    // Your extension is activated the very first time the command is executed
    let disposable = vscode.commands.registerCommand("extension.gapline", () => {
        var editor = vscode.window.activeTextEditor; //Inicializa el editor de texto
        if (!editor) {
            return;
        }
        var selection = editor.selection; //Estado de nuestro usuario: selección. El programa recorrerá solo el texto seleccionado
        var text = editor.document.getText(selection); //Guarda el texto seleccionado por el usuario
        vscode.window.showInputBox({ prompt: "Lineas?" }).then((value) => {
            //Crea input para usuario de número de líneas a saltar. Después de enter, la función continúa con el programa
            let numberOfLines = +value; //Genera nuestra variable con el input del usuario.
            var textInChunks = []; //Genera array/stack deL CONTENIDO (vacío)
            text.split("\n").forEach((currentLine, lineIndex) => {
                //Llama a la función "split" para detectar cada salto de línea y recorre el string completo con un ForEach.
                textInChunks.push(currentLine); //Agrega a nuestro stack vacío el contenido de cada línea.
                if ((lineIndex + 1) % numberOfLines === 0)
                    textInChunks.push(""); //Llama nuestra variable "numberOfLines" para hacer el salto correspondiente
            });
            text = textInChunks.join("\n"); //Junta nuestro nuevo array con salto de línea "\n"
            editor.edit((editBuilder) => {
                var range = new vscode.Range(selection.start.line, 0, selection.end.line, editor.document.lineAt(selection.end.line).text.length);
                editBuilder.replace(range, text);
            });
        });
    });
    context.subscriptions.push(disposable); //Variable de entorno
}
exports.activate = activate;
function deactivate() { } //Extension in deactivated: Calls this function in case the ext. is no longer required by the user
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map