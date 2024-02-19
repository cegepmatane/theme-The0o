import gare from '../images/gare.png'
import ampoule from '../images/ampoule.png'
import robinet from '../images/robinet.png'
import chance from '../images/chance.png'
import caisseCommunaute from '../images/caisseCommunaute.png'
import bague from '../images/bague.png'

export const caseList = {
    "row_haut": [
        {
            id: 20,
            type_case: 'parcGratuit',
            image: null
        },
        {
            id: 21,
            type_case: 'propriete',
            nom: 'Avenue Matignon',
            couleur: 'e3010d',
            prix:  220
        },
        {
            id: 22,
            type_case: 'chance',
            image: chance,
        },
        {
            id: 23,
            type_case: 'propriete',
            nom: 'Boulevard Malesherbes',
            couleur: 'e3010d',
            prix:  220
        },
        {
            id: 24,
            type_case: 'propriete',
            nom: 'Avenue Henri-Martin',
            couleur: 'e3010d',
            prix:  240
        },
        {
            id: 25,
            type_case: 'gare',
            nom: 'Gare du Nord',
            image: gare,
            prix:  200
        },
        {
            id: 26,
            type_case: 'propriete',
            nom: 'Faubourg Saint-Honoré',
            couleur: 'feec00',
            prix:  260
        },
        {
            id: 27,
            type_case: 'propriete',
            nom: 'Place de la Bourse',
            couleur: 'feec00',
            prix:  260
        },
        {
            id: 28,
            type_case: 'compagnie',
            nom: 'Compagnie de distribution des eaux',
            image: robinet,
            prix:  150
        },
        {
            id: 29,
            type_case: 'propriete',
            nom: 'Rue la Fayette',
            couleur: 'feec00',
            prix:  280
        },
        {
            id: 30,
            type_case: 'allerPrison',
            image: null
        }
    ],
    "row_gauche": [
        {
            id: 19,
            type_case: 'propriete',
            nom: 'Place Pigaille',
            couleur: 'f88f02',
            prix:  200
        },
        {
            id: 18,
            type_case: 'propriete',
            nom: 'Boulevard Saint-Michel',
            couleur: 'f88f02',
            prix:  180
        },
        {
            id: 17,
            type_case: 'caisseCommunaute',
            image: caisseCommunaute
        },
        {
            id: 16,
            type_case: 'propriete',
            nom: 'Avenue Mozart',
            couleur: 'f88f02',
            prix:  180
        },
        {
            id: 15,
            type_case: 'gare',
            nom: 'Gare de Lyon',
            image: gare,
            prix:  200
        },
        {
            id: 14,
            type_case: 'propriete',
            nom: 'Rue de Paradis',
            couleur: 'da2d86',
            prix:  160
        },
        {
            id: 13,
            type_case: 'propriete',
            nom: 'Avenue de Neuilly',
            couleur: 'da2d86',
            prix:  140
        },
        {
            id: 12,
            type_case: 'compagnie',
            nom: 'Compagnie de distribution d\'éléctricité',
            image: ampoule,
            prix:  150
        },
        {
            id: 11,
            type_case: 'propriete',
            nom: 'Boulevard de la Villette',
            couleur: 'da2d86',
            prix:  140
        }
    ],
    "row_bas": [
        {
            id: 10,
            type_case: 'prison',
            image: null
        },
        {
            id: 9,
            type_case: 'propriete',
            nom: 'Avenue de la République',
            couleur: 'bae4fa',
            prix:  120
        },
        {
            id: 8,
            type_case: 'propriete',
            nom: 'Rue de Courcelles',
            couleur: 'bae4fa',
            prix:  100
        },
        {
            id: 7,
            type_case: 'chance',
            image: chance,
        },
        {
            id: 6,
            type_case: 'propriete',
            nom: 'Rue de Vaugirard',
            couleur: 'bae4fa',
            prix:  100
        },
        {
            id: 5,
            type_case: 'gare',
            nom: 'Gare Montparnasse',
            image: gare,
            prix:  200
        },
        {
            id: 4,
            type_case: 'impotRevenu',
            nom: 'Impots sur le revenu',
            prix:  200
        },
        {
            id: 3,
            type_case: 'propriete',
            nom: 'Rue Lecourbe',
            couleur: '934828',
            prix:  60
        },
        {
            id: 2,
            type_case: 'caisseCommunaute',
            image: caisseCommunaute
        },
        {
            id: 1,
            type_case: 'propriete',
            nom: 'Boulevard de Belleville',
            couleur: '934828',
            prix:  60
        },
        {
            id: 0,
            type_case: 'depart',
            image: null
        }
    ],
    "row_droite": [
        {
            id: 31,
            type_case: 'propriete',
            nom: 'Avenue de Breteuil',
            couleur: '1fa54c',
            prix:  300
        },
        {
            id: 32,
            type_case: 'propriete',
            nom: 'Avenue Foch',
            couleur: '1fa54c',
            prix:  300
        },
        {
            id: 33,
            type_case: 'caisseCommunaute',
            image: caisseCommunaute
        },
        {
            id: 34,
            type_case: 'propriete',
            nom: 'Boulevard des Capucines',
            couleur: '1fa54c',
            prix:  320
        },
        {
            id: 35,
            type_case: 'gare',
            nom: 'Gare Saint-Lazare',
            image: gare,
            prix:  200
        },
        {
            id: 36,
            type_case: 'chance',
            image: chance,
        },
        {
            id: 37,
            type_case: 'propriete',
            nom: 'Avenue des Champs-Élysées',
            couleur: '0168b3',
            prix:  350
        },
        {
            id: 38,
            type_case: 'taxeLuxe',
            nom: 'Taxe de luxe',
            image: bague,
            prix:  100
        },
        {
            id: 39,
            type_case: 'propriete',
            nom: 'Rue de la Paix',
            couleur: '0168b3',
            prix:  400
        }
    ]
}