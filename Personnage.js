export default class Personnage {
    constructor(pseudo, classe, sante, attaque, niveau = 1) {
        this.pseudo     = pseudo;
        this.classe     = classe;
        this.sante      = sante;
        this.attaque    = attaque;
        this.niveau     = niveau;
    }

    evoluer() {
        console.log(this.pseudo + " passe au niveau " + ++this.niveau + "!");
    }

    verifierSante() {
        if (this.sante < 0) this.sante = 0;
        console.log(this.pseudo + " a perdu!");
    }

    get informations() {
        console.log(this.pseudo + " (" + this.classe + ") a " + this.sante + " points de vie "
                    + "et est au niveau " + this.niveau + ".");
    }
}