import { window, ExtensionContext } from "vscode";
import { HelloWorldViewProvider } from "./views/HelloWorldViewProvider";

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    window.registerWebviewViewProvider(
      HelloWorldViewProvider.viewType,
      new HelloWorldViewProvider(context.extensionUri)
    )
  );
}
