// const { Model } = require('sequelize');
// const database = require('../../database/database')
// const sequelize = database.sequelize;
const Medicamentos = require('../../models/cadastro/medicamentos')
const Nomescomerciais = require('../../models/cadastro/nomescomerciais')
const Apresentacoes = require('../../models/cadastro/apresentacoes')
const Posologias = require('../../models/cadastro/posologias')

//class MedicamentoData extends Model { }

Medicamentos.count().then(data =>

	data == 0 && (

		Medicamentos.bulkCreate([
			{
				farmaco: "Abatacepte",
				lme: true,
				controlado: false,
				favorito: true,
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Trazer a medicação para aplicação dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável. \r\n" +
					"- Agendar a infusão com antecedência se possível.\r\n" +
					"- Aplicar somente em Centro de Infusão habilitado.\r\n",
				abreviatura: "ABT",
				classe: "MMCDB",
				nomescomerciais: [
					{
						nomefantasia: "Orencia"
					}
				],
				apresentacoes: [
					{
						descricao: "250mg Inj Fr Amp",
						uso: "uso externo"
					},
					{
						descricao: "250mg Inj Fr Amp",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 4 semanas.",
						quantidade: "8",
						forma: "frascos em três meses"
					},
					{
						posologia: "Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 4 semanas.",
						quantidade: "12",
						forma: "frascos em três meses"
					},
					{
						posologia: "Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 4 semanas.",
						quantidade: "16",
						forma: "frascos em três meses"
					},
					{
						posologia: "Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "6",
						forma: "frascos em três meses"
					},
					{
						posologia: "Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "9",
						forma: "frascos em três meses"
					},
					{
						posologia: "Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "12",
						forma: "frascos em três meses"
					},
					{
						posologia: "Aplique 01 ampola (seringa) no subcutâneo uma vez por semana.",
						quantidade: "12",
						forma: "frascos em três meses"
					},
				]
			},
			{
				farmaco: "Acetilcisteína",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Fluimucil"
					},
				],
				apresentacoes: [
					{
						descricao: "40mg/mL Xpe",
						uso: "uso interno",
					},
					{
						descricao: "Granulado D 600 mg",
						uso: "uso interno",
					},
					{
						descricao: "200mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 15mL (600 mg) uma vez ao dia, de preferência à noite, por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Dissolver 01 envelope em um copo d’água (200mL) em temperatura ambiente e ingira em seguida. Não se deve guardar a solução"
							+ "Tome um envelope dissolvido uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido de 8 em 8 horas por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Acetilsalicílico, Ácido",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "AAS",
				nomescomerciais: [
					{
						nomefantasia: "Aspirina Prevent"
					},
					{
						nomefantasia: "AAS Infantil"
					},
				],
				apresentacoes: [
					{
						descricao: "100mg Comp Ver",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido após almoço.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Aciclovir",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Zovirax"
					},
				],
				apresentacoes: [
					{
						descricao: "200mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "400mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "50mg/g Creme",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Tome 01' comprimido (200 mg), de 4 em 4 horas por 7 dias.\r\nPule a dose da madrugada.",
						quantidade: "35",
						forma: "comp"
					},
					{
						posologia: "Tome 02 comprimidos (800 mg), de 4 em 4 horas por 7 dias.\r\nPule a dose da madrugada.",
						quantidade: "70",
						forma: "comp"
					},
					{
						posologia: "Aplicar uma adequada quantidade na região afetada de 4 em 4 horas.\r\nPule a aplicação da madrugada.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Ácido Fólico",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "AF",
				nomescomerciais: [
					{
						nomefantasia: "Endofolin"
					},
					{
						nomefantasia: "Folin"
					},
				],
				apresentacoes: [
					{
						descricao: "5mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido um dia após o dia em que tomar o Metotrexate.",
						quantidade: "12",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Adalimumabe",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "MMCDB",
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Transportar a medicação somente dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável.",
				abreviatura: "ADA",
				nomescomerciais: [
					{
						nomefantasia: "Humira"
					},
				],
				apresentacoes: [
					{
						descricao: "40mg Inj Ser",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplique 01 ampola (seringa) [40mg] no subcutâneo a cada 14 dias.",
						quantidade: "6",
						forma: "ampolas (seringas) em três meses",
					},
					{
						posologia: "Aplique 01 ampola (seringa) [40mg] no subcutâneo uma vez por semana.",
						quantidade: "12",
						forma: "ampolas (seringas) em três meses",
					},
					{
						posologia: "Semana 0: Aplicar 4 ampolas (seringas) [160 mg] por via subcutânea no mesmo dia.\n\r" +
							"Semana 2: Aplicar 2 ampolas (seringas) [80 mg] por via subcutânea no mesmo dia.\r\n" +
							"Semana 4 em diante: Aplicar 2 ampolas (seringas) [40 mg] por via subcutânea a cada 14 dias",
						quantidade: "10",
						forma: "ampolas (seringas) em três meses",
					},
					{
						posologia: "Semana 0: Aplicar 2 ampolas (seringas) [80 mg] por via subcutânea no mesmo dia.\r\n" +
							"Semana 2 em diante: Aplicar 2 ampolas (seringas) [40 mg] por via subcutânea a cada 14 dias",
						quantidade: "10",
						forma: "ampolas (seringas) em três meses"
					},
				]
			},
			{
				farmaco: "Albendazol",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Zentel"
					},
					{
						nomefantasia: "Parasin"
					},
				],
				apresentacoes: [
					{
						descricao: "400mg Comp Mast",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 3 dias.",
						quantidade: "3",
						forma: "Comp"
					},
				]
			},
			{
				farmaco: "Alendronato",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "ALD",
				nomescomerciais: [
					{
						nomefantasia: "Fosamax"
					},
				],
				apresentacoes: [
					{
						descricao: "70mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez por semana.\n\rTome pela manhã em jejum. Não deitar após tomar a medicação.",
						quantidade: "4",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Alopurinol",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "Não inicie, muito menos interrompa o uso dessa medicação se estiver com crise de gota.",
				abreviatura: "ALP",
				nomescomerciais: [
					{
						nomefantasia: "Zyloric"
					},
				],
				apresentacoes: [
					{
						descricao: "100mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "300mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Amitriptilina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "AMT",

				nomescomerciais: [
					{
						nomefantasia: "Tryptanol"
					},
					{
						nomefantasia: "Amytril"
					},
				],
				apresentacoes: [
					{
						descricao: "25mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "75mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido a noite próximo à hora de dormir.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 02 comprimidos a noite próximo à hora de dormir. ",
						quantidade: "60",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Amoxicilina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "dose para suspensão: 25 mg/ kg / dia",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Amoxil BD"
					},
					{
						nomefantasia: "Novocilin"
					},
				],
				apresentacoes: [
					{
						descricao: "875mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "400mg/5mL Pó Susp Or",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 7 dias.",
						quantidade: "14",
						forma: "comp"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 10 dias.",
						quantidade: "20",
						forma: "comp"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 14 dias.",
						quantidade: "28",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Amoxicilina + Clavulanato",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",

				nomescomerciais: [
					{
						nomefantasia: "Clavulin BD"
					},
					{
						nomefantasia: "Novamox"
					},
				],
				apresentacoes: [
					{
						descricao: "875mg + 125mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 7 dias.",
						quantidade: "14",
						forma: "comp"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 10 dias.",
						quantidade: "20",
						forma: "comp"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 14 dias.",
						quantidade: "28",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Anlodipino",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "ANL",

				nomescomerciais: [
					{
						nomefantasia: "Norvasc"
					},
					{
						nomefantasia: "Naprix"
					},
				],
				apresentacoes: [
					{
						descricao: "5,0mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "10mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Atenolol",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "ATL",

				nomescomerciais: [
					{
						nomefantasia: "Atenol"
					},
				],
				apresentacoes: [
					{
						descricao: "25mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "50mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Atorvastatina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",

				nomescomerciais: [
					{
						nomefantasia: "Citalor"
					},
				],
				apresentacoes: [
					{
						descricao: "10mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "20mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "40mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido a noite próximo à hora de dormir.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Azatioprina",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "MMCDS",
				orientacoes: "",
				abreviatura: "AZA",

				nomescomerciais: [
					{
						nomefantasia: "Imuran"
					},
				],
				apresentacoes: [
					{
						descricao: "50mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 8 em 8 horas.",
						quantidade: "90",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 02 comprimidos pela manhã e 01 comprimido a noite.",
						quantidade: "90",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 02 comprimidos de 12 em 12 horas.",
						quantidade: "120",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 02 comprimidos de 8 em 8 horas.",
						quantidade: "180",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Azitromicina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Zitromax"
					},
					{
						nomefantasia: "Selimax"
					},
				],
				apresentacoes: [
					{
						descricao: "500mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 3 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 02 comprimidos dose única.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Belimumabe",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "MMCDB",
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Trazer a medicação para aplicação dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável. \r\n" +
					"- Agendar a infusão com antecedência se possível.\r\n" +
					"- Aplicar somente em Centro de Infusão habilitado.\r\n",
				abreviatura: "BLM",
				nomescomerciais: [
					{
						nomefantasia: "Belysta"
					},
				],
				apresentacoes: [
					{
						descricao: "120mg Fr Amp",
						uso: "uso externo",
					},
					{
						descricao: "400mg Fr Amp",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 4 semanas.",
						quantidade: "8",
						forma: "frascos em três meses",
					},
					{
						posologia: "Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 4 semanas.",
						quantidade: "12",
						forma: "frascos em três meses",
					},
					{
						posologia: "Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 4 semanas.",
						quantidade: "16",
						forma: "frascos em três meses",
					},
					{
						posologia: "Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "6",
						forma: "frascos em três meses",
					},
					{
						posologia: "Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "9",
						forma: "frascos em três meses",
					},
					{
						posologia: "Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "12",
						forma: "frascos em três meses"
					},
				]
			},
			{
				farmaco: "Benzilpenicilina Benzatina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Benzetacil"
					},
				],
				apresentacoes: [
					{
						descricao: "600.000UI Sus Inj",
						uso: "uso externo",
					},
					{
						descricao: "1.200.000UI Sus Inj",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Aplique 01 frasco-ampola intramuscular profunda (glúteo) dose única.",
						quantidade: "1",
						forma: "ampola"
					},
					{
						posologia: "Aplique 01 frasco-ampola intramuscular profunda (glúteo) a cada 21 dias.",
						quantidade: "2",
						forma: "ampolas por mês"
					},
				]
			},
			{
				farmaco: "Betametasona",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CORTICOIDE",
				orientacoes: "",
				abreviatura: "BMS",
				nomescomerciais: [
					{
						nomefantasia: "Duoflan"
					},
					{
						nomefantasia: "Diprospam"
					},
				],
				apresentacoes: [
					{
						descricao: "6,43 + 2,63mg Inj",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Aplique 01 frasco-ampola intramuscular profunda (glúteo) dose única.",
						quantidade: "1",
						forma: "ampola"
					},
				]
			},
			{
				farmaco: "Betametasona",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CORTICOIDE",
				orientacoes: "Colocar uma pequena quantidade que cubra a ponta do dedo indicador.\n\r" + "Não utilizar maiores quantidades do que essa.\n\r"
					+ "Aplicar até ter uma fina camada. Não deixar uma grossa camada.",
				abreviatura: "BMS",
				nomescomerciais: [
					{
						nomefantasia: "Betnovat"
					},
				],
				apresentacoes: [
					{
						descricao: "0,64mg/mL Loç Derm",
						uso: "uso externo",
					},
					{
						descricao: "0,64mg/G Crem Derm",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Aplique uma quantidade adequada como explicado em consulta na região afetada de 12 em 12 horas por 7 dias.",
						quantidade: "1",
						forma: "frasco"
					},
					{
						posologia: "Aplique uma quantidade adequada como explicado em consulta na região afetada de 12 em 12 horas por 14 dias.",
						quantidade: "1",
						forma: "frasco"
					},
					{
						posologia: "Aplique uma quantidade adequada como explicado em consulta na região afetada de 12 em 12 horas até melhora da lesão.",
						quantidade: "2",
						forma: "frascos"
					},
				]
			},
			{
				farmaco: "Bosentana",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "VASOATIVO",
				orientacoes: "",
				abreviatura: "BST",
				nomescomerciais: [
					{
						nomefantasia: "Tracleer"
					},
				],
				apresentacoes: [
					{
						descricao: "62,5mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "125mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 02 comprimidos pela manhã e 01 comprimido a noite.",
						quantidade: "90",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 02 comprimidos de 12 em 12 horas.",
						quantidade: "120",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Bromoprida",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Digesan"
					},
					{
						nomefantasia: "Plamet"
					},
				],
				apresentacoes: [
					{
						descricao: "10mg Cap Dura",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 cápsula de 12 em 12 horas se náusea ou vômitos.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 cápsula de 12 em 12 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Bupropiona",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Zyban"
					},
					{
						nomefantasia: "Zetron"
					},
					{
						nomefantasia: "Bup"
					},
				],
				apresentacoes: [
					{
						descricao: "150mg Comp. Rev.",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Bupropiona",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Wellbutrin XL"
					},
					{
						nomefantasia: "Zetron XL"
					},
				],
				apresentacoes: [
					{
						descricao: "300mg Comp. Rev.",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Cálcio (cálcio citrato malato) + Vitamina D3 + Vitamina K + Magnésio",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "SUPLEMENTO",
				orientacoes: "",
				abreviatura: "CDKM",
				nomescomerciais: [
					{
						nomefantasia: "Caldê KM"
					},
				],
				apresentacoes: [
					{
						descricao: "250mg+5mcg+45mcg+50mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido após almoço.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Captopril",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "CPT",
				nomescomerciais: [
					{
						nomefantasia: "Captosen"
					},
				],
				apresentacoes: [
					{
						descricao: "25mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "50mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Carmelose Sódica",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Salivan"
					},
				],
				apresentacoes: [
					{
						descricao: "10mg/mL Spray",
						uso: "uso oral"
					},
				],
				posologias: [
					{
						posologia: "Aplicar varios jatos dentro da boca sempre que necessário.",
						quantidade: "3",
						forma: "frasos por mês"
					},
				]
			},
			{
				farmaco: "Hialuronato de sódio",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Hyabak"
					},
				],
				apresentacoes: [
					{
						descricao: "0,15g/100mL",
						uso: "uso oftálmico"
					}
				],
				posologias: [
					{
						posologia: "Pingar uma gota em ambos os olhos uma a duas vezes ao dia.",
						quantidade: "2",
						forma: "frasos por mês"
					},
				]
			},
			{
				farmaco: "Carvedilol",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "CVD",
				nomescomerciais: [
					{
						nomefantasia: "Coreg"
					},
					{
						nomefantasia: "Cardilol"
					},
				],
				apresentacoes: [
					{
						descricao: "3,125mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "6,25mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "12,5mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "25mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Cefadroxila",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Cefamox"
					},
				],
				apresentacoes: [
					{
						descricao: "500mg Cap Dura",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 cápsula de 12 em 12 horas por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Cefalexina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Keflex"
					},
				],
				apresentacoes: [
					{
						descricao: "500mg Drag",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 drágea de 6 em 6 horas por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Ceftriaxona",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Rocefin"
					},
				],
				apresentacoes: [
					{
						descricao: "500mg Pó Sol Inj",
						uso: "uso interno",
					},
					{
						descricao: "1000mg Pó Sol Inj",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Aplique 01 ampola intramuscular profunda (glúteo) uma vez ao dia por 7 dias.",
						quantidade: "7",
						forma: "ampolas"
					},
					{
						posologia: "Aplique 01 ampola intramuscular profunda (glúteo) de 12 em 12 horas por 7 dias.",
						quantidade: "14",
						forma: "ampolas"
					},
				]
			},
			{
				farmaco: "Celecoxibe",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIINFLAMATORIO",
				orientacoes: "Tomar sempre de estômago cheio",
				abreviatura: "CLB",
				nomescomerciais: [
					{
						nomefantasia: "Celebra"
					},
				],
				apresentacoes: [
					{
						descricao: "100mg Cap Dura",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 cápsula de 12 em 12 horas pr 30 dias.",
						quantidade: "60",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 cápsula de 12 em 12 horas pr 60 dias.",
						quantidade: "60",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Celecoxibe",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIINFLAMATORIO",
				orientacoes: "Tomar sempre de estômago cheio",
				abreviatura: "CLB",
				nomescomerciais: [
					{
						nomefantasia: "Celebra"
					},
					{
						nomefantasia: "Dicoxibe"
					},
					{
						nomefantasia: "Foxis"
					},
				],
				apresentacoes: [
					{
						descricao: "200mg Cap Dura",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 cápsula de 12 em 12 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 cápsula de 12 em 12 horas por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 cápsula de 12 em 12 horas por 10 dias.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tome 01 cápsula de 12 em 12 horas por 14 dias.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tome 01 cápsula de 12 em 12 horas por 30 dias.",
						quantidade: "60",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 cápsula de 12 em 12 horas por 60 dias.",
						quantidade: "60",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Certolizumabe",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "MMCDB",
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Transportar a medicação somente dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável.",
				abreviatura: "CTZ",
				nomescomerciais: [
					{
						nomefantasia: "Cimzia"
					},
				],
				apresentacoes: [
					{
						descricao: "200mg/mL Inj Ser",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Semana 0: Aplicar 2 ampolas (seringas) [400 mg] por via subcutânea no mesmo dia.\n\r" +
							"Semana 2: Aplicar 2 ampolas (seringas) [400 mg] por via subcutânea no mesmo dia.\r\n" +
							"Semana 4: Aplicar 2 ampolas (seringas) [400 mg] por via subcutânea no mesmo dia.\r\n" +
							"Semana 6 em diante: Aplicar 1 ampola (seringa) [200 mg] por via subcutânea a cada 14 dias",
						quantidade: "8",
						forma: "frascos em três meses"
					},
					{
						posologia: "Aplique 01 ampola (seringa) [200mg] no subcutâneo a cada 14 dias.",
						quantidade: "6",
						forma: "frascos em três meses"
					},
					{
						posologia: "Aplique 02 ampolas (seringas) [400mg] no subcutâneo no mesmo dia a cada 28 dias.",
						quantidade: "6",
						forma: "frascos em três meses"
					},
				]
			},
			{
				farmaco: "Cetoconazol",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "Tomar de estômago cheio.",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Nizoral"
					},
					{
						nomefantasia: "Candoral"
					},
				],
				apresentacoes: [
					{
						descricao: "200mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "20mg/g Crem Derm",
						uso: "uso externo",
					},
					{
						descricao: "20mg/g Xamp",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 14 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Aplicar uma adequada quantidade na região afetada uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Aplicar uma adequada quantidade na região afetada uma vez ao dia por 14 dias.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Cetoprofeno + Omeprazol",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "ANTIINFLAMATORIO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Bi-Profenid Protect"
					},
				],
				apresentacoes: [
					{
						descricao: "200mg+20mg Cap",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 10 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 14 dias.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Cetoprofeno",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "ANTIINFLAMATORIO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Profenid Gel"
					},
				],
				apresentacoes: [
					{
						descricao: "25mg/g Gel",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Aplicar uma adequada quantidade na região afetada uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Aplicar uma adequada quantidade na região afetada uma vez ao dia por 14 dias.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Ciclobenzaprina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "Cz",
				nomescomerciais: [
					{
						nomefantasia: "Miosan"
					},
					{
						nomefantasia: "Cizax"
					},
				],
				apresentacoes: [
					{
						descricao: "5mg Comp Rev)",
						uso: "uso interno",
					},
					{
						descricao: "10mg Comp Rev)",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido a noite próximo à hora de dormir por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido a noite próximo à hora de dormir por 10 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido a noite próximo à hora de dormir.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Ciclofosfamida",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "MMCDS",
				orientacoes: "",
				abreviatura: "CYC",
				nomescomerciais: [
					{
						nomefantasia: "Genuxal"
					},
				],
				apresentacoes: [
					{
						descricao: "50mg Comp Rev)",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Ciclosporina",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "MMCDS",
				orientacoes: "",
				abreviatura: "CsA",
				nomescomerciais: [
					{
						nomefantasia: "Sandimmun Neoral"
					},
				],
				apresentacoes: [
					{
						descricao: "10mg Cáp",
						uso: "uso interno",
					},
					{
						descricao: "25mg Cáp",
						uso: "uso interno",
					},
					{
						descricao: "50mg Cáp",
						uso: "uso interno",
					},
					{
						descricao: "100mg Cáp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 cápsula de 12 em 12 horas.",
						quantidade: "60",
						forma: "cap por mês"
					},
				]
			},
			{
				farmaco: "Ciprofloxacino",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Cipro"
					},
					{
						nomefantasia: "Floxocip"
					},
				],
				apresentacoes: [
					{
						descricao: "500mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 10 dias.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 14 dias.",
						quantidade: "2",
						forma: "caixas"
					},
				]
			},
			{
				farmaco: "Citalopram",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Cipramil"
					},
					{
						nomefantasia: "Procimax"
					},
				],
				apresentacoes: [
					{
						descricao: "20mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Claritromicina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Klaricid UD"
					},
				],
				apresentacoes: [
					{
						descricao: "500mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia com alimentos (estômago cheio) por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido uma vez ao dia com alimentos (estômago cheio) por 10 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido uma vez ao dia com alimentos (estômago cheio) por 14 dias.",
						quantidade: "2",
						forma: "caixas"
					},
				]
			},
			{
				farmaco: "Clindamicina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "Tomar sempre com um copo de água bem cheio.",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Dalacin C"
					},
				],
				apresentacoes: [
					{
						descricao: "300mg Cap Dura",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 10 dias.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 14 dias.",
						quantidade: "2",
						forma: "caixas"
					},
				]
			},
			{
				farmaco: "Clobetasol",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "CORTICOIDE",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Psorex"
					},
					{
						nomefantasia: "Psorex"
					},
				],
				apresentacoes: [
					{
						descricao: "0,5mg/g Crem Derm",
						uso: "uso externo",
					},
					{
						descricao: "0,5mg/g Pom Derm",
						uso: "uso externo",
					},
					{
						descricao: "0,5mg/g Sol Capilar",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Aplicar uma fina camada na região afetada uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Aplicar uma fina camada na região afetada uma vez ao dia por 14 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Aplicar uma fina camada na região afetada uma vez ao dia até melhora da lesão.",
						quantidade: "3",
						forma: "caixas"
					},
				]
			},
			{
				farmaco: "Clopidogrel",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Plavix"
					},
				],
				apresentacoes: [
					{
						descricao: "75mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido após almoço.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Clortalidona",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Higroton"
					},
				],
				apresentacoes: [
					{
						descricao: "25mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "50mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido pela manhã.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Codeína",
				lme: true,
				controlado: true,
				favorito: false,
				classe: "OPIOIDE",
				orientacoes: "",
				abreviatura: "CDN",
				nomescomerciais: [
					{
						nomefantasia: "Codein"
					},
				],
				apresentacoes: [
					{
						descricao: "30mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "3mg/mL Sol",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido de 6 em 6 horas se dor.",
						quantidade: "120",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 8 em 8 horas se dor.",
						quantidade: "90",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas se dor.",
						quantidade: "60",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Codeína + Paracetamol",
				lme: true,
				controlado: true,
				favorito: false,
				classe: "OPIOIDE",
				orientacoes: "",
				abreviatura: "CDN_PCT",
				nomescomerciais: [
					{
						nomefantasia: "Tylex"
					},
					{
						nomefantasia: "Codex"
					},
					{
						nomefantasia: "Paco"
					},
				],
				apresentacoes: [
					{
						descricao: "30mg+500mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido de 6 em 6 horas se dor.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tome 01 comprimido de 8 em 8 horas se dor.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas se dor.",
						quantidade: "2",
						forma: "caixas"
					},
				]
			},
			{
				farmaco: "Colchicina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "Cx",
				nomescomerciais: [
					{
						nomefantasia: "Colchis"
					},
				],
				apresentacoes: [
					{
						descricao: "0,5mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "1,0mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido de 6 em 6 horas.",
						quantidade: "120",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 8 em 8 horas.",
						quantidade: "90",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 30 em 30 minutos até que haja melhora das dores, ou se houver náusea, vômito ou diarréia.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Dapsona",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "MMCDS",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Dapsona"
					},
				],
				apresentacoes: [
					{
						descricao: "100mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Deflazacorte",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CORTICOIDE",
				orientacoes: "",
				abreviatura: "DFZ",
				nomescomerciais: [
					{
						nomefantasia: "Calcort"
					},
					{
						nomefantasia: "Deflanil"
					},
				],
				apresentacoes: [
					{
						descricao: "30mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido pela manhã por 14 dias, então tome 1/2 (meio) comprimido pela manhã até o retorno.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido pela manhã por 20 dias, então tome 1/2 (meio) comprimido pela manhã até o retorno.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido pela manhã por 7 dias, então tome 1/2 (meio) comprimido pela manhã mais 7 dias, então pare.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tome 01 comprimido pela manhã.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Deflazacorte",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CORTICOIDE",
				orientacoes: "",
				abreviatura: "DFZ",
				nomescomerciais: [
					{
						nomefantasia: "Deflanil"
					},
				],
				apresentacoes: [
					{
						descricao: "7,5mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 02 comprimidos pela manhã por 14 dias, então tome 1 comprimido pela manhã até o retorno.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 02 comprimidos pela manhã por 20 dias, então tome 1 comprimido pela manhã até o retorno.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 02 comprimidos pela manhã.",
						quantidade: "60",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido pela manhã.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Deflazacorte",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CORTICOIDE",
				orientacoes: "",
				abreviatura: "DFZ",
				nomescomerciais: [
					{
						nomefantasia: "Calcort"
					},
				],
				apresentacoes: [
					{
						descricao: "6mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 02 comprimidos pela manhã por 14 dias, então tome 1 comprimido pela manhã até o retorno.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 02 comprimidos pela manhã por 20 dias, então tome 1 comprimido pela manhã até o retorno.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 02 comprimidos pela manhã.",
						quantidade: "60",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido pela manhã.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Denosumabe",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "OSTEOMETABOLICO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Prolia"
					},
				],
				apresentacoes: [
					{
						descricao: "60mg/mL Inj Fr",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Aplique 01 frasco (injeção) subcutânea única de 60 mg administrada uma vez a cada 6 meses.",
						quantidade: "2",
						forma: "frasco por ano"
					},
				]
			},
			{
				farmaco: "Desloratadina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Desalex"
					},
				],
				apresentacoes: [
					{
						descricao: "5mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 14 dias.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 28 dias.",
						quantidade: "2",
						forma: "caixas"
					},
				]
			},
			{
				farmaco: "Desvenlafaxina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Pristiq"
					},
				],
				apresentacoes: [
					{
						descricao: "50mg Comp Rev Lib Prol",
						uso: "uso interno",
					},
					{
						descricao: "100mg Comp Rev Lib Prol",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia, preferencialmente pela manhã.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Dexclorfeniramina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Polaramine"
					},
				],
				apresentacoes: [
					{
						descricao: "2mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido de 8 em 8 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido de 8 em 8 horas por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Dexlansoprazol ",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Dexilant"
					},
				],
				apresentacoes: [
					{
						descricao: "30mg Cáp Lib Ret",
						uso: "uso interno",
					},
					{
						descricao: "60mg Cáp Lib Ret",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 cápsula pela manhã em jejum por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 cápsula pela manhã em jejum por 14 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 cápsula pela manhã em jejum por 28 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 cápsula pela manhã em jejum",
						quantidade: "30",
						forma: "cap por mês"
					},
				]
			},
			{
				farmaco: "Diacereina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "Tomar sempre de estômago cheio.",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Artrodar"
					},
				],
				apresentacoes: [
					{
						descricao: "50mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 20 dias, então tome 01 comprimido de 12 em 12 horas por 4 meses.",
						quantidade: "60",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Diclofenaco",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "ANTIINFLAMATORIO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Cataflam"
					},
					{
						nomefantasia: "Voltaren"
					},
				],
				apresentacoes: [
					{
						descricao: "50mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido de 8 em 8 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido de 8 em 8 horas por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Domperidona",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Motilium"
					},
				],
				apresentacoes: [
					{
						descricao: "10mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido 30 minutos antes do café, do almoço e da janta.",
						quantidade: "90",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Duloxetina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "DLX",
				nomescomerciais: [
					{
						nomefantasia: "Cymbalta"
					},
					{
						nomefantasia: "Velija"
					},
					{
						nomefantasia: "Dual"
					},
				],
				apresentacoes: [
					{
						descricao: "30mg Cap",
						uso: "uso interno",
					},
					{
						descricao: "60mg Cap",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Iniciar com as amostras de 30mg.\r\nTome 01 cápsula pela manhã.",
						quantidade: "30",
						forma: "cap por mês"
					},
					{
						posologia: "Tome 01 cápsula pela manhã.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Enalapril",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "ENL",
				nomescomerciais: [
					{
						nomefantasia: "Renitec"
					},
				],
				apresentacoes: [
					{
						descricao: "5mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "10mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Enoxaparina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Clexane"
					},
				],
				apresentacoes: [
					{
						descricao: "20 mg/0,2 mL",
						uso: "uso externo",
					},
					{
						descricao: "40 mg/0,4 mL",
						uso: "uso externo",
					},
					{
						descricao: "60 mg/0,6 mL",
						uso: "uso externo",
					},
					{
						descricao: "80 mg/0,8 mL",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Aplique 1 frasco subcutâneo uma vez ao dia.",
						quantidade: "30",
						forma: "frascos por mês"
					},
					{
						posologia: "Aplique 1 frasco subcutâneo de 12 em 12 horas.",
						quantidade: "60",
						forma: "frascos por mês"
					},
					{
						posologia: "Aplique 1 frasco subcutâneo uma vez ao dia até a 16ª semana de gestação, então aplique 01 frasco subcutâneo de 12 em 12 horas até a 6ª de puerpério.",
						quantidade: "30 a 60",
						forma: "frascos por mês"
					},
				]
			},
			{
				farmaco: "Escitalopram",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Lexapro"
					},
					{
						nomefantasia: "Reconter"
					},
				],
				apresentacoes: [
					{
						descricao: "10mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "15mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "20mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido pela manhã.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Esomeprazol",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "EMZ",
				nomescomerciais: [
					{
						nomefantasia: "Nexium"
					},
				],
				apresentacoes: [
					{
						descricao: "20mg Comp Rev De Lib Retard",
						uso: "uso interno",
					},
					{
						descricao: "40mg Comp Rev De Lib Retard",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido pela manhã .",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Espironolactona",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "ESPL",
				nomescomerciais: [
					{
						nomefantasia: "Aldactone"
					},
				],
				apresentacoes: [
					{
						descricao: "25mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "100mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido pela manhã.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Etanercepte",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "MMCDB",
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR.\r\n" +
					"- Transportar a medicação somente dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável.",
				abreviatura: "ETN",
				nomescomerciais: [
					{
						nomefantasia: "Enbrel"
					},
				],
				apresentacoes: [
					{
						descricao: "25mg Inj Ser",
						uso: "uso externo",
					},
					{
						descricao: "50mg Inj Ser",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplique 01 ampola (seringa) no subcutâneo uma vez por semana.",
						quantidade: "12",
						forma: "ampolas (seringas) em três meses"
					},
				]
			},
			{
				farmaco: "Etodolaco",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "ANTIINFLAMATORIO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Flancox"
					},
				],
				apresentacoes: [
					{
						descricao: "500mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Etoricoxibe",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIINFLAMATORIO",
				orientacoes: "Tomar sempre de estômago cheio",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Arcoxia"
					},
					{
						nomefantasia: "Hetori"
					},
				],
				apresentacoes: [
					{
						descricao: "60mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "90mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 14 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 28 dias.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tome 01 comprimido uma vez ao dia por 56 dias.",
						quantidade: "4",
						forma: "caixas"
					},
				]
			},
			{
				farmaco: "Fanciclovir",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Penvir"
					},
				],
				apresentacoes: [
					{
						descricao: "500mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas por 14 dias.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Fenofibrato",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Lipidil"
					},
				],
				apresentacoes: [
					{
						descricao: "200mg Cap",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido durante o almoço ou janta.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Fluconazol",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Zoltec"
					},
					{
						nomefantasia: "Fluconal"
					},
				],
				apresentacoes: [
					{
						descricao: "50mg Cap Dura",
						uso: "uso interno",
					},
					{
						descricao: "150mg Cap Dura",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 cápsula dose única.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 cápsula uma vez por semana por 2 semanas.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 cápsula uma vez por semana por 4 semanas.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tome 01 cápsula uma vez por semana por 6 semanas.",
						quantidade: "3",
						forma: "caixas"
					},
				]
			},
			{
				farmaco: "Fluoxetina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "FXT",
				nomescomerciais: [
					{
						nomefantasia: "Prozac"
					},
					{
						nomefantasia: "Verotina"
					},
				],
				apresentacoes: [
					{
						descricao: "20mg Cap Dura",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 cápsula pela manhã.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 02 cápsulas pela manhã.",
						quantidade: "60",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Furosemida",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Lasix"
					},
				],
				apresentacoes: [
					{
						descricao: "40mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido pela manhã.",
						quantidade: "30",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Gabapentina",
				lme: true,
				controlado: true,
				favorito: false,
				classe: "ANTICONVULSIVANTE",
				orientacoes: "",
				abreviatura: "GBP",
				nomescomerciais: [
					{
						nomefantasia: "Neurontin"
					},
					{
						nomefantasia: "Gabaneurin"
					}
				],
				apresentacoes: [
					{
						descricao: "300mg Cap Dura",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas",
						quantidade: "60",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 8 em 8 horas",
						quantidade: "90",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido pela manhã e 02 comprimidos a noite",
						quantidade: "90",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido pela manha, 01 comprimido a tarde e 02 comprimidos a noite.",
						quantidade: "120",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 02 comprimidos de 12 em 12 horas",
						quantidade: "120",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 02 comprimidos de 8 em 8 horas",
						quantidade: "180",
						forma: "comp por mês"
					},
					{
						posologia:
							"Primeira semana: tome 01 comprimido a noite.\r\n" +
							"Segunda semana: tome 01 comprimido de manhã e 01 comprimidos a noite.\r\n" +
							"Terceira a sexta semana: tome 01 comprimido de manhã, 01 comprimido a tarde e 01 comprimidos a noite.\r\n" +
							"Sétima a décima semana: tome 01 comprimido de manhã, 01 comprimido a tarde e 02 comprimidos a noite. \r\n" +
							"Décima primeira a décima quarta semana: tome 01 comprimido de manhã, 02 comprimidos a tarde e 2 comprimidos a noite.\r\n" +
							"Décima quinta semana em diante: tome 02 comprimido de 8 em 8 horas.",
						quantidade: "180",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Glibenclamina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Daonil"
					}
				],
				apresentacoes: [
					{
						descricao: "5,0mg Comp",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Glicosamina + Condroitina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "SUPLEMENTO",
				orientacoes: "",
				abreviatura: "G_C",
				nomescomerciais: [
					{
						nomefantasia: "CondroFlex"
					},
					{
						nomefantasia: "Artrolive"
					}
				],
				apresentacoes: [
					{
						descricao: "1,5+1,2g Pó Sol",
						uso: "uso interno"
					},
				],
				apresentacoes: [
					{
						descricao: "500mg+400mg Cap",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Colocar o conteúdo de um envelope em um copo de água (200mL).\r\n"
							+ " Aguardar 3 minutos, então mexer com um colher. \r\n"
							+ "Tomar a mistura uma vez ao dia por  6 meses.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 cápsula de 8 em 8 horas",
						quantidade: "60",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Golimumabe",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "MMCDB",
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Transportar a medicação somente dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável.",
				abreviatura: "GLM",
				nomescomerciais: [
					{
						nomefantasia: "Simponi"
					},
				],
				apresentacoes: [
					{
						descricao: "50mg Inj Ser",
						uso: "uso externo"
					},
					{
						descricao: "50mg/4mL Fra",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplique 01 ampola (seringa) no subcutâneo uma vez por mês.",
						quantidade: "3",
						forma: "ampolas (seringas) em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "Inicia-se com aplicações na semana zero e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 8 semanas.",
						quantidade: "6",
						forma: "frascos em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "Inicia-se com aplicações na semana zero e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 8 semanas.",
						quantidade: "9",
						forma: "frascos em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "Inicia-se com aplicações na semana zero e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 8 semanas.",
						quantidade: "12",
						forma: "frascos em três meses"
					},
					{
						posologia: "Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "4",
						forma: "frascos em três meses"
					},
					{
						posologia: "Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "6",
						forma: "frascos em três meses"
					},
					{
						posologia: "Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "9",
						forma: "frascos em três meses"
					},
				]
			},
			{
				farmaco: "Hidrocortisona",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CORTICOIDE",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Berlison"
					},
				],
				apresentacoes: [
					{
						descricao: "10mg/g Crem Derm",
						uso: "uso externo"
					},
					{
						descricao: "10mg/g Pom Derm",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar uma fina camada na região afetada uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Aplicar uma fina camada na região afetada uma vez ao dia por 14 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Aplicar uma fina camada na região afetada uma vez ao dia até melhora da lesão.",
						quantidade: "3",
						forma: "caixas"
					},
				]
			},
			{
				farmaco: "Hidroxicloroquina",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "MMCDS",
				orientacoes: "",
				abreviatura: "HCLQ",
				nomescomerciais: [
					{
						nomefantasia: "Reuquinol"
					},
				],
				apresentacoes: [
					{
						descricao: "400mg Comp Rev",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido em dias alternados.",
						quantidade: "15",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Ibandronato",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "OSTEOMETABOLICO",
				orientacoes: "",
				abreviatura: "IBD",
				nomescomerciais: [
					{
						nomefantasia: "Osteoban"
					},
					{
						nomefantasia: "Bonviva"
					},
				],
				apresentacoes: [
					{
						descricao: "150mg Comp. Rev",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia:
							"Tome 01 comprimido uma vez por mês.\r\n"
							+ "Tome em jejum, 60 minutos antes da ingestão alimentos.\r\n"
							+ "Tome com um copo cheio de água filtrada (180 a 240 mL).\r\n"
							+ "Você deverá estar em posição ereta: sentado, em pé ou andando.\r\n"
							+ "Você não deve deitar-se nos 60 minutos seguintes após tomar o medicamento.",
						quantidade: "30",
						forma: "comp por mês"
					},
					{
						posologia: "Tome 01 comprimido em dias alternados.",
						quantidade: "15",
						forma: "comp por mês"
					},
				]
			},
			{
				farmaco: "Ibuprofeno",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "ANTIINFLAMATORIO",
				orientacoes: "",
				abreviatura: "IBP",
				nomescomerciais: [
					{
						nomefantasia: "Advil"
					},
					{
						nomefantasia: "Alivium"
					},
				],
				apresentacoes: [
					{
						descricao: "600mg Cap Mole",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tome 01 cápsula de 12 em 12 horas somente se dor.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Imunoglobulina Humana",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "MMCDB",
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Trazer a medicação para aplicação dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável.\r\n" +
					"- Agendar a infusão com antecedência se possível.\r\n" +
					"- Aplicar somente em Centro de Infusão habilitado ou internado em hospital.\r\n",
				abreviatura: "IH",
				nomescomerciais: [
					{
						nomefantasia: "Imunoglobulina Humana"
					},
				],
				apresentacoes: [
					{
						descricao: "250mg Inj Fr Amp",
						uso: "uso externo"
					},
					{
						descricao: "125mg/mL Sol Inj",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia:
							"Fazer a aplicação de 05 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida ou internado em hospital.\r\n"
							+ "Fazer uma aplicação por dia por 5 dias consecutivos."
							+ "Infundir a pré-medicação: "
							+ "- Metilprednisolona 125 mg diluído em 100 mL correndo em 30 minutos"
							+ "- Prometazina um comprimido de 25 mg ou uma ampola de 50 mg (2 ml) intra-muscular.\r\n"
							+ "Infundir a Imunoglobulina em bomba de infusão a 0,5 mL/kg/hora na primeira hora e após a 1,0 mL/kg/hora.\r\n"
							+ "Paciente deve ser monitorizado durante a aplicação.",
						quantidade: "25",
						forma: "frascos"
					},
				]
			},
			{
				farmaco: "Infliximabe",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "MMCDB",
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Trazer a medicação para aplicação dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável. \r\n" +
					"- Agendar a infusão com antecedência se possível.\r\n" +
					"- Aplicar somente em Centro de Infusão habilitado.\r\n",
				abreviatura: "IFX",
				nomescomerciais: [
					{
						nomefantasia: "Remicade"
					},
				],
				apresentacoes: [
					{
						descricao: "10mg/ml Inj Fr Amp de 10ml",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia:
							"Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após"
							+ "a cada 8 semanas.",
						quantidade: "8",
						forma: "frascos em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após"
							+ "a cada 8 semanas.",
						quantidade: "12",
						forma: "frascos em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após"
							+ "a cada 8 semanas.",
						quantidade: "16",
						forma: "frascos em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após"
							+ "a cada 6 semanas.",
						quantidade: "8",
						forma: "frascos em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após"
							+ "a cada 6 semanas.",
						quantidade: "12",
						forma: "frascos em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após"
							+ "a cada 6 semanas.",
						quantidade: "16",
						forma: "frascos em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "04",
						forma: "frascos em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "06",
						forma: "frascos em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "08",
						forma: "frascos em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 6 semanas.",
						quantidade: "04",
						forma: "frascos em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 6 semanas.",
						quantidade: "06",
						forma: "frascos em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 6 semanas.",
						quantidade: "08",
						forma: "frascos em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "06",
						forma: "frascos em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "09",
						forma: "frascos em três meses"
					},
					{
						posologia:
							"Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida.\r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "12",
						forma: "frascos em três meses"
					},
				]
			},
			{
				farmaco: "Itraconazol",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "Não utilizar bebidas alcoolicas e paracetamol (ou outro medicamento de metabolismo hepático) durante o uso de itraconazol.",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Sporanox"
					},
				],
				apresentacoes: [
					{
						descricao: "100mg Cap Dura",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tome 02 cápsulas de 12 em 12 horas por um dia.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 cápsula por dia por 15 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 02 cápsula por dia por 90 dias.",
						quantidade: "90",
						forma: "cápsulas"
					}
				]
			}
		], {
			include: [Nomescomerciais, Apresentacoes, Posologias]
		}
		)
	),
)


	//
	//
	// //
	// ////0, "Leflunomida", true, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "LFN", 
	// ////0, "Levofloxacino", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// ////0, "Levotiroxina Sódica", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "LT4", 
	// ////0, "Lítio", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// ////0, "Loperamida", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// ////0, "Loratadina", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// ////0, "Losartana Potássica", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "LST", 
	// ////0, "Mebendazol", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// ////0, "Medroxiprogesterona", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Medroxiprogesterona", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Meloxicam", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "MX", 
	// //0, "Mesalazina", true, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "MSZ", 
	// //0, "Metformina", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "MTF", 
	// //0, "Metildopa", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Metilprednisolona", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "MPDN", 
	// //0, "Metoclopramida", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Metoprolol", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Metotrexato", true, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "MTX", 
	// //0, "Metotrexato", true, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "MTX", 
	// //0, "Metronidazol", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Micofenolato de Mofetila", true, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "MMF", 
	// //0, "Miconazol", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Minoxidil", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Moxifloxacino", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Mupirocina", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Naproxeno", true, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "NX", 
	// //0, "Naproxeno + Esomeprazol", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Nifedipino", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "NFD", 
	// //0, "Nimesulida", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Nistatina", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Nitazoxanida", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Nitrofurantoína", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Norfloxacino", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Nortriptilina", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Omeprazol", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "OMZ", 
	// //0, "Ondansetrona", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Oseltamivir", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Oxcarbazepina", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Pamidronato", true, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "PMD", 
	// //0, "Pantoprazol", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "PMZ", 
	// //0, "Paracetamol", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "PCT", 
	// //0, "Paroxetina", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "PXT", 
	// //0, "Pilocarpina", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Piroxicam", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Piroxicam", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Pramipexol", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Prednisolona", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "PLDN", 
	// //0, "Prednisolona", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "PLDN", 
	// //0, "Prednisona", true, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "PDN", 
	// //0, "Pregabalina", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "PGL", 
	// //0, "Prometazina", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Prometazina", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Propanolol", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "PPL", 
	// //0, "Racecadotrila", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Raloxifeno", true, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Risedronato", true, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "RSD", 
	// //0, "Rituximabe", true, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "RXT", 
	// //0, "Sertralina", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Sildenafil", true, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Sinvastatina", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "SVT", 
	// //0, "Sulfametoxazol + Trimetoprima", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Sumatriptano", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Valsartana", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Terbinafina", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Tiocolchicosídeo", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Tobramicina", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Tocilizumabe", true, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "TCZ", 
	// //0, "Tofacitinibe", true, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "TFN", 
	// //0, "Topiramato", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Tramadol", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "TMD", 
	// //0, "Tramadol", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "TMD", 
	// //0, "Tramadol + Paracetamol", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Trazodona", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "TZD", 
	// //0, "Triancinolona", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Trometamol", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Ustekinumab", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Valproato de Sódio", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Valsartana", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Varfarina", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Venlafaxina", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "VFX", 
	// //0, "Zoledrônico, Ácido", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "AZ", 
	// //0, "Zolpidem", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Dexametasona", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Lisina + Ciclobenzaprina", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Cálcio cálcio citrato malato + Vitamina D + Vitamina K + + Magnésio", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "CaVD", 
	// //0, "Hemitartarato de zolpidem", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Cetoprofeno", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Ferro quelato glicinato + Ácido fólico", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Harpagophytum procumbens DC", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "HP", 
	// //0, "Fluvoxamina", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Valeriana officinalisL. + Humulus lupulus L.", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Dexlansoprazol", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Vortioxetina", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Glicinato de magnésio + cloridrato de piridoxina", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Danazol", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Doxiciclina", false, true,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Lesinurade", false, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: null, 
	// //0, "Sulfassalazina", true, false,false,medicamentoclasse.",
	// orientacoes: "",
	// abreviatura: "SSZ", 
