import Personnage from "./Personnage.js";

export default class Magicien extends Personnage {
    constructor (pseudo) {
        super(pseudo, "magicien", 170, 90);
    }

    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(this.pseudo + " attaque " + personnage.sante + " en lançant un sort (" + this.attaque
                    + " dégâts)");
        this.evoluer();
        this.verifierSante();
    }

    coupSpecial(personnage) {
        personnage.sante = this.attaque * 5;
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes "
                    + personnage.pseudo + " (" + (this.attaque * 5) + " dégâts)");
        this.evoluer();
        this.verifierSante();
    }
}