import * as _ from "lodash";

import {
    CancellationToken,
    Definition,
    DefinitionProvider,
    Location,
    Position,
    TextDocument,
    Uri,
} from "vscode";

var urls = require("../../aws-urls.json");

export class TerraformDefinitionProvider implements DefinitionProvider {
    public provideDefinition (document: TextDocument, position: Position, token: CancellationToken): Definition {
        var word = document.getWordRangeAtPosition(position);
        var words = document.getText(word);
        var found = _.get(urls, words);
        return found ? new Location(Uri.parse(found), new Position(0, 0)) : null;
    }
}
