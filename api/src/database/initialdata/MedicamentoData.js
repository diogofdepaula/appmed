const Medicamentos = require('../../models/cadastro/medicamentos')
const Nomescomerciais = require('../../models/cadastro/nomescomerciais')
const Apresentacoes = require('../../models/cadastro/apresentacoes')
const Posologias = require('../../models/cadastro/posologias')

// MUDAR O PADRÃO DE PREENCHIMENTO DAS POSOLOGIAS DA LME PARA SOMENTE FRASCOS E COMPRIMIDOS
// TIRAR O "POR TRÊS MESES" DA FORMA.
// PASSEI A RESPONSABILIDADE DA SOMA PARA A PAGE PRINT QUE IRÁ FAZER A SOMA DOS VALORES DAS DOSES MENSAIS DA LME NA HORA DE IMPRIMIR MESMO.


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
					"- Agendar a infusão com antecedência se possível. \r\n" +
					"- Aplicar somente em Centro de Infusão habilitado. \r\n",
				abreviatura: "ABT",
				classe: "MMCDB",
				nomescomerciais: [
					{
						nomefantasia: "Orencia"
					}
				],
				apresentacoes: [
					{
						descricao: "250 mg Inj Fr Amp",
						uso: "uso externo"
					},
					{
						descricao: "250 mg Inj Fr Amp",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 4 semanas.",
						quantidade: "8",
						forma: "frascos"
					},
					{
						posologia: "Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 4 semanas.",
						quantidade: "12",
						forma: "frascos"
					},
					{
						posologia: "Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 4 semanas.",
						quantidade: "16",
						forma: "frascos"
					},
					{
						posologia: "Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "6",
						forma: "frascos"
					},
					{
						posologia: "Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "9",
						forma: "frascos"
					},
					{
						posologia: "Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "12",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 01 ampola (seringa) no subcutâneo uma vez por semana.",
						quantidade: "12",
						forma: "frascos"
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
						descricao: "40 mg/mL Xpe",
						uso: "uso interno",
					},
					{
						descricao: "Granulado D 600 mg",
						uso: "uso interno",
					},
					{
						descricao: "200 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 15 mL (600 mg) uma vez ao dia, de preferência à noite, por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Dissolver 01 envelope em um copo d’água (200 mL) em temperatura ambiente e ingira em seguida. Não se deve guardar a solução"
							+ "Tomar um envelope dissolvido uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 8 em 8 horas por 7 dias.",
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
						descricao: "100 mg Comp Ver",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido após almoço.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "200 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "400 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "50 mg/g Creme",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido (200 mg), de 4 em 4 horas por 7 dias. \r\nPular a dose da madrugada.",
						quantidade: "35",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos (800 mg), de 4 em 4 horas por 7 dias. \r\nPular a dose da madrugada.",
						quantidade: "70",
						forma: "comp"
					},
					{
						posologia: "Aplicar uma adequada quantidade na região afetada de 4 em 4 horas. \r\nPular a aplicação da madrugada.",
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
						descricao: "5 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido no dia seguinte que escolheu tomar o Metotrexate. ",
						quantidade: "12",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Adalimumabe",
				lme: true,
				controlado: false,
				favorito: true,
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
						descricao: "40 mg Inj Ser",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar 01 ampola (seringa) [40 mg] no subcutâneo a cada 14 dias.",
						quantidade: "6",
						forma: "ampolas (seringas)",
					},
					{
						posologia: "Aplicar 01 ampola (seringa) [40 mg] no subcutâneo uma vez por semana.",
						quantidade: "12",
						forma: "ampolas (seringas)",
					},
					{
						posologia: "Semana 0: Aplicar 4 ampolas (seringas) [160 mg] por via subcutânea no mesmo dia.\r\n" +
							"Semana 2: Aplicar 2 ampolas (seringas) [80 mg] por via subcutânea no mesmo dia. \r\n" +
							"Semana 4 em diante: Aplicar 2 ampolas (seringas) [40 mg] por via subcutânea a cada 14 dias.",
						quantidade: "10",
						forma: "ampolas (seringas)",
					},
					{
						posologia: "Semana 0: Aplicar 2 ampolas (seringas) [80 mg] por via subcutânea no mesmo dia. \r\n" +
							"Semana 2 em diante: Aplicar 2 ampolas (seringas) [40 mg] por via subcutânea a cada 14 dias.",
						quantidade: "10",
						forma: "ampolas (seringas)"
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
						descricao: "400 mg Comp Mast",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 3 dias.",
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
						descricao: "70 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez por semana. \r\nTome pela manhã em jejum. Não deitar após tomar a medicação.",
						quantidade: "4",
						forma: "comp"
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
						descricao: "100 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "300 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
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
						descricao: "25 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "75 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido a noite próximo à hora de dormir.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos a noite próximo à hora de dormir. ",
						quantidade: "60",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Amoxicilina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "dose para suspensão: 25 mg/kg/dia",
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
						descricao: "875 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "400 mg/5mL Pó Susp Or",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 7 dias.",
						quantidade: "14",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 10 dias.",
						quantidade: "20",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 14 dias.",
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
						descricao: "875 mg + 125 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 7 dias.",
						quantidade: "14",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 10 dias.",
						quantidade: "20",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 14 dias.",
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
						descricao: "5,0 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "10 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "25 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "50 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
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
						descricao: "10 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "20 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "40 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido a noite próximo à hora de dormir.",
						quantidade: "30",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Azatioprina",
				lme: true,
				controlado: false,
				favorito: true,
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
						descricao: "50 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 8 em 8 horas.",
						quantidade: "90",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos pela manhã e 01 comprimido a noite.",
						quantidade: "90",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos de 12 em 12 horas.",
						quantidade: "120",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos de 8 em 8 horas.",
						quantidade: "180",
						forma: "comp"
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
						descricao: "500 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 3 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 02 comprimidos dose única.",
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
					"- Agendar a infusão com antecedência se possível. \r\n" +
					"- Aplicar somente em Centro de Infusão habilitado. \r\n",
				abreviatura: "BLM",
				nomescomerciais: [
					{
						nomefantasia: "Belysta"
					},
				],
				apresentacoes: [
					{
						descricao: "120 mg Fr Amp",
						uso: "uso externo",
					},
					{
						descricao: "400 mg Fr Amp",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 4 semanas.",
						quantidade: "8",
						forma: "frascos",
					},
					{
						posologia: "Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 4 semanas.",
						quantidade: "12",
						forma: "frascos",
					},
					{
						posologia: "Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 4 semanas.",
						quantidade: "16",
						forma: "frascos",
					},
					{
						posologia: "Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "6",
						forma: "frascos",
					},
					{
						posologia: "Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "9",
						forma: "frascos",
					},
					{
						posologia: "Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "12",
						forma: "frascos"
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
						posologia: "Aplicar 01 frasco-ampola intramuscular profunda (glúteo) dose única.",
						quantidade: "1",
						forma: "ampola"
					},
					{
						posologia: "Aplicar 01 frasco-ampola intramuscular profunda (glúteo) a cada 21 dias.",
						quantidade: "2",
						forma: "ampolas"
					},
				]
			},
			{
				farmaco: "Betametasona",
				lme: false,
				controlado: false,
				favorito: true,
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
						descricao: "6,43 + 2,63 mg Inj",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Aplicar 01 frasco-ampola intramuscular profunda (glúteo) dose única.",
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
				orientacoes: "Colocar uma pequena quantidade que cubra a ponta do dedo indicador. \r\n" + "Não utilizar maiores quantidades do que essa.\r\n"
					+ "Aplicar até ter uma fina camada. Não deixar uma grossa camada.",
				abreviatura: "BMS",
				nomescomerciais: [
					{
						nomefantasia: "Betnovat"
					},
				],
				apresentacoes: [
					{
						descricao: "0,64 mg/mL Loç Derm",
						uso: "uso externo",
					},
					{
						descricao: "0,64 mg/g Crem Derm",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Aplicar uma quantidade adequada como explicado em consulta na região afetada de 12 em 12 horas por 7 dias.",
						quantidade: "1",
						forma: "frasco"
					},
					{
						posologia: "Aplicar uma quantidade adequada como explicado em consulta na região afetada de 12 em 12 horas por 14 dias.",
						quantidade: "1",
						forma: "frasco"
					},
					{
						posologia: "Aplicar uma quantidade adequada como explicado em consulta na região afetada de 12 em 12 horas até melhora da lesão.",
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
						descricao: "62,5 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "125 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos pela manhã e 01 comprimido a noite.",
						quantidade: "90",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos de 12 em 12 horas.",
						quantidade: "120",
						forma: "comp"
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
						descricao: "10 mg Cap Dura",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas se náusea ou vômitos.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas por 5 dias.",
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
						descricao: "150 mg Comp. Rev.",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
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
						descricao: "300 mg Comp. Rev.",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Cálcio (cálcio citrato malato) + Vitamina D3 + Vitamina K + Magnésio",
				lme: false,
				controlado: false,
				favorito: true,
				classe: "SUPLEMENTO",
				orientacoes: "",
				abreviatura: "CDKM",
				nomescomerciais: [
					{
						nomefantasia: "Caldê KM"
					},
					{
						nomefantasia: "Velus"
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
						posologia: "Tomar 01 comprimido após almoço.",
						quantidade: "30",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Cálcio (cálcio citrato malato) + Vitamina D3 + Vitamina K + Magnésio",
				lme: false,
				controlado: false,
				favorito: true,
				classe: "SUPLEMENTO",
				orientacoes: "",
				abreviatura: "CDMDK",
				nomescomerciais: [
					{
						nomefantasia: "Caldê KDM"
					},
				],
				apresentacoes: [
					{
						descricao: "260mg+70mg+90mcg+1000UI Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "260mg+70mg+90mcg+2000UI Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido após almoço.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "25 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "50 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
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
						descricao: "10 mg/mL Spray",
						uso: "uso oral"
					},
				],
				posologias: [
{
						posologia: "Aplicar 02 jatos dentro da boca a cada 4 horas e antes das refeições.",
						quantidade: "3",
						forma: "frascos"
					},

					{
						posologia: "Aplicar vários jatos dentro da boca sempre que necessário.",
						quantidade: "3",
						forma: "frascos"
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
						forma: "frascos"
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
						descricao: "3,125 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "6,25 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "12,5 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "25 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
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
						descricao: "500 mg Cap Dura",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas por 7 dias.",
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
						descricao: "500 mg Drag",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 drágea de 6 em 6 horas por 7 dias.",
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
						descricao: "500 mg Pó Sol Inj",
						uso: "uso interno",
					},
					{
						descricao: "1000 mg Pó Sol Inj",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Aplicar 01 ampola intramuscular profunda (glúteo) uma vez ao dia por 7 dias.",
						quantidade: "7",
						forma: "ampolas"
					},
					{
						posologia: "Aplicar 01 ampola intramuscular profunda (glúteo) de 12 em 12 horas por 7 dias.",
						quantidade: "14",
						forma: "ampolas"
					},
				]
			},
			{
				farmaco: "Celecoxibe",
				lme: false,
				controlado: true,
				favorito: true,
				classe: "ANTIINFLAMATORIO",
				orientacoes: "Tomar sempre de estômago cheio",
				abreviatura: "CLB",
				nomescomerciais: [
					{
						nomefantasia: "Celebra"
					},
					{
						nomefantasia: "Digoxibe"
					},
				],
				apresentacoes: [
					{
						descricao: "100 mg Cap Dura",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas por 30 dias.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas por 60 dias.",
						quantidade: "4",
						forma: "caixas"
					},
				]
			},
			{
				farmaco: "Celecoxibe",
				lme: false,
				controlado: true,
				favorito: true,
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
						descricao: "200 mg Cap Dura",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas por 10 dias.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas por 14 dias.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas por 30 dias.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas por 60 dias.",
						quantidade: "60",
						forma: "caixas"
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
						descricao: "200 mg/mL Inj Ser",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Semana 0: Aplicar 2 ampolas (seringas) [400 mg] por via subcutânea no mesmo dia. \r\n" +
							"Semana 2: Aplicar 2 ampolas (seringas) [400 mg] por via subcutânea no mesmo dia. \r\n" +
							"Semana 4: Aplicar 2 ampolas (seringas) [400 mg] por via subcutânea no mesmo dia. \r\n" +
							"Semana 6 em diante: Aplicar 1 ampola (seringa) [200 mg] por via subcutânea a cada 14 dias.",
						quantidade: "8",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 01 ampola (seringa) [200 mg] no subcutâneo a cada 14 dias.",
						quantidade: "6",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 02 ampolas (seringas) [400 mg] no subcutâneo no mesmo dia a cada 28 dias.",
						quantidade: "6",
						forma: "frascos"
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
						descricao: "200 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "20 mg/g Crem Derm",
						uso: "uso externo",
					},
					{
						descricao: "20 mg/g Xamp",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 14 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Aplicar uma adequada quantidade na região afetada uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "frasco"
					},
					{
						posologia: "Aplicar uma adequada quantidade na região afetada uma vez ao dia por 14 dias.",
						quantidade: "1",
						forma: "frasco"
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
						descricao: "200 mg + 20 mg Cap",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 10 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 14 dias.",
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
						descricao: "25 mg/g Gel",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Aplicar uma adequada quantidade na região afetada uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "frasco"
					},
					{
						posologia: "Aplicar uma adequada quantidade na região afetada uma vez ao dia por 14 dias.",
						quantidade: "1",
						forma: "frasco"
					},
				]
			},
			{
				farmaco: "Ciclobenzaprina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "Essa medicação pode causar sonolência.",
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
						descricao: "5 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "10 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido a noite próximo à hora de dormir por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido a noite próximo à hora de dormir por 10 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido a noite próximo à hora de dormir.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "50 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
					},
	
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
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
						descricao: "10 mg Cáp",
						uso: "uso interno",
					},
					{
						descricao: "25 mg Cáp",
						uso: "uso interno",
					},
					{
						descricao: "50 mg Cáp",
						uso: "uso interno",
					},
					{
						descricao: "100 mg Cáp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas.",
						quantidade: "60",
						forma: "cap"
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
						descricao: "500 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 10 dias.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 14 dias.",
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
						descricao: "20 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "500 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia com alimentos (estômago cheio) por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia com alimentos (estômago cheio) por 10 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia com alimentos (estômago cheio) por 14 dias.",
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
				orientacoes: "Tomar sempre com um copo d' água bem cheio.",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Dalacin C"
					},
				],
				apresentacoes: [
					{
						descricao: "300 mg Cap Dura",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 10 dias.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 14 dias.",
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
						nomefantasia: "Clobex"
					},
				],
				apresentacoes: [
					{
						descricao: "0,5 mg/g Crem Derm",
						uso: "uso externo",
					},
					{
						descricao: "0,5 mg/g Pom Derm",
						uso: "uso externo",
					},
					{
						descricao: "0,5 mg/g Sol Capilar",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Aplicar uma fina camada na região afetada uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "frasco"
					},
					{
						posologia: "Aplicar uma fina camada na região afetada uma vez ao dia por 14 dias.",
						quantidade: "1",
						forma: "frascos"
					},
					{
						posologia: "Aplicar uma fina camada na região afetada uma vez ao dia até melhora da lesão.",
						quantidade: "3",
						forma: "frascos"
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
						descricao: "75 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido após almoço.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "25 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "50 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido pela manhã.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "30 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "3 mg/mL Sol",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 6 em 6 horas se dor.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 6 em 6 horas se dor.",
						quantidade: "120",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 8 em 8 horas se dor.",
						quantidade: "90",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 8 em 8 horas se dor.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 10 mL de 8 em 8 horas se dor.",
						quantidade: "2",
						forma: "frascos"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas se dor.",
						quantidade: "60",
						forma: "comp"
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
						descricao: "30 mg + 500  mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 6 em 6 horas se dor.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tomar 01 comprimido de 8 em 8 horas se dor.",
						quantidade: "1",
						forma: "caixas"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas se dor.",
						quantidade: "1",
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
						descricao: "0,5 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "1,0 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 6 em 6 horas.",
						quantidade: "120",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 8 em 8 horas.",
						quantidade: "90",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 30 em 30 minutos até que haja melhora das dores, ou se houver náusea, vômito ou diarréia.",
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
						descricao: "100 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
					},
{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "30 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido pela manhã por 14 dias, então tome 1/2 (meio) comprimido pela manhã até o retorno.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã por 20 dias, então tome 1/2 (meio) comprimido pela manhã até o retorno.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã por 7 dias, então tome 1/2 (meio) comprimido pela manhã mais 7 dias, então pare.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "7,5 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 02 comprimidos pela manhã por 14 dias, então tome 1 comprimido pela manhã até o retorno.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos pela manhã por 20 dias, então tome 1 comprimido pela manhã até o retorno.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos pela manhã.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "6 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 02 comprimidos pela manhã por 14 dias, então tome 1 comprimido pela manhã até o retorno.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos pela manhã por 20 dias, então tome 1 comprimido pela manhã até o retorno.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos pela manhã.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "60 mg/mL Inj Fr",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Aplicar 01 frasco (injeção) subcutânea única de 60 mg administrada uma vez a cada 6 meses.",
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
						descricao: "5 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 14 dias.",
						quantidade: "1",
						forma: "caixas"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 28 dias.",
						quantidade: "1",
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
						descricao: "50 mg Comp Rev Lib Prol",
						uso: "uso interno",
					},
					{
						descricao: "100 mg Comp Rev Lib Prol",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia, preferencialmente pela manhã.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "2 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 8 em 8 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 8 em 8 horas por 7 dias.",
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
						descricao: "30 mg Cáp Lib Ret",
						uso: "uso interno",
					},
					{
						descricao: "60 mg Cáp Lib Ret",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 cápsula pela manhã em jejum por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula pela manhã em jejum por 14 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula pela manhã em jejum por 28 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula pela manhã em jejum",
						quantidade: "30",
						forma: "cap"
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
						descricao: "50 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 20 dias, então tome 01 comprimido de 12 em 12 horas por 4 meses.",
						quantidade: "60",
						forma: "comp"
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
						descricao: "50 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 8 em 8 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 8 em 8 horas por 7 dias.",
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
						descricao: "10 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido 30 minutos antes do café, do almoço e da janta.",
						quantidade: "90",
						forma: "comp"
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
						descricao: "30 mg Cap",
						uso: "uso interno",
					},
					{
						descricao: "60 mg Cap",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Iniciar com as amostras de 30 mg. \r\nTomar 01 cápsula pela manhã.",
						quantidade: "30",
						forma: "cap"
					},
					{
						posologia: "Tomar 01 cápsula pela manhã.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "5 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "10 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "20 mg/0,2mL",
						uso: "uso externo",
					},
					{
						descricao: "40 mg/0,4mL",
						uso: "uso externo",
					},
					{
						descricao: "60 mg/0,6mL",
						uso: "uso externo",
					},
					{
						descricao: "80 mg/0,8mL",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Aplicar 1 frasco subcutâneo uma vez ao dia.",
						quantidade: "30",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 1 frasco subcutâneo de 12 em 12 horas.",
						quantidade: "60",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 1 frasco subcutâneo uma vez ao dia até a 16ª semana de gestação, então aplique 01 frasco subcutâneo de 12 em 12 horas até a 6ª de puerpério.",
						quantidade: "30 a 60",
						forma: "frascos"
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
						descricao: "10 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "15 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "20 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido pela manhã.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "20 mg Comp Rev De Lib Retard",
						uso: "uso interno",
					},
					{
						descricao: "40 mg Comp Rev De Lib Retard",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido pela manhã .",
						quantidade: "30",
						forma: "comp"
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
						descricao: "25 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "100 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido pela manhã.",
						quantidade: "30",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Etanercepte",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "MMCDB",
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Transportar a medicação somente dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável.",
				abreviatura: "ETN",
				nomescomerciais: [
					{
						nomefantasia: "Enbrel"
					},
				],
				apresentacoes: [
					{
						descricao: "25 mg Inj Ser",
						uso: "uso externo",
					},
					{
						descricao: "50 mg Inj Ser",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar 01 ampola (seringa) no subcutâneo uma vez por semana.",
						quantidade: "12",
						forma: "ampolas (seringas)"
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
						descricao: "500 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 7 dias.",
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
						descricao: "60 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "90 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 14 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 28 dias.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 56 dias.",
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
						descricao: "500 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 14 dias.",
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
						descricao: "200 mg Cap",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido durante o almoço ou janta.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "50 mg Cap Dura",
						uso: "uso interno",
					},
					{
						descricao: "150 mg Cap Dura",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 cápsula dose única.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula uma vez por semana por 2 semanas.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula uma vez por semana por 4 semanas.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tomar 01 cápsula uma vez por semana por 6 semanas.",
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
						descricao: "20 mg Cap Dura",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 cápsula pela manhã.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 cápsulas pela manhã.",
						quantidade: "60",
						forma: "comp"
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
						descricao: "40 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido pela manhã.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "300 mg Cap Dura",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 8 em 8 horas",
						quantidade: "90",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã e 02 comprimidos a noite",
						quantidade: "90",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido pela manha, 01 comprimido a tarde e 02 comprimidos a noite.",
						quantidade: "120",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos de 12 em 12 horas",
						quantidade: "120",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos de 8 em 8 horas",
						quantidade: "180",
						forma: "comp"
					},
					{
						posologia:
							"Primeira semana: tome 01 comprimido a noite. \r\n" +
							"Segunda semana: tome 01 comprimido de manhã e 01 comprimidos a noite. \r\n" +
							"Terceira a sexta semana: tome 01 comprimido de manhã, 01 comprimido a tarde e 01 comprimidos a noite. \r\n" +
							"Sétima a décima semana: tome 01 comprimido de manhã, 01 comprimido a tarde e 02 comprimidos a noite. \r\n" +
							"Décima primeira a décima quarta semana: tome 01 comprimido de manhã, 02 comprimidos a tarde e 2 comprimidos a noite. \r\n" +
							"Décima quinta semana em diante: tome 02 comprimido de 8 em 8 horas.",
						quantidade: "180",
						forma: "comp"
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
						descricao: "5,0 mg Comp",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
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
						descricao: "500 mg + 400 mg Cap",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Colocar o conteúdo de um envelope em um copo de água (200 mL). \r\n"
							+ " Aguardar 3 minutos, então mexer com um colher. \r\n"
							+ "Tomar a mistura uma vez ao dia por  6 meses.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 cápsula de 8 em 8 horas",
						quantidade: "60",
						forma: "comp"
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
						descricao: "50 mg Inj Ser",
						uso: "uso externo"
					},
					{
						descricao: "50 mg/4mL Fra",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar 01 ampola (seringa) no subcutâneo uma vez.",
						quantidade: "3",
						forma: "ampolas (seringas)"
					},
					{
						posologia:
							"Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 8 semanas.",
						quantidade: "6",
						forma: "frascos"
					},
					{
						posologia:
							"Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 8 semanas.",
						quantidade: "9",
						forma: "frascos"
					},
					{
						posologia:
							"Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero e quatro semanas (em relação a primeira aplicação) após"
							+ "a cada 8 semanas.",
						quantidade: "12",
						forma: "frascos"
					},
					{
						posologia: "Fazer a aplicação de 02 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "4",
						forma: "frascos"
					},
					{
						posologia: "Fazer a aplicação de 03 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "6",
						forma: "frascos"
					},
					{
						posologia: "Fazer a aplicação de 04 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "9",
						forma: "frascos"
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
						descricao: "10 mg/g Crem Derm",
						uso: "uso externo"
					},
					{
						descricao: "10 mg/g Pom Derm",
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
						descricao: "400 mg Comp Rev",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido em dias alternados.",
						quantidade: "15",
						forma: "comp"
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
						descricao: "150 mg Comp. Rev",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia:
							"Tomar 01 comprimido uma vez. \r\n"
							+ "Tomar em jejum, 60 minutos antes da ingestão alimentos. \r\n"
							+ "Tomar com um copo cheio de água filtrada (180 a 240 mL). \r\n"
							+ "Você deverá estar em posição ereta: sentado, em pé ou andando. \r\n"
							+ "Você não deve deitar-se nos 60 minutos seguintes após tomar o medicamento.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido em dias alternados.",
						quantidade: "15",
						forma: "comp"
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
						descricao: "600 mg Cap Mole",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas somente se dor.",
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
					"- Trazer a medicação para aplicação dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável. \r\n" +
					"- Agendar a infusão com antecedência se possível. \r\n" +
					"- Aplicar somente em Centro de Infusão habilitado ou internado em hospital. \r\n",
				abreviatura: "IH",
				nomescomerciais: [
					{
						nomefantasia: "Imunoglobulina Humana"
					},
				],
				apresentacoes: [
					{
						descricao: "250 mg Inj Fr Amp",
						uso: "uso externo"
					},
					{
						descricao: "125 mg/mL Sol Inj",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia:
							"Fazer a aplicação de 05 frascos a cada dose, após devida preparação,"
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente,"
							+ "somente em centro de infusão habilitado em terapia assistida ou internado em hospital. \r\n"
							+ "Fazer uma aplicação por dia por 5 dias consecutivos."
							+ "Infundir a pré-medicação: "
							+ "- Metilprednisolona 125 mg diluído em 100 mL correndo em 30 minutos"
							+ "- Prometazina um comprimido de 25 mg ou uma ampola de 50 mg (2 ml) intra-muscular. \r\n"
							+ "Infundir a Imunoglobulina em bomba de infusão a 0,5 mL/kg/hora na primeira hora e após a 1,0 mL/kg/hora. \r\n"
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
					"- Agendar a infusão com antecedência se possível. \r\n" +
					"- Aplicar somente em Centro de Infusão habilitado. \r\n",
				abreviatura: "IFX",
				nomescomerciais: [
					{
						nomefantasia: "Remicade"
					},
				],
				apresentacoes: [
					{
						descricao: "10 mg/ml Inj Fr Amp de 10 mL",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia:
							"Fazer a aplicação de 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após"
							+ "a cada 8 semanas.",
						quantidade: "8",
						forma: "frascos"
					},
					{
						posologia:
							"Fazer a aplicação de 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após"
							+ "a cada 8 semanas.",
						quantidade: "12",
						forma: "frascos"
					},
					{
						posologia:
							"Fazer a aplicação de 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após"
							+ "a cada 8 semanas.",
						quantidade: "16",
						forma: "frascos"
					},
					{
						posologia:
							"Fazer a aplicação de 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após"
							+ "a cada 6 semanas.",
						quantidade: "8",
						forma: "frascos"
					},
					{
						posologia:
							"Fazer a aplicação de 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após"
							+ "a cada 6 semanas.",
						quantidade: "12",
						forma: "frascos"
					},
					{
						posologia:
							"Fazer a aplicação de 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após"
							+ "a cada 6 semanas.",
						quantidade: "16",
						forma: "frascos"
					},
					{
						posologia:
							"Fazer a aplicação de 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "04",
						forma: "frascos"
					},
					{
						posologia:
							"Fazer a aplicação de 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "06",
						forma: "frascos"
					},
					{
						posologia:
							"Fazer a aplicação de 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "08",
						forma: "frascos"
					},
					{
						posologia:
							"Fazer a aplicação de 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 6 semanas.",
						quantidade: "04",
						forma: "frascos"
					},
					{
						posologia:
							"Fazer a aplicação de 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 6 semanas.",
						quantidade: "06",
						forma: "frascos"
					},
					{
						posologia:
							"Fazer a aplicação de 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 6 semanas.",
						quantidade: "08",
						forma: "frascos"
					},
					{
						posologia:
							"Fazer a aplicação de 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "06",
						forma: "frascos"
					},
					{
						posologia:
							"Fazer a aplicação de 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "09",
						forma: "frascos"
					},
					{
						posologia:
							"Fazer a aplicação de 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "12",
						forma: "frascos"
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
						descricao: "100 mg Cap Dura",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tomar 02 cápsulas de 12 em 12 horas por um dia.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula por dia por 15 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 02 cápsula por dia por 90 dias.",
						quantidade: "90",
						forma: "cápsulas"
					}
				]
			}
		], {
			include: [Nomescomerciais, Apresentacoes, Posologias]
		},
		{
			farmaco: "Leflunomida",
			lme: true,
			controlado: true,
			favorito: false,
			classe: "MMCDS",
			orientacoes: "",
			abreviatura: "LFN",

			nomescomerciais: [
				{
					nomefantasia: "Arava"
				},
			],
			apresentacoes: [
				{
					descricao: "20 mg Comp",
					uso: "uso interno"
				}
			],
			posologias: [
				{
					posologia: "Tomar 01 comprimido uma vez ao dia.",
					quantidade: "30",
					forma: "comp"
				},
				{
					posologia: "Tomar 01 comprimido em dias alternados (dia sim, dia não).",
					quantidade: "15",
					forma: "comp"
				},
			]
		},




		)
	),
)


