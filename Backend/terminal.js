const Terminal = require("../ext_modules/termlib/termlib")
var term = new Terminal( {handler: termHandler} );
term.open();

function termHandler() {
   this.newLine();
   var line = this.lineBuffer;
   if (line != "") {
      this.write("You typed: "+line);
   }
   this.prompt();
}