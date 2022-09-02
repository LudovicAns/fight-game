import Magicien from "./Magicien.js";
import Guerrier from './Guerrier.js';

var gandalf = new Magicien('Gandalf');
var thor    = new Guerrier('Thor');
thor.informations;
gandalf.informations;
gandalf.attaquer(thor);
thor.informations;
thor.attaquer(gandalf);
gandalf.informations;
gandalf.coupSpecial(thor);