const { DataTypes, Model } = require('sequelize');
const database = require('../../database/database')
const sequelize = database.sequelize;

class Relatorios extends Model { }

Relatorios.init({
	tempodoencaanos: {
		type: DataTypes.STRING
	},
	tempodoencameses: {
		type: DataTypes.STRING
	},
	vhs: {
		type: DataTypes.STRING
	},
	pcr: {
		type: DataTypes.STRING
	},
	pcrvn: {
		type: DataTypes.STRING
	},
	ara: {
		type: DataTypes.BOOLEAN
	},
	arb: {
		type: DataTypes.BOOLEAN
	},
	arc: {
		type: DataTypes.BOOLEAN
	},
	ard: {
		type: DataTypes.BOOLEAN
	},
	are: {
		type: DataTypes.BOOLEAN
	},
	arf: {
		type: DataTypes.BOOLEAN
	},
	arg: {
		type: DataTypes.BOOLEAN
	},
	eapa: {
		type: DataTypes.BOOLEAN
	},
	eapb: {
		type: DataTypes.BOOLEAN
	},
	eapc: {
		type: DataTypes.BOOLEAN
	},
	eapd: {
		type: DataTypes.BOOLEAN
	},
	eape: {
		type: DataTypes.BOOLEAN
	},
	eapf: {
		type: DataTypes.BOOLEAN
	},
	eapg: {
		type: DataTypes.BOOLEAN
	},
	eaaa: {
		type: DataTypes.BOOLEAN
	},
	eaab: {
		type: DataTypes.BOOLEAN
	},
	eaac: {
		type: DataTypes.BOOLEAN
	},
	eaad: {
		type: DataTypes.BOOLEAN
	},
	eaae: {
		type: DataTypes.BOOLEAN
	},
	medicamento1: {
		type: DataTypes.STRING
	},
	dose1: {
		type: DataTypes.STRING
	},
	inicio1: {
		type: DataTypes.STRING
	},
	fim1: {
		type: DataTypes.STRING
	},
	motivo1: {
		type: DataTypes.STRING
	},
	medicamento2: {
		type: DataTypes.STRING
	},
	dose2: {
		type: DataTypes.STRING
	},
	inicio2: {
		type: DataTypes.STRING
	},
	fim2: {
		type: DataTypes.STRING
	},
	motivo2: {
		type: DataTypes.STRING
	},
	medicamento3: {
		type: DataTypes.STRING
	},
	dose3: {
		type: DataTypes.STRING
	},
	inicio3: {
		type: DataTypes.STRING
	},
	fim3: {
		type: DataTypes.STRING
	},
	motivo3: {
		type: DataTypes.STRING
	},
	medicamento4: {
		type: DataTypes.STRING
	},
	dose4: {
		type: DataTypes.STRING
	},
	inicio4: {
		type: DataTypes.STRING
	},
	fim4: {
		type: DataTypes.STRING
	},
	motivo4: {
		type: DataTypes.STRING
	},
	medicamento5: {
		type: DataTypes.STRING
	},
	dose5: {
		type: DataTypes.STRING
	},
	inicio5: {
		type: DataTypes.STRING
	},
	fim5: {
		type: DataTypes.STRING
	},
	motivo5: {
		type: DataTypes.STRING
	},
	medicamento6: {
		type: DataTypes.STRING
	},
	dose6: {
		type: DataTypes.STRING
	},
	inicio6: {
		type: DataTypes.STRING
	},
	fim6: {
		type: DataTypes.STRING
	},
	motivo6: {
		type: DataTypes.STRING
	},
	medicamento7: {
		type: DataTypes.STRING
	},
	dose7: {
		type: DataTypes.STRING
	},
	inicio7: {
		type: DataTypes.STRING
	},
	fim7: {
		type: DataTypes.STRING
	},
	motivo7: {
		type: DataTypes.STRING
	},
	ppddata: {
		type: DataTypes.DATEONLY
	},
	ppdresultado: {
		type: DataTypes.STRING
	},
	rxtoraxdata: {
		type: DataTypes.DATEONLY
	},
	rxtoraxresultado: {
		type: DataTypes.STRING
	},
	rxtoraxalteracao: {
		type: DataTypes.STRING
	},
	bhcgdata: {
		type: DataTypes.DATEONLY
	},
	bhcgjustificativa: {
		type: DataTypes.STRING
	},
	infeccaoviral: {
		type: DataTypes.BOOLEAN
	},
	hepatite: {
		type: DataTypes.BOOLEAN
	},
	infeccaobacteriana: {
		type: DataTypes.BOOLEAN
	},
	neoplasia: {
		type: DataTypes.BOOLEAN
	},
	anemia: {
		type: DataTypes.BOOLEAN
	},
	alteracaohepatica: {
		type: DataTypes.BOOLEAN
	},
	das28: {
		type: DataTypes.STRING
	},
	cdai: {
		type: DataTypes.STRING
	},
	sdai: {
		type: DataTypes.STRING
	},
	basdai: {
		type: DataTypes.STRING
	},
	asdas: {
		type: DataTypes.STRING
	},
	mda: {
		type: DataTypes.STRING
	},
	eva: {
		type: DataTypes.STRING
	}
}, {
	sequelize,
	modelName: 'relatorios'
});

module.exports = Relatorios
