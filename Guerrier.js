import Personnage from "./Personnage.js";

export default class Magicien extends Personnage {
    constructor (pseudo) {
        super(pseudo, "guerrier", 350, 50);
    }

    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.sante + " avec son épée (" + this.attaque
                    + " dégâts)");
        this.evoluer();
        this.verifierSante();
    }

    coupSpecial(personnage) {
        personnage.sante = this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial haches de guerre "
                    + personnage.pseudo + " (" + (this.attaque * 5) + " dégâts)");
        this.evoluer();
        this.verifierSante();
    }
}