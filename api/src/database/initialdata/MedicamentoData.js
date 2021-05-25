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
						posologia: "Aplicar 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após "
							+ "a cada 4 semanas.",
						quantidade: "8",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após "
							+ "a cada 4 semanas.",
						quantidade: "12",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após "
							+ "a cada 4 semanas.",
						quantidade: "16",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "6",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "9",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
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
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Alendronato",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "OSTEOMETABOLICO",
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
						posologia: "Tomar 01 comprimido uma vez por semana. \r\n" +
							"Tomar em jejum. Aguardar 60 minutos antes da se alimentar. \r\n" +
							"Tomar com um copo cheio de água filtrada (180 a 240 mL). \r\n" +
							"Você deverá ficar de sentada, de pé ou andando após tomar a medicação. \r\n" +
							"NÃO deitar nos 60 minutos seguintes após tomar o medicamento. \r\n" +
							"Previsão de tratamento é de um ano.",
						quantidade: "4",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Alopurinol",
				lme: false,
				controlado: false,
				favorito: true,
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
				favorito: true,
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
				farmaco: "Aloe Barbadensis",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "BioXtra Dry Mouth"
					},
				],
				apresentacoes: [
					{
						descricao: "Sol Oral",
						uso: "uso oral"
					},
				],
				posologias: [
					{
						posologia: "Bochechar cerca de 10mL por 30 segundos " +
							"após a escovação. Não precisa enxaguar. Use diariamente, " +
							"regularmente ao longo do dia",
						quantidade: "1",
						forma: "frasco"
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
					{
						posologia: "Tomar 01 comprimidos uma vez ao dia por 30 dias, então tome 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
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
				farmaco: "Baricitinibe",
				lme: false,
				controlado: false,
				favorito: true,
				classe: "MMCDPM",
				orientacoes: "",
				abreviatura: "BCT",

				nomescomerciais: [
					{
						nomefantasia: "Olumiant"
					},
				],
				apresentacoes: [
					{
						descricao: "2 mg Comp",
						uso: "uso interno"
					},
					{
						descricao: "4 mg Comp",
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
						posologia: "Aplicar 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após "
							+ "a cada 4 semanas.",
						quantidade: "8",
						forma: "frascos",
					},
					{
						posologia: "Aplicar 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após "
							+ "a cada 4 semanas.",
						quantidade: "12",
						forma: "frascos",
					},
					{
						posologia: "Aplicar 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e quatro semanas (em relação a primeira aplicação) após "
							+ "a cada 4 semanas.",
						quantidade: "16",
						forma: "frascos",
					},
					{
						posologia: "Aplicar 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "6",
						forma: "frascos",
					},
					{
						posologia: "Aplicar 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "9",
						forma: "frascos",
					},
					{
						posologia: "Aplicar 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "12",
						forma: "frascos"
					},
				]
			},
			{
				farmaco: "Benzbromarona",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Narcaricina"
					},
				],
				apresentacoes: [
					{
						descricao: "100 mg Comp",
						uso: "uso interno",
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido após o café da manhã.",
						quantidade: "30",
						forma: "comp"
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
						descricao: "600.000 UI Sus Inj",
						uso: "uso externo",
					},
					{
						descricao: "1.200.000 UI Sus Inj",
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
						descricao: "0,15 g/100 mL",
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
						posologia: "Tomar 01 drágea de 6 em 6 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
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
				favorito: true,
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
				farmaco: "Cetoprofeno",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "ANTIINFLAMATORIO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Profenid"
					},
					{
						nomefantasia: "Artrosil"
					},
				],
				apresentacoes: [
					{
						descricao: "75 mg Cap",
						uso: "uso interno"
					},
					{
						descricao: "160 mg Cap",
						uso: "uso interno"
					},
					{
						descricao: "320 mg Cap",
						uso: "uso interno"
					},
					{
						descricao: "25 mg/g Gel",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 cápsula uma vez ao dia por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Aplicar uma fina camada sobre a área afetada " +
							"de 12 em 12 horas.",
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
						descricao: "200 mg + 20 mg Cap",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 cápsula uma vez ao dia por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula uma vez ao dia por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula uma vez ao dia por 10 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula uma vez ao dia por 14 dias.",
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
				favorito: true,
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
				farmaco: "Ciclofosfamida",
				lme: true,
				controlado: false,
				favorito: true,
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
						descricao: "50 mg Comp",
						uso: "uso interno",
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
					{
						posologia: "Tomar 02 comprimidos pela manhã e 01 comprimido a tarde.",
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
				farmaco: "Ciclosporina",
				lme: true,
				controlado: false,
				favorito: true,
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
						posologia: "Tomar 01 cápsula uma vez ao dia.",
						quantidade: "30",
						forma: "cap"
					},
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
				abreviatura: "CTL",
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
				lme: false,
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
						descricao: "30 mg + 500 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 6 em 6 horas se dor.",
						quantidade: "1",
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
				farmaco: "Danazol",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "MMCDS",
				orientacoes: "",
				abreviatura: "",

				nomescomerciais: [
					{
						nomefantasia: "Ladogal"
					},
				],
				apresentacoes: [
					{
						descricao: "100 mg Cáp",
						uso: "uso interno"
					},
					{
						descricao: "200 mg Cáp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 cápsula uma vez ao dia.",
						quantidade: "30",
						forma: "cap"
					},
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas.",
						quantidade: "60",
						forma: "cap"
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
					{
						posologia: "Tomar 02 comprimidos pela manhã.",
						quantidade: "60",
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
						forma: "frasco"
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
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 28 dias.",
						quantidade: "1",
						forma: "caixa"
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
					{
						nomefantasia: "Elifore"
					},
					{
						nomefantasia: "Indefa"
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
				favorito: true,
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
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
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
				farmaco: "Diosmina + Hesperidina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Diosmin"
					},
				],
				apresentacoes: [
					{
						descricao: "450 mg + 50 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
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
				favorito: true,
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
						posologia: "Tomar 01 cápsula ao dia, preferencialmente pela manhã.",
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
						posologia: "Tomar 01 comprimido ao dia, preferencialmente pela manhã.",
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
				orientacoes: "Aguardar 30 a 60 minutos antes de se alimentar.",
				abreviatura: "EMZ",
				nomescomerciais: [
					{
						nomefantasia: "Nexium"
					},
				],
				apresentacoes: [
					{
						descricao: "20 mg Comp Rev Lib Ret",
						uso: "uso interno",
					},
					{
						descricao: "40 mg Comp Rev Lib Ret",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido pela manhã em jejum.",
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
				favorito: true,
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
				farmaco: "Erenumabe",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "MMCDB",
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Transportar a medicação somente dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável.",
				abreviatura: "ERN",
				nomescomerciais: [
					{
						nomefantasia: "Pasurta"
					},
				],
				apresentacoes: [
					{
						descricao: "70 mg/mL Ser",
						uso: "uso externo"
					},
					{
						descricao: "140 mg/mL Ser",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar 01 ampola (seringa) no subcutâneo uma vez por mês.",
						quantidade: "3",
						forma: "Ser"
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
						posologia: "Tomar 01 comprimido de 12 em 12 horas se dor.",
						quantidade: "1",
						forma: "caixa"
					},
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
				favorito: true,
				classe: "ANTIINFLAMATORIO",
				orientacoes: "Tomar sempre de estômago cheio",
				abreviatura: "ETC",
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
				farmaco: "Ferro quelato glicinato + Ácido fólico",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "Tomar com suco de limão ou laranja.",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Neutrofer Fólico"
					},
				],
				apresentacoes: [
					{
						descricao: "150 mg + 5 mg Comp",
						uso: "uso interno",
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "Comp"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 30 dias.",
						quantidade: "30",
						forma: "Comp"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 60 dias.",
						quantidade: "60",
						forma: "Comp"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 90 dias.",
						quantidade: "90",
						forma: "Comp"
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
				favorito: true,
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
						posologia: "Tomar 01 cápsula ao dia, preferencialmente pela manhã.",
						quantidade: "30",
						forma: "cap"
					},
					{
						posologia: "Tomar 02 cápsulas ao dia, preferencialmente pela manhã.",
						quantidade: "60",
						forma: "cap"
					},
				]
			},
			{
				farmaco: "Fluvoxamina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "",

				nomescomerciais: [
					{
						nomefantasia: "Luvox"
					},
				],
				apresentacoes: [
					{
						descricao: "50 mg Comp Rev",
						uso: "uso interno",
					},
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
				favorito: true,
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
						descricao: "300 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia, preferencialmente a noite.",
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
						posologia: "Tomar 01 comprimido pela manhã e 02 comprimidos a noite.",
						quantidade: "90",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido pela manha, 01 comprimido a tarde e 02 comprimidos a noite.",
						quantidade: "120",
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
				farmaco: "Glicinato de magnésio + cloridrato de piridoxina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Magnen B6"
					},
				],
				apresentacoes: [
					{
						descricao: "722,2 mg + 1,0 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 5 dias",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 10 dias",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 30 dias",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 5 dias",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 15 dias",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 30 dias",
						quantidade: "2",
						forma: "caixas"
					},
				]
			},

			{
				farmaco: "Glicosamina + Condroitina",
				lme: false,
				controlado: false,
				favorito: true,
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
							+ "Tomar a mistura uma vez ao dia por 6 meses.",
						quantidade: "30",
						forma: "envelopes"
					},
					{
						posologia: "Tomar 01 cápsula de 8 em 8 horas.",
						quantidade: "60",
						forma: "cap"
					},
				]
			},
			{
				farmaco: "Golimumabe",
				lme: true,
				controlado: false,
				favorito: true,
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
						posologia: "Aplicar 01 ampola (seringa) no subcutâneo uma vez por mês.",
						quantidade: "3",
						forma: "ampolas (seringas)"
					},
					{
						posologia:
							"Aplicar 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero e quatro semanas (em relação a primeira aplicação) após "
							+ "a cada 8 semanas.",
						quantidade: "6",
						forma: "frascos"
					},
					{
						posologia:
							"Aplicar 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero e quatro semanas (em relação a primeira aplicação) após "
							+ "a cada 8 semanas.",
						quantidade: "9",
						forma: "frascos"
					},
					{
						posologia:
							"Aplicar 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero e quatro semanas (em relação a primeira aplicação) após "
							+ "a cada 8 semanas.",
						quantidade: "12",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "4",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "6",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "9",
						forma: "frascos"
					},
				]
			},
			{
				farmaco: "Guselcumabe",
				lme: false,
				controlado: false,
				favorito: false,
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Trazer a medicação para aplicação dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável. \r\n" +
					"- Agendar a infusão com antecedência se possível. \r\n" +
					"- Aplicar somente em Centro de Infusão habilitado. \r\n",
				abreviatura: "GSC",
				classe: "MMCDB",
				nomescomerciais: [
					{
						nomefantasia: "Tremfya"
					}
				],
				apresentacoes: [
					{
						descricao: "100 mg Ser Pree",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar 01 ampola (seringa) no subcutâneo."
							+ "Inicia-se com aplicações na semana zero, quatro semanas (em relação a primeira aplicação) após "
							+ "a cada 8 semanas.",
					quantidade: "3",
					forma: "Seringas"
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
				farmaco: "Harpagophytum procumbens DC (5% de harpagosídeo)",
				lme: false,
				controlado: false,
				favorito: true,
				classe: "CONVENCIONAL",
				orientacoes: "Tomar sempre de estômago cheio.",
				abreviatura: "HP",
				nomescomerciais: [
					{
						nomefantasia: "Arpadol"
					},
				],
				apresentacoes: [
					{
						descricao: "400 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 4 meses.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 6 meses.",
						quantidade: "30",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Harpagophytum procumbens DC (22% de harpagosídeo)",
				lme: false,
				controlado: false,
				favorito: true,
				classe: "CONVENCIONAL",
				orientacoes: "Tomar sempre de estômago cheio.",
				abreviatura: "HP",
				nomescomerciais: [
					{
						nomefantasia: "Permear"
					},
				],
				apresentacoes: [
					{
						descricao: "300 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 4 meses.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 6 meses.",
						quantidade: "30",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Hidroxicloroquina",
				lme: true,
				controlado: false,
				favorito: true,
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
							"Aplicar 05 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
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
				favorito: true,
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
					{
						nomefantasia: "Xilfya"
					},
					{
						nomefantasia: "Remsima"
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
							"Aplicar 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após "
							+ "a cada 8 semanas.",
						quantidade: "8",
						forma: "frascos"
					},
					{
						posologia:
							"Aplicar 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após "
							+ "a cada 8 semanas.",
						quantidade: "12",
						forma: "frascos"
					},
					{
						posologia:
							"Aplicar 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após "
							+ "a cada 8 semanas.",
						quantidade: "16",
						forma: "frascos"
					},
					{
						posologia:
							"Aplicar 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após "
							+ "a cada 6 semanas.",
						quantidade: "8",
						forma: "frascos"
					},
					{
						posologia:
							"Aplicar 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após "
							+ "a cada 6 semanas.",
						quantidade: "12",
						forma: "frascos"
					},
					{
						posologia:
							"Aplicar 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após "
							+ "a cada 6 semanas.",
						quantidade: "16",
						forma: "frascos"
					},
					{
						posologia:
							"Aplicar 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "04",
						forma: "frascos"
					},
					{
						posologia:
							"Aplicar 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "06",
						forma: "frascos"
					},
					{
						posologia:
							"Aplicar 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 8 semanas.",
						quantidade: "08",
						forma: "frascos"
					},
					{
						posologia:
							"Aplicar 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 6 semanas.",
						quantidade: "04",
						forma: "frascos"
					},
					{
						posologia:
							"Aplicar 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 6 semanas.",
						quantidade: "06",
						forma: "frascos"
					},
					{
						posologia:
							"Aplicar 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 6 semanas.",
						quantidade: "08",
						forma: "frascos"
					},
					{
						posologia:
							"Aplicar 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "06",
						forma: "frascos"
					},
					{
						posologia:
							"Aplicar 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "09",
						forma: "frascos"
					},
					{
						posologia:
							"Aplicar 04 frascos a cada dose, após devida preparação, "
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
			},
			{
				farmaco: "Ixequizumabe",
				lme: false,
				controlado: false,
				favorito: false,
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Trazer a medicação para aplicação dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável. \r\n" +
					"- Agendar a infusão com antecedência se possível. \r\n" +
					"- Aplicar somente em Centro de Infusão habilitado. \r\n",
				abreviatura: "IXQ",
				classe: "MMCDB",
				nomescomerciais: [
					{
						nomefantasia: "Taltz"
					}
				],
				apresentacoes: [
					{
						descricao: "80 mg/mL Inj Fr Amp",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar 02 ampolas [160mg - duas injeções de 80 mg] no subcutâneo " +
							"na semana 0, seguida por uma injeção de 80 mg nas semanas 2, 4, 6, 8, 10 e 12 " +
							"e então, 80 mg a cada 4 semanas.",
						quantidade: "8",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 02 ampolas [160mg - duas injeções de 80 mg] no subcutâneo " +
							"na semana 0, seguida por uma injeção de 80 mg a cada 4 semanas.",
						quantidade: "4",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 01 ampolas [80mg] no subcutâneo a cada 4 semanas.",
						quantidade: "3",
						forma: "frascos"
					},
				]
			},
			{
				farmaco: "Leflunomida",
				lme: true,
				controlado: true,
				favorito: true,
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
			{
				farmaco: "Levofloxacino",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Levaquin"
					},
					{
						nomefantasia: "Tavanic"
					},
					{
						nomefantasia: "Levoxin"
					},
				],
				apresentacoes: [
					{
						descricao: "500 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "750 mg Comp Rev",
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
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 14 dias.",
						quantidade: "2",
						forma: "caixas"
					},
				]
			},
			{
				farmaco: "Lesinurade",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Zyloric"
					},
				],
				apresentacoes: [
					{
						descricao: "200 mg Comp",
						uso: "uso interno",
					},
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
				farmaco: "Levotiroxina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "Esse medicamento deve ser administrado com um intervalo de, pelo menos, "
					+ " 4 horas da administração de outros medicamentos que conhecidamente alteram a sua absorção.",
				abreviatura: "LT4",
				nomescomerciais: [
					{
						nomefantasia: "Puran T4"
					},
					{
						nomefantasia: "Synthroid"
					},
				],
				apresentacoes: [
					{
						descricao: "25 mcg Comp",
						uso: "uso interno"
					},
					{
						descricao: "50 mcg Comp",
						uso: "uso interno"
					},
					{
						descricao: "75 mcg Comp",
						uso: "uso interno"
					},
					{
						descricao: "88 mcg Comp",
						uso: "uso interno"
					},
					{
						descricao: "100 mcg Comp",
						uso: "uso interno"
					},
					{
						descricao: "112 mcg Comp",
						uso: "uso interno"
					},
					{
						descricao: "125 mcg Comp",
						uso: "uso interno"
					},
					{
						descricao: "150 mcg Comp",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido pela manhã em jejum, de preferência 30 minutos à 1 hora antes do café da manhã.",
						quantidade: "30",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Lítio",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Carbolitium"
					},
				],
				apresentacoes: [
					{
						descricao: "300 mg Comp",
						uso: "uso interno"
					},
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
				farmaco: "Losartana",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "LST",
				nomescomerciais: [
					{
						nomefantasia: "Cozaar"
					},
					{
						nomefantasia: "Corus"
					},
				],
				apresentacoes: [
					{
						descricao: "50 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "100 mg Comp Rev",
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
				farmaco: "Medroxiprogesterona",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENSIONAL",   //        'Analgésicos', 'Anticonvulsivante', 'Antidepressivo', 'Antimicrobiano', 'Convencional', 'Corticóide', 'MMCDB', 'MMCDS', 'MMCDPM', 
				//      // 'Opióide', 'Osteometabolico', 'Suplemento', 'Vasoativo', 'Antiinflamatório'
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Depo-Provera"
					},
				],
				apresentacoes: [
					{
						descricao: "150 mg/mL Susp Inj",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar 01 frasco intramuscular profunda (glúteo) a cada 90 dias.",
						quantidade: "1",
						forma: "ampolas"
					},
				]
			},
			{
				farmaco: "Meloxicam",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "ANTIINFLAMATORIO",
				orientacoes: "",
				abreviatura: "Mx",
				nomescomerciais: [
					{
						nomefantasia: "Movatec"
					},
					{
						nomefantasia: "Bioflac"
					},
				],
				apresentacoes: [
					{
						descricao: "7,5 mg Comp",
						uso: "uso interno"
					},
					{
						descricao: "15 mg Comp",
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
				]
			},
			{
				farmaco: "Mepolizumabe",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "MMCDB",
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Transportar a medicação somente dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável.",
				abreviatura: "MPL",
				nomescomerciais: [
					{
						nomefantasia: "Nucala"
					},
				],
				apresentacoes: [
					{
						descricao: "100 mg/mL Fra",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar 01 frasco-ampola [100 mg] no subcutâneo uma vez por mês.",
						quantidade: "3",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 03 frascos-ampolas [300 mg] no subcutâneo uma vez por mês.",
						quantidade: "9",
						forma: "frascos"
					},
				]
			},
			{
				farmaco: "Mesalazina",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "MMCDS",
				orientacoes: "",
				abreviatura: "MSZ",

				nomescomerciais: [
					{
						nomefantasia: "Pentasa"
					},
					{
						nomefantasia: "Asalit"
					},
					{
						nomefantasia: "Mesacol"
					},
				],
				apresentacoes: [
					{
						descricao: "250 mg Sups",
						uso: "uso interno"
					},
					{
						descricao: "400 mg Sups",
						uso: "uso interno"
					},
					{
						descricao: "500 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "800 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "3,0 g Emul RetPo + Diluente",
						uso: "uso retal"
					},
					{
						descricao: "1000 mg Sups Retal",
						uso: "uso retal"
					},
					{
						descricao: "10 mg/mL Emul Ret",
						uso: "uso retal"
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
					{
						posologia: "Aplicar 01 supositório via retal uma vez ao dia.",
						quantidade: "30",
						forma: "sup"
					},
					{
						posologia: "Aplicar 01 supositório via retal de 12 em 12 horas.",
						quantidade: "60",
						forma: "sup"
					},
				]
			},
			{
				farmaco: "Metformina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "MTF",
				nomescomerciais: [
					{
						nomefantasia: "Glifage XR"
					},
					{
						nomefantasia: "Mytfor LP"
					},
				],
				apresentacoes: [
					{
						descricao: "500 mg Comp Lib Prol",
						uso: "uso interno"
					},
					{
						descricao: "750 mg Comp Lib Prol",
						uso: "uso interno"
					},
					{
						descricao: "1000 mg Comp Lib Prol",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia no jantar.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido durante o café da manhã e no jantar.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido durante o café da manhã, no almoço e no jantar.",
						quantidade: "60",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Metildopa",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Aldomet"
					},
				],
				apresentacoes: [
					{
						descricao: "250 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "500 mg Comp Rev",
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
				farmaco: "Metilprednisolona",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "Corticoide",
				orientacoes: "Iniciar o tratamento somente após a profilaxia com Albendazol. \r\n" +
					"Fazer aplicação somente com supervisão médica.",
				abreviatura: "MPDN",
				nomescomerciais: [
					{
						nomefantasia: "Solu-Medrol"
					},
				],
				apresentacoes: [
					{
						descricao: "125 mg Pó Liof Sol Inj",
						uso: "uso externo",
					},
					{
						descricao: "500 mg Pó Liof Sol Inj",
						uso: "uso externo"
					},

					{
						descricao: "1000 mg Pó Liof Sol Inj",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar 1 frasco endovenosamente em dose única. \r\n" +
							"Fazer a infusão em pelo menos 30 minutos (ideal em uma hora).",
						quantidade: "1",
						forma: "frasco",
					},
					{
						posologia: "Aplicar 2 frascos endovenosamente em dose única. \r\n" +
							"Fazer a infusão em pelo menos 30 minutos (ideal em uma hora).",
						quantidade: "2",
						forma: "frascos",
					},
					{
						posologia: "Aplicar 1 frasco endovenosamente uma vez ao dia por 3 dias consecutivos. \r\n" +
							"Fazer cada infusão em pelo menos 30 minutos (ideal em uma hora).",
						quantidade: "6",
						forma: "frascos",
					},
					{
						posologia: "Aplicar 2 frascos endovenosamente uma vez ao dia por 3 dias consecutivos. \r\n" +
							"Fazer cada infusão em pelo menos 30 minutos (ideal em uma hora).",
						quantidade: "6",
						forma: "frascos",
					},
				]
			},
			{
				farmaco: "Metoclopramida",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Plasil"
					},
					{
						nomefantasia: "Plamet"
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
						posologia: "Tomar 01 cápsula de 8 em 8 horas se náusea ou vômitos.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula de 8 em 8 horas por 3 dias.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Metoprolol, succinato",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "ATL",

				nomescomerciais: [
					{
						nomefantasia: "Selozok"
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
					},
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
						quantidade: "60",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Metotrexato",
				lme: true,
				controlado: false,
				favorito: true,
				classe: "MMCDS",
				orientacoes: "O rótulo (e bula) trás a instrução de administração IM ou EV. Para tratamento de doenças reumatológicas, entretanto, pode-se realizar a aplicação subcutânea. \r\n" +
					"Ressalta-se que a bula dessa medicação carece de atualização, e um processo para isso está em tramitação.",
				abreviatura: "MTX INJ",

				nomescomerciais: [
					{
						nomefantasia: "Miantrex CS"
					},
					{
						nomefantasia: "Hytas"
					},
				],
				apresentacoes: [
					{
						descricao: "25 mg/mL Sol Inj",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Aplicar 0,3 mL no subcutâneo (não é necessário fazer intramuscular conforme indicado no rótulo) uma vez por semana.",
						quantidade: "4",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 0,4 mL no subcutâneo (não é necessário fazer intramuscular conforme indicado no rótulo) uma vez por semana.",
						quantidade: "4",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 0,5 mL no subcutâneo (não é necessário fazer intramuscular conforme indicado no rótulo) uma vez por semana.",
						quantidade: "4",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 0,6 mL no subcutâneo (não é necessário fazer intramuscular conforme indicado no rótulo) uma vez por semana.",
						quantidade: "4",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 0,7 mL no subcutâneo (não é necessário fazer intramuscular conforme indicado no rótulo) uma vez por semana.",
						quantidade: "4",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 0,8 mL no subcutâneo (não é necessário fazer intramuscular conforme indicado no rótulo) uma vez por semana.",
						quantidade: "4",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 0,9 mL no subcutâneo (não é necessário fazer intramuscular conforme indicado no rótulo) uma vez por semana.",
						quantidade: "4",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 1,0 mL (meio frasco) no subcutâneo (não é necessário fazer intramuscular conforme indicado no rótulo) uma vez por semana.",
						quantidade: "4",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 0,4 mL no subcutâneo (não é necessário fazer intramuscular conforme indicado no rótulo) uma vez por semana por 4 semanas. \r\n" +
							"Então, aplicar 0,6 mL no subcutâneo uma vez por semana daí por diante.",
						quantidade: "4",
						forma: "frascos"
					},
				]
			},
			{
				farmaco: "Metotrexato",
				lme: true,
				controlado: false,
				favorito: true,
				classe: "MMCDS",
				orientacoes: "Ressalta-se que a bula dessa medicação carece de atualização, e um processo para isso está em tramitação.",
				abreviatura: "MTX VO",

				nomescomerciais: [
					{
						nomefantasia: "Tecnomed"
					},
					{
						nomefantasia: "Reutrexato"
					},
				],
				apresentacoes: [
					{
						descricao: "2,5 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 03 comprimidos uma vez por semana. Todos os comprimidos devem ser tomados no mesmo dia. \r\nNão tomar a medicação nos outros dias.",
						quantidade: "12",
						forma: "comp"
					},
					{
						posologia: "Tomar 04 comprimidos uma vez por semana. Todos os comprimidos devem ser tomados no mesmo dia. \r\nNão tomar a medicação nos outros dias.",
						quantidade: "16",
						forma: "comp"
					},
					{
						posologia: "Tomar 05 comprimidos uma vez por semana. Todos os comprimidos devem ser tomados no mesmo dia. \r\nNão tomar a medicação nos outros dias.",
						quantidade: "20",
						forma: "comp"
					},
					{
						posologia: "Tomar 06 comprimidos uma vez por semana. Todos os comprimidos devem ser tomados no mesmo dia. \r\nNão tomar a medicação nos outros dias.",
						quantidade: "24",
						forma: "comp"
					},
					{
						posologia: "Tomar 07 comprimidos uma vez por semana. Todos os comprimidos devem ser tomados no mesmo dia. \r\nNão tomar a medicação nos outros dias.",
						quantidade: "28",
						forma: "comp"
					},
					{
						posologia: "Tomar 08 comprimidos uma vez por semana. Todos os comprimidos devem ser tomados no mesmo dia. \r\nNão tomar a medicação nos outros dias.",
						quantidade: "32",
						forma: "comp"
					},
					{
						posologia: "Tomar 09 comprimidos uma vez por semana. Todos os comprimidos devem ser tomados no mesmo dia. \r\nNão tomar a medicação nos outros dias.",
						quantidade: "36",
						forma: "comp"
					},
					{
						posologia: "Tomar 10 comprimidos uma vez por semana. Todos os comprimidos devem ser tomados no mesmo dia. \r\nNão tomar a medicação nos outros dias.",
						quantidade: "40",
						forma: "comp"
					},
					{
						posologia: "Tomar 04 comprimidos uma vez por semana. \r\n \r\n" +
							"Escolha um dia da semana (por exemplo, na sexta-feira). \r\n" +
							"Tomar 02 comprimidos na sexta-feira pela manhã e tomar outros 02 comprimidos na sexta-feira a tarde. \r\n" +
							"Não tomar o Metotrexate nos outros dias.",
						quantidade: "16",
						forma: "comp"
					},
					{
						posologia: "Tomar 06 comprimidos uma vez por semana. \r\n \r\n" +
							"Escolha um dia da semana (por exemplo, na sexta-feira). \r\n" +
							"Tomar 03 comprimidos na sexta-feira pela manhã e tomar outros 03 comprimidos na sexta-feira a tarde. \r\n" +
							"Não tomar o Metotrexate nos outros dias.",
						quantidade: "24",
						forma: "comp"
					},
					{
						posologia: "Tomar 08 comprimidos uma vez por semana. \r\n \r\n" +
							"Escolha um dia da semana (por exemplo, na sexta-feira). \r\n" +
							"Tomar 04 comprimidos na sexta-feira pela manhã e tomar outros 04 comprimidos na sexta-feira a tarde. \r\n" +
							"Não tomar o Metotrexate nos outros dias.",
						quantidade: "32",
						forma: "comp"
					},
					{
						posologia: "Tomar 04 comprimidos uma vez por semana por 4 semanas, então tome 06 comprimidos uma vez por semana. \r\n \r\n" +
							"Escolha um dia da semana (por exemplo, na sexta-feira). \r\n" +
							"Tomar 02 comprimidos na sexta-feira pela manhã e \r\n" +
							"tomar outros 02 comprimidos na sexta-feira a tarde \r\n" +
							"por 4 semanas, então" +
							"tomar 03 comprimidos na sexta-feira pela manhã e \r\n" +
							"tomar outros 03 comprimidos na sexta-feira a tarde continuamente." +
							"Não tomar o Metotrexate nos outros dias.",
						quantidade: "24",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Metronidazol",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Flagyl"
					},
					{
						nomefantasia: "Floxocip"
					},
				],
				apresentacoes: [
					{
						descricao: "250 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "400 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "500 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "100 mg/g Geleia Vag",
						uso: "uso externo"
					},
					{
						descricao: "5,0 mg/mL Sol Inj",
						uso: "uso externo"
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
					{
						posologia: "Tomar 2 g (4 comprimidos de 500 mg) em dose única.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 2 g (4 comprimidos de 500 mg) em dose única, no primeiro e terceiro dias de tratamento.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Aplicar uma medida (um aplicador completamente cheio) de preferência à noite, ao deitar-se, durante 7 dia.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Aplicar uma medida (um aplicador completamente cheio) de preferência à noite, ao deitar-se, durante 10 dia.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Aplicar uma medida (um aplicador completamente cheio) de preferência à noite, ao deitar-se, durante 14 dia.",
						quantidade: "2",
						forma: "caixas"
					},
				]
			},
			{
				farmaco: "Micofenolato de mofetila",
				lme: true,
				controlado: false,
				favorito: true,
				classe: "MMCDS",
				orientacoes: "",
				abreviatura: "MMF",

				nomescomerciais: [
					{
						nomefantasia: "Cellcept"
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
					{
						posologia: "Tomar 03 comprimidos de 12 em 12 horas.",
						quantidade: "180",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Miconazol",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Daktarin"
					},
				],
				apresentacoes: [
					{
						descricao: "20 mg/mL Gel Oral",
						uso: "uso externo"
					},
					{
						descricao: "20 mg/g Loç Cremosa",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Aplique 2,5 mL de gel de 6 em 6 horas. O gel não deve ser deglutido imediatamente, mas " +
							"mantido na boca o maior tempo possível. O tratamento deve ser mantido por pelo menos uma semana " +
							"após o desaparecimento dos sintomas.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Aplicar uma fina camada na região afetada de 12 em 12 horas por 4 semanas.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Minoxidil",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Aloxidil"
					},
				],
				apresentacoes: [
					{
						descricao: "50 mg/mL Sol Capilar",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar 1 mL no couro cabeludo, sobre a área calva e áreas circunvizinhas, duas vezes ao dia, " +
							"iniciando a aplicação no centro da área afetada. \r\n" +
							"Aplicar apenas quando o cabelo e o couro cabeludo estiverem perfeitamente secos. \r\n" +
							"Espere pelo menos quatro horas após a aplicação da medicação para lavar os cabelos novamente",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Aplicar uma fina camada na região afetada de 12 em 12 horas por 4 semanas.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Moxifloxacino",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Avalox"
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
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 14 dias.",
						quantidade: "2",
						forma: "caixas"
					},
				]
			},
			{
				farmaco: "Mupirocina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Bactroban"
					},
				],
				apresentacoes: [
					{
						descricao: "20mg/g Pom Derm",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar uma fina camada na região afetada de 8 em 8 horas (três vezes ao dia) por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Naproxeno",
				lme: true,
				controlado: false,
				favorito: true,
				classe: "ANTIINFLAMATORIO",
				orientacoes: "Tomar de estômago cheio.",
				abreviatura: "Nx",
				nomescomerciais: [
					{
						nomefantasia: "Naprosyn"
					},
				],
				apresentacoes: [
					{
						descricao: "250 mg Comp",
						uso: "uso interno"
					},
					{
						descricao: "500 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas somente se dor.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 3 dias.",
						quantidade: "1",
						forma: "caixa"
					},
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
				farmaco: "Naproxeno + Esomeprazol",
				lme: false,
				controlado: false,
				favorito: true,
				classe: "ANTIINFLAMATORIO",
				orientacoes: "Tomar pelo menos 30 minutos antes das refeições. \r\n" +
					"Este medicamento não pode ser partido, mastigado ou esmagado.",
				abreviatura: "Nx",
				nomescomerciais: [
					{
						nomefantasia: "Vimovo"
					},
				],
				apresentacoes: [
					{
						descricao: "500+20 mg Comp Lib Mod",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas somente se dor.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 3 dias.",
						quantidade: "1",
						forma: "caixa"
					},
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
				farmaco: "Natalizumabe",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "MMCDB",
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Trazer a medicação para aplicação dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável. \r\n" +
					"- Agendar a infusão com antecedência se possível. \r\n" +
					"- Aplicar somente em Centro de Infusão habilitado. \r\n",
				abreviatura: "NTL",
				nomescomerciais: [
					{
						nomefantasia: "Tysabri"
					},
				],
				apresentacoes: [
					{
						descricao: "20 mg/mL",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar 01 frasco a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 4 semanas.",
						quantidade: "6",
						forma: "frascos"
					},
				]
			},
			{
				farmaco: "Nifedipina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "NFD",
				nomescomerciais: [
					{
						nomefantasia: "Adalat Oros"
					},
				],
				apresentacoes: [
					{
						descricao: "20 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "30 mg Comp",
						uso: "uso interno"
					},
					{
						descricao: "60 mg Comp",
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
				farmaco: "Nimesulida",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "ANTIINFLAMATORIO",
				orientacoes: "Tomar de estômago cheio.",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Nisulid"
					},
				],
				apresentacoes: [
					{
						descricao: "100 mg Comp",
						uso: "uso interno"
					},
					{
						descricao: "20 mg/g Gel",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas somente se dor.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 3 dias.",
						quantidade: "1",
						forma: "caixa"
					},
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
					{
						posologia: "Aplique uma fina camada sobre a área afetada de 12 em 12 horas.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Nistatina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Micostatin"
					},
				],
				apresentacoes: [
					{
						descricao: "100.000 U/g Crem Vag",
						uso: "uso externo"
					},
					{
						descricao: "100.000 U/mL Susp Or",
						uso: "uso externo"
					},
					{
						descricao: "25.000 U/g Crem Vag",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Fazer bochechos com 5mL quatro vezes ao dia. \r\n" +
							"A solução deve ser bochechada por 1 minuto e depois engolida.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Remover a tampa do tubo, perfurar completamente o lacre do tubo utilizando a parte" +
							"pontiaguda da tampa. \r\n" +
							"Adaptar o aplicador ao bico do tubo. \r\n" +
							"Puxar o êmbolo do aplicador até o final do curso e em seguida apertar delicadamente a base do" +
							"tubo de maneira a forçar a entrada do creme no aplicador, preenchendo-o totalmente. \r\n" +
							"Desencaixar o aplicador e tampar o tubo imediatamente. \r\n" +
							"Deitar-se de costas e introduzir o aplicador na vagina suavemente, sem causar desconforto. \r\n" +
							"Empurrar o êmbolo com o dedo indicador até o final de seu curso, depositando assim todo" +
							"o creme na vagina. \r\n" +
							"O aplicador deve ser imediatamente descartado.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Nitazoxanida",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Annita"
					},
				],
				apresentacoes: [
					{
						descricao: " 500 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 3 dias.",
						quantidade: "1",
						forma: "Caixa"
					},
				]
			},
			{
				farmaco: "Nitrofurantoína",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Macrodantina"
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
						posologia: "Tomar 01 cápsula de 6 em 6 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula de 6 em 6 horas por 7 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 cápsula de 6 em 6 horas por 10 dias.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Tomar 01 cápsula uma vez ao dia na hora de se deitar",
						quantidade: "30",
						forma: "cáp"
					},
				]
			},
			{
				farmaco: "Norfloxacino",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Floxacin"
					},
				],
				apresentacoes: [
					{
						descricao: "400 mg Comp Rev",
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
				farmaco: "Nortriptilina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "NTL",

				nomescomerciais: [
					{
						nomefantasia: "Pamelor"
					},
				],
				apresentacoes: [
					{
						descricao: "10 mg Cap Dura",
						uso: "uso interno",
					},
					{
						descricao: "25 mg Cap Dura",
						uso: "uso interno",
					},
					{
						descricao: "50 mg Cap Dura",
						uso: "uso interno",
					},
					{
						descricao: "75 mg Cap Dura",
						uso: "uso interno",
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 cápsula a noite próximo à hora de dormir.",
						quantidade: "30",
						forma: "cáp"
					},
					{
						posologia: "Tomar 02 cápsulas a noite próximo à hora de dormir. ",
						quantidade: "60",
						forma: "cáp"
					},
				]
			},
			{
				farmaco: "Omalizumabe",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "MMCDB",
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Transportar a medicação somente dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável.",
				abreviatura: "OML",
				nomescomerciais: [
					{
						nomefantasia: "Xolair"
					},
				],
				apresentacoes: [
					{
						descricao: "150 mg/mL Fra",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar 01 frasco a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, no subcutâneo, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 2 semanas.",
						quantidade: "6",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, no subcutâneo, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 2 semanas.",
						quantidade: "12",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, no subcutâneo, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 2 semanas.",
						quantidade: "9",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, no subcutâneo, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 2 semanas.",
						quantidade: "12",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 01 frasco a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, no subcutâneo, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "6",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 02 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, no subcutâneo, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "12",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 03 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, no subcutâneo, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "9",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 04 frascos a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, no subcutâneo, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações devem ser realizadas a cada 4 semanas.",
						quantidade: "12",
						forma: "frascos"
					},
				]
			},
			{
				farmaco: "Omeprazol",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "Aguardar de 30 a 60 minutos para se alimentar.",
				abreviatura: "OMZ",
				nomescomerciais: [
					{
						nomefantasia: "Peprazol"
					},
					{
						nomefantasia: "Lozeprel"
					},
				],
				apresentacoes: [
					{
						descricao: "20 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "40 mg Comp Rev",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido pela manhã em jejum.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos pela manhã em jejum.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã e a tarde.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã em jejum por 30 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã em jejum por 60 dias.",
						quantidade: "2",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Ondansetrona",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "Colocar o comprimido na ponta da língua para que este se dissolva. \r\n" +
					"Engolir com saliva. Não é necessário administrar com líquidos.",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Zofran"
					},
					{
						nomefantasia: "Vonau"
					},
				],
				apresentacoes: [
					{
						descricao: "4,0 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "8,0 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas se náusea ou vômitos.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 3 dias.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Oseltamivir",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Tamiflu"
					},
				],
				apresentacoes: [
					{
						descricao: "75 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 3 dias.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Oxcarbazepina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTICONVULSIVANTE",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Trileptal"
					},
				],
				apresentacoes: [
					{
						descricao: "300 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "600 mg Comp Rev",
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
				]
			},
			{
				farmaco: "Pamidronato",
				lme: true,
				controlado: false,
				favorito: false,
				orientacoes: "O pamidronato não é um medicamento aprovado para o tratamento " +
					"da osteoporose; no entanto, é a única opc¸ão não oral disponível em nosso" +
					"sistema público de saúde para pacientes que têm osteoporose e contraindicações" +
					"para o uso de bifosfonatos orais.",
				abreviatura: "PMD",
				classe: "",
				nomescomerciais: [
					{
						nomefantasia: "Fauldpami"
					}
				],
				apresentacoes: [
					{
						descricao: "30 mg Inj Fr",
						uso: "uso externo"
					},
					{
						descricao: "60 mg Inj Fr Amp",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Aplicar 01 frasco, por via intravenosa a cada 3 meses, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Após reconstituição, deve-se diluir o fármaco em 500 ml de soro fisiológico. \r\n"
							+ "A duração mínima da infusão é de 2 horas.",
						quantidade: "1",
						forma: "frasco"
					},
				]
			},
			{
				farmaco: "Pantoprazol",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "Aguardar 30 a 60 minutos antes de se alimentar.",
				abreviatura: "PTZ",
				nomescomerciais: [
					{
						nomefantasia: "Pantozol"
					},
					{
						nomefantasia: "Adipept"
					},
				],
				apresentacoes: [
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
						posologia: "Tomar 01 comprimido pela manhã em jejum.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos pela manhã em jejum.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas. \r\n" +
							"Tomar longe das refeições",
						quantidade: "60",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Pantoprazol magnésico di-hidratado",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "Aguardar 30 a 60 minutos antes de se alimentar.",
				abreviatura: "PTZ-Mg",
				nomescomerciais: [
					{
						nomefantasia: "Tecta"
					},
					{
						nomefantasia: "Inilok"
					},
				],
				apresentacoes: [
					{
						descricao: "40 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido pela manhã em jejum.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos pela manhã em jejum.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas. \r\n" +
							"Tomar longe das refeições",
						quantidade: "60",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Paracetamol",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "ANALGÉSICO",
				orientacoes: "",
				abreviatura: "PCT",
				nomescomerciais: [
					{
						nomefantasia: "Tylenol"
					},
				],
				apresentacoes: [
					{
						descricao: "500 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "750 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 6 em 6 horas somente se dor.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 8 em 8 horas somente se dor.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Paroxetina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "PXT",
				nomescomerciais: [
					{
						nomefantasia: "Aropax"
					},
					{
						nomefantasia: "Cebrilin"
					},
				],
				apresentacoes: [
					{
						descricao: "20 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido ao dia, preferencialmente pela manhã.",
						quantidade: "30",
						forma: "cap"
					},
					{
						posologia: "Tomar 02 comprimidos ao dia, preferencialmente pela manhã.",
						quantidade: "60",
						forma: "cap"
					},
				]
			},
			{
				farmaco: "Pilocarpina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Selagen"
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
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 8 em 8 horass.",
						quantidade: "90",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Piroxicam",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "ANTIINFLAMATORIO",
				orientacoes: "Tomar de estômago cheio.",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Feldene"
					},
				],
				apresentacoes: [
					{
						descricao: "20 mg Comp",
						uso: "uso interno"
					},
					{
						descricao: "5 mg/g Gel",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas somente se dor.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 3 dias.",
						quantidade: "1",
						forma: "caixa"
					},
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
					{
						posologia: "Aplique uma fina camada sobre a área afetada de 12 em 12 horas.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Pramipexol",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "",

				nomescomerciais: [
					{
						nomefantasia: "Sifrol"
					},
					{
						nomefantasia: "Stabil"
					},
				],
				apresentacoes: [
					{
						descricao: "0,125 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "0,250 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "1,0 mg Comp",
						uso: "uso interno",
					},
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
				farmaco: "Prednisolona",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CORTICOIDE",
				orientacoes: "",
				abreviatura: "PDLN",
				nomescomerciais: [
					{
						nomefantasia: "Predsim"
					},
					{
						nomefantasia: "Prelone"
					},
				],
				apresentacoes: [
					{
						descricao: "5 mg Comp",
						uso: "uso interno"
					},
					{
						descricao: "20 mg Comp",
						uso: "uso interno"
					},
					{
						descricao: "40 mg Comp",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido pela manhã por 14 dias, então \r\n" +
							"tome 1/2 (meio) comprimido pela manhã até o retorno.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã por 20 dias, então \r\n" +
							"tome 1/2 (meio) comprimido pela manhã até o retorno.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã por 7 dias, então \r\n" +
							"tome 1/2 (meio) comprimido pela manhã mais 7 dias, então pare.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido pela manhã por 5 dias, então \r\n" +
							"tome 1/2 (meio) comprimido pela manhã por 4 dias, então pare.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 03 comprimidos pela manhã por 7 dias, então \r\n" +
							"tome  02 comprimidos pela manhã por 7 dias, então \r\n" +
							"tome 01 comprimido pela manhã por 7 dias, então pare.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 02 comprimidos pela manhã por 7 dias, então \r\n" +
							"tome 01 comprimido pela manhã por 7 dias, então \r\n" +
							"tome 1/2 (meio) comprimido pela manhã por 7 dias, então pare.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã em dias alternados (dia sim, dia não).",
						quantidade: "15",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos pela manhã.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 03 comprimidos pela manhã.",
						quantidade: "90",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos pela manhã e 01 comprimido a tarde.",
						quantidade: "90",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Prednisolona",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CORTICOIDE",
				orientacoes: "",
				abreviatura: "PDN",
				nomescomerciais: [
					{
						nomefantasia: "Meticorten"
					},
				],
				apresentacoes: [
					{
						descricao: "5 mg Comp",
						uso: "uso interno"
					},
					{
						descricao: "20 mg Comp",
						uso: "uso interno"
					},
					{
						descricao: "40 mg Comp",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido pela manhã por 14 dias, então \r\n" +
							"tome 1/2 (meio) comprimido pela manhã até o retorno.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã por 20 dias, então \r\n" +
							"tome 1/2 (meio) comprimido pela manhã até o retorno.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã por 7 dias, então \r\n" +
							"tome 1/2 (meio) comprimido pela manhã mais 7 dias, então pare.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 01 comprimido pela manhã por 5 dias, então \r\n" +
							"tome 1/2 (meio) comprimido pela manhã por 4 dias, então pare.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 03 comprimidos pela manhã por 7 dias, então \r\n" +
							"tome  02 comprimidos pela manhã por 7 dias, então \r\n" +
							"tome 01 comprimido pela manhã por 7 dias, então pare.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tome 02 comprimidos pela manhã por 7 dias, então \r\n" +
							"tome 01 comprimido pela manhã por 7 dias, então \r\n" +
							"tome 1/2 (meio) comprimido pela manhã por 7 dias, então pare.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã em dias alternados (dia sim, dia não).",
						quantidade: "15",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos pela manhã.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 03 comprimidos pela manhã.",
						quantidade: "90",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos pela manhã e 01 comprimido a tarde.",
						quantidade: "90",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Pregabalina",
				lme: false,
				controlado: true,
				favorito: true,
				classe: "ANTICONVULSIVANTE",
				orientacoes: "",
				abreviatura: "PBL",
				nomescomerciais: [
					{
						nomefantasia: "Lyrica"
					},
					{
						nomefantasia: "Prebictal"
					},
					{
						nomefantasia: "Dorene"
					}
				],
				apresentacoes: [
					{
						descricao: "50 mg Cap Dura",
						uso: "uso interno"
					},
					{
						descricao: "75 mg Cap Dura",
						uso: "uso interno"
					},
					{
						descricao: "100 mg Cap Dura",
						uso: "uso interno"
					},
					{
						descricao: "150 mg Cap Dura",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 cápsula uma vez ao dia, preferencialmente a noite.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Iniciar após acabar as amostras de 50mg. \r\n" +
							"Tomar 01 cápsula de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 cápsula de 8 em 8 horas.",
						quantidade: "90",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 cápsula pela manhã e 02 cápsulas a noite.",
						quantidade: "90",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 cápsula pela manha, 01 cápsula a tarde e 02 cápsulas a noite.",
						quantidade: "120",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 cápsulas de 12 em 12 horas.",
						quantidade: "120",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Prometazina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "Essa medicação pode causar sonolência e diminuição de reflexos.",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Fenergan"
					},
				],
				apresentacoes: [
					{
						descricao: "25 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "0,02 g/g Crem Derm",
						uso: "uso externo"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 8 em 8 horas por 3 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 8 em 8 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 3 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas por 5 dias.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Aplique uma fina camada sobre a área afetada de 12 em 12 horas.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Propanolol",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "PPL",

				nomescomerciais: [
					{
						nomefantasia: "Inderal"
					},
				],
				apresentacoes: [
					{
						descricao: "10 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "20 mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "40 mg Comp",
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
				]
			},
			{
				farmaco: "Quetiapina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Seroquel"
					},
					{
						nomefantasia: "Quielix"
					},
				],
				apresentacoes: [
					{
						descricao: "25 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "50 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "100 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "200 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "300 mg Comp Rev",
						uso: "uso interno",
					},
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
				farmaco: "Quetiapina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Seroquel XRO"
					},
				],
				apresentacoes: [
					{
						descricao: "25 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "50 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "100 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "200 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "300 mg Comp Rev",
						uso: "uso interno",
					},
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
				farmaco: "Racecadotrila",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",

				nomescomerciais: [
					{
						nomefantasia: "Tiorfan"
					},
				],
				apresentacoes: [
					{
						descricao: "100 mg Cap",
						uso: "uso interno",
					},
				],
				posologias: [
					{
						posologia: "Na primeira vez que tomar a medicação, tomar 02 cápsulas. \r\n" +
							"Então, tomar 01 cápsula de 12 em 12 horas até interromper a diarréia.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Raloxifeno",
				lme: true,
				controlado: false,
				favorito: false,
				classe: "OSTEOMETABOLICO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Evista"
					},
				],
				apresentacoes: [
					{
						descricao: "60 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Risedronato",
				lme: true,
				controlado: false,
				favorito: true,
				classe: "OSTEOMETABOLICO",
				orientacoes: "",
				abreviatura: "RSD",
				nomescomerciais: [
					{
						nomefantasia: "Actonel"
					},
					{
						nomefantasia: "Osteotrat"
					},
				],
				apresentacoes: [
					{
						descricao: "35 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "150 mg Comp Rev",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez por semana. \r\n" +
							"Tomar em jejum. Aguardar 60 minutos antes da se alimentar. \r\n" +
							"Tomar com um copo cheio de água filtrada (180 a 240 mL). \r\n" +
							"Você deverá ficar de sentada, de pé ou andando após tomar a medicação. \r\n" +
							"NÃO deitar nos 60 minutos seguintes após tomar o medicamento. \r\n" +
							"Previsão de tratamento é de um ano.",
						quantidade: "4",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido uma vez por mês. \r\n" +
							"Tomar em jejum. Aguardar 60 minutos antes da se alimentar. \r\n" +
							"Tomar com um copo cheio de água filtrada (180 a 240 mL). \r\n" +
							"Você deverá ficar de sentada, de pé ou andando após tomar a medicação. \r\n" +
							"NÃO deitar nos 60 minutos seguintes após tomar o medicamento. \r\n" +
							"Previsão de tratamento é de um ano.",
						quantidade: "1",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Rituximabe",
				lme: true,
				controlado: false,
				favorito: true,
				orientacoes: "Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"Trazer a medicação para aplicação dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável. \r\n" +
					"Agendar a infusão com antecedência se possível. \r\n" +
					"Caso os serviços hospitalares locais não tenham as medicações ou condições (bomba de infusão) " +
					"para administração da medicação, recomenda-se o encaminhamento, via central de leitos, para hospital " +
					"de maior porte que tenha condições de administrar a medicação em regime de internamento " +
					"(03.03.09.031-6 - TRATAMENTO DAS POLIARTROPATIAS INFLAMATORIAS).",
				abreviatura: "RTX",
				classe: "MMCDB",
				nomescomerciais: [
					{
						nomefantasia: "Mabthera"
					},
					{
						nomefantasia: "Riximyo"
					},

				],
				apresentacoes: [
					{
						descricao: "500 mg Inj Fr Amp",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Prescrição para infusão de Rituximabe. Fazer em hospital ou centro de infusão habilitado. \r\n" +
							"Se realizado em hospital, aconselha-se o internamento para devida preparação, administração e " +
							"observação da paciente durante a aplicação. Não é essencial o internamento para o especialista, " +
							"mas caso necessário, sua presença pode requisitada. \r\n \r\n" +
							"Medicamentos pré infusão \r\n" +
							"Todas devem ser administradas pelo menos 30 minutos antes da aplicação de Rituximabe. \r\n" +
							"\r\n \r\n" +
							"1) Metilprednisolona 100mg \r\n" +
							"Diluir em 100 mL de soro fisiológico 0,9% e infundir endovenoso lentamente. \r\n" +
							"2) Prometazina 25 mg/mL \r\n" +
							"Aplicar 1 ampola intra-muscular." +
							"3) Bromoprida 5 mg/mL \r\n" +
							"Diluir em 100 mL de soro fisiológico 0,9% e infundir endovenoso lentamente dose única. \r\n" +
							"Caso tenha disponível Ondasentrona, esta é preferível." +
							"4) Paracetamol 750mg \r\n" +
							"Toma 01 comprimido oral dose única. \r\n" +
							"Medicamento imunobiológico \r\n \r\n" +
							"1) Rituximabe (500mg Inj Fr Amp) \r\n" +
							"A primeira aplicação (dose de 1000mg) é realizada assim que possível após obtenher a medicação (semana zero). " +
							"A segunda aplicação (dose de 1000mg) é realizada 15 dias após a primeira aplicação " +
							"seguindo o mesmo protocolo com Metilprednisona, Prometazina, Bromoprida e Paracetamol. \r\n" +
							"Reconstituição: \r\n" +
							"Retirar 1000mg de Rituximabe e diluir em 500mL de soro fisiológico a 0,9%. \r\n" +
							"Taxa de infusão \r\n" +
							"Infusão em bomba de infusão \r\n" +
							"Primeiro infusão: Comece 50 mg/h; aumento de 50 mg/h a cada 30min. Não exceder 400 mg/h. \r\n" +
							"Infusões subsequentes: Iniciar 100 mg/h, aumento de 100 mg/h a cada 30min. Não exceder 400 mg/h. \r\n" +
							"Aplicação: \r\n" +
							"Aplicar a diluição endovenosamente por bomba de infusão seguindo a velocidade acima orientada. \r\n \r\n" +
							"Nova aplicação está prevista em 24 semanas após reavaliação médica.",
						quantidade: "4",
						forma: "frascos"
					},
					{
						posologia: "Prescrição para infusão de Rituximabe. Fazer em hospital ou centro de infusão habilitado. \r\n" +
							"Se realizado em hospital, aconselha-se o internamento para devida preparação, administração e " +
							"observação da paciente durante a aplicação. Não é essencial o internamento para o especialista, " +
							"mas caso necessário, sua presença pode requisitada. \r\n \r\n" +
							"Medicamentos pré infusão \r\n" +
							"Todas devem ser administradas pelo menos 30 minutos antes da aplicação de Rituximabe. \r\n" +
							"\r\n \r\n" +
							"1) Metilprednisolona 100mg \r\n" +
							"Diluir em 100 mL de soro fisiológico 0,9% e infundir endovenoso lentamente. \r\n" +
							"2) Prometazina 25 mg/mL \r\n" +
							"Aplicar 1 ampola intra-muscular." +
							"3) Bromoprida 5 mg/mL \r\n" +
							"Diluir em 100 mL de soro fisiológico 0,9% e infundir endovenoso lentamente dose única. \r\n" +
							"Caso tenha disponível Ondasentrona, esta é preferível." +
							"4) Paracetamol 750mg \r\n" +
							"Toma 01 comprimido oral dose única. \r\n" +
							"Medicamento imunobiológico \r\n \r\n" +
							"1) Rituximabe (500mg Inj Fr Amp) \r\n" +
							"A aplicação (dose de 1000mg) é realizada assim que possível após obtenher a medicação (única aplicação). " +
							"Reconstituição: \r\n" +
							"Retirar 1000mg de Rituximabe e diluir em 500mL de soro fisiológico a 0,9%. \r\n" +
							"Taxa de infusão \r\n" +
							"Infusão em bomba de infusão \r\n" +
							"Primeiro infusão: Comece 50 mg/h; aumento de 50 mg/h a cada 30min. Não exceder 400 mg/h. \r\n" +
							"Infusões subsequentes: Iniciar 100 mg/h, aumento de 100 mg/h a cada 30min. Não exceder 400 mg/h. \r\n" +
							"Aplicação: \r\n" +
							"Aplicar a diluição endovenosamente por bomba de infusão seguindo a velocidade acima orientada. \r\n  \r\n" +
							"Nova aplicação está prevista em 24 semanas após reavaliação médica.",
						quantidade: "2",
						forma: "frascos"
					},
					{
						posologia: "Prescrição para infusão de Rituximabe. Fazer em hospital ou centro de infusão habilitado. \r\n" +
							"Se realizado em hospital, aconselha-se o internamento para devida preparação, administração e " +
							"observação da paciente durante a aplicação. Não é essencial o internamento para o especialista, " +
							"mas caso necessário, sua presença pode requisitada. \r\n \r\n" +
							"Medicamentos pré infusão \r\n" +
							"Todas devem ser administradas pelo menos 30 minutos antes da aplicação de Rituximabe. \r\n" +
							"\r\n \r\n" +
							"1) Metilprednisolona 100mg \r\n" +
							"Diluir em 100 mL de soro fisiológico 0,9% e infundir endovenoso lentamente. \r\n" +
							"2) Prometazina 25 mg/mL \r\n" +
							"Aplicar 1 ampola intra-muscular." +
							"3) Bromoprida 5 mg/mL \r\n" +
							"Diluir em 100 mL de soro fisiológico 0,9% e infundir endovenoso lentamente dose única. \r\n" +
							"Caso tenha disponível Ondasentrona, esta é preferível." +
							"4) Paracetamol 750mg \r\n" +
							"Toma 01 comprimido oral dose única. \r\n" +
							"Medicamento imunobiológico \r\n \r\n" +
							"1) Rituximabe (500mg Inj Fr Amp) \r\n" +
							"A aplicação (dose de 500mg) é realizada assim que possível após obtenher a medicação (única aplicação). " +
							"Reconstituição: \r\n" +
							"Retirar 1000mg de Rituximabe e diluir em 500mL de soro fisiológico a 0,9%. \r\n" +
							"Taxa de infusão \r\n" +
							"Infusão em bomba de infusão \r\n" +
							"Primeiro infusão: Comece 50 mg/h; aumento de 50 mg/h a cada 30min. Não exceder 400 mg/h. \r\n" +
							"Infusões subsequentes: Iniciar 100 mg/h, aumento de 100 mg/h a cada 30min. Não exceder 400 mg/h. \r\n" +
							"Aplicação: \r\n" +
							"Aplicar a diluição endovenosamente por bomba de infusão seguindo a velocidade acima orientada. \r\n \r\n" +
							"Nova aplicação está prevista em 24 semanas após reavaliação médica.",
						quantidade: "1",
						forma: "frasco"
					},
					{
						posologia: "Prescrição para infusão de Rituximabe. Fazer em hospital ou centro de infusão habilitado. \r\n" +
							"Se realizado em hospital, aconselha-se o internamento para devida preparação, administração e " +
							"observação da paciente durante a aplicação. Não é essencial o internamento para o especialista, " +
							"mas caso necessário, sua presença pode requisitada. \r\n \r\n" +
							"Protocolo de aplicação de Rituximabe para Granulomatose com poliangite (Granulomatose de Wegener) \r\n" +
							"Medicamentos pré infusão \r\n" +
							"Todas devem ser administradas pelo menos 30 minutos antes da aplicação de Rituximabe. \r\n" +
							"\r\n \r\n" +
							"1) Metilprednisolona 1000mg \r\n" +
							"Diluir 1000mg de Metilprednisolona em 500mL (usar o diluente do produto) e completar com soro " +
							"fisiológico 0,9% até obter 250mL e infudir lentamente (em pelo menos 2 horas (pode levar mais tempo)) " +
							"endovenosamente uma vez ao dia por três dias consecutivos. \r\n" +
							"Caso tenha dificuldade de obter o Metilprednisolona de 500mg, pegar 8 (oito) frascos de Metilprednisolona" +
							"2) Albendazol 400mg \r\n" +
							"Tomar 01 comprimido de 12 em 12 horas por 3 dias." +
							"3) Prometazina 25 mg/mL \r\n" +
							"Aplicar 1 ampola intra-muscular." +
							"4) Bromoprida 5 mg/mL \r\n" +
							"Diluir em 100 mL de soro fisiológico 0,9% e infundir endovenoso lentamente dose única. \r\n" +
							"Caso tenha disponível Ondasentrona, esta é preferível." +
							"5) Paracetamol 750mg \r\n" +
							"Toma 01 comprimido oral dose única. \r\n" +
							"Medicamento imunobiológico \r\n \r\n" +
							"1) Rituximabe (500mg Inj Fr Amp) \r\n" +
							"Dose deve ser calculada no dia da aplicação" +
							"375mg/m² sendo uma dose por semana por 4 semana. Usar formula DuBois." +
							"Reconstituição: \r\n" +
							"Retirar 1000mg de Rituximabe e diluir em 500mL de soro fisiológico a 0,9%. \r\n" +
							"Taxa de infusão \r\n" +
							"Infusão em bomba de infusão \r\n" +
							"Primeiro infusão: Comece 50 mg/h; aumento de 50 mg/h a cada 30min. Não exceder 400 mg/h. \r\n" +
							"Infusões subsequentes: Iniciar 100 mg/h, aumento de 100 mg/h a cada 30min. Não exceder 400 mg/h. \r\n" +
							"Aplicação: \r\n" +
							"Aplicar a diluição endovenosamente por bomba de infusão seguindo a velocidade acima orientada. \r\n \r\n" +
							"Nova aplicação está prevista em 24 semanas após reavaliação médica.",
						quantidade: "8",
						forma: "frascos"
					},
				]
			},
			{
				farmaco: "Rosuvastatina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",

				nomescomerciais: [
					{
						nomefantasia: "Crestor"
					},
					{
						nomefantasia: "Trezor"
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
				farmaco: "Sertralina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "SRT",
				nomescomerciais: [
					{
						nomefantasia: "Zoloft"
					},
					{
						nomefantasia: "Assert"
					},
				],
				apresentacoes: [
					{
						descricao: "50 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "100 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido ao dia, preferencialmente pela manhã.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos ao dia, preferencialmente pela manhã.",
						quantidade: "60",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Sildenafila",
				lme: true,
				controlado: false,
				favorito: true,
				classe: "VASOATIVO",
				orientacoes: "",
				abreviatura: "SDF",

				nomescomerciais: [
					{
						nomefantasia: "Videnfil"
					},
					{
						nomefantasia: "Vasifil"
					},
				],
				apresentacoes: [
					{
						descricao: "25 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "50 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "100 mg Comp Rev",
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
					{
						posologia: "Tomar 01 comprimido de 8 em 8 horas.",
						quantidade: "90",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Sinvastatina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "SVT",

				nomescomerciais: [
					{
						nomefantasia: "Atenol"
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
						uso: "uso interno",
					},
					{
						descricao: "80 mg Comp Rev",
						uso: "uso interno",
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido a noite, aproximo das 21 horas.",
						quantidade: "30",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Sulfametoxazol + Trimetoprima",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "SMZTMP",
				nomescomerciais: [
					{
						nomefantasia: "Bactrin"
					},
				],
				apresentacoes: [
					{
						descricao: "400 mg + 80 mg Comp",
						uso: "uso interno"
					},
					{
						descricao: "800 mg + 160 mg Comp",
						uso: "uso interno"
					},
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
				farmaco: "Valsartana",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",

				nomescomerciais: [
					{
						nomefantasia: "Diovan"
					},
				],
				apresentacoes: [
					{
						descricao: "40 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "80 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "160 mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "320 mg Comp Rev",
						uso: "uso interno",
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
				farmaco: "Terbinafina",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "Não utilizar bebidas alcoolicas e paracetamol (ou outro medicamento de metabolismo hepático) durante o uso de itraconazol.",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Lamisil"
					},
				],
				apresentacoes: [
					{
						descricao: "125 mg Comp",
						uso: "uso interno"
					},
					{
						descricao: "250 mg Comp",
						uso: "uso interno"
					},
					{
						descricao: "10 mg/g Crem Derm",
						uso: "uso externo"
					},
					{
						descricao: "10 mg/g Sol Top",
						uso: "uso externo"
					},
					{
						descricao: "10 mg/g Gel",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 2 semanas.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 4 semanas.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 6 semanas.",
						quantidade: "2",
						forma: "caixas"
					},
					{
						posologia: "Aplicar uma fina camada sobre a área afetada de 12 em 12 horas por 2 semanas.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Aplicar uma fina camada sobre a área afetada de 12 em 12 horas por 4 semanas.",
						quantidade: "1",
						forma: "caixa"
					},
					{
						posologia: "Aplicar uma fina camada sobre a área afetada de 12 em 12 horas por 6 semanas.",
						quantidade: "2",
						forma: "caixas"
					},
				]
			},
			{
				farmaco: "Teriparatida (ADN recombinante)",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "MMCDB",
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR.",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Fortéo"
					},
				],
				apresentacoes: [
					{
						descricao: "250 mcg\mL Can Inj",
						uso: "uso externo",
					},
				],
				posologias: [
					{
						posologia: "Aplicar 20 mcg no subcutâneo uma vez ao dia.",
						quantidade: "1",
						forma: "Can"
					},
				]
			},
			{
				farmaco: "Tocilizumabe",
				lme: true,
				controlado: false,
				favorito: true,
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Trazer a medicação para aplicação dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável. \r\n" +
					"- Agendar a infusão com antecedência se possível. \r\n" +
					"- Aplicar somente em Centro de Infusão habilitado. \r\n",
				abreviatura: "TCZ",
				classe: "MMCDB",
				nomescomerciais: [
					{
						nomefantasia: "Actemra"
					}
				],
				apresentacoes: [
					{
						descricao: "20 mg/mL Inj Fr Amp",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar 02 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 4 semanas.",
						quantidade: "6",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 03 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 4 semanas.",
						quantidade: "9",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 04 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 4 semanas.",
						quantidade: "12",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 05 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 4 semanas.",
						quantidade: "15",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 06 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 4 semanas.",
						quantidade: "18",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 07 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 4 semanas.",
						quantidade: "21",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 08 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 4 semanas.",
						quantidade: "24",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 09 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 4 semanas.",
						quantidade: "27",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 10 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 4 semanas.",
						quantidade: "30",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 8mg/Kg (a dosagem deve ser confirmada no dia da aplicação com o "
							+ "peso no dia da aplicação) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 4 semanas.",
						quantidade: "8mg/Kg",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 02 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 2 semanas.",
						quantidade: "12",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 03 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 2 semanas.",
						quantidade: "18",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 04 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 2 semanas.",
						quantidade: "24",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 05 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 2 semanas.",
						quantidade: "30",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 06 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 2 semanas.",
						quantidade: "36",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 07 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 2 semanas.",
						quantidade: "42",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 08 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 2 semanas.",
						quantidade: "48",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 09 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 2 semanas.",
						quantidade: "54",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 10 frascos (8mg/Kg) a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "As aplicações seguintes devem ser feitas a cada 2 semanas.",
						quantidade: "60",
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
				farmaco: "Tofacitinibe",
				lme: true,
				controlado: false,
				favorito: true,
				classe: "MMCDPM",
				orientacoes: "",
				abreviatura: "TFC",

				nomescomerciais: [
					{
						nomefantasia: "Xeljanz"
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
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "60",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Topiramato",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTICONVULSIVANTE",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Topamax"
					},
					{
						nomefantasia: "Égide"
					},
					{
						nomefantasia: "Amato"
					}
				],
				apresentacoes: [
					{
						descricao: "25 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "50 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "100 mg Comp Rev",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia, preferencialmente a noite.",
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
				farmaco: "Tramadol",
				lme: false,
				controlado: true,
				favorito: true,
				classe: "OPIOIDE",
				orientacoes: "Esse medicamento pode causar sonolência, tontura e redução dos reflexos.",
				abreviatura: "TMD",
				nomescomerciais: [
					{
						nomefantasia: "Tramal"
					},
					{
						nomefantasia: "Tramadon"
					},
				],
				apresentacoes: [
					{
						descricao: "50 mg Cap Dura",
						uso: "uso interno",
					},
					{
						descricao: "100mg Comp",
						uso: "uso interno",
					},
					{
						descricao: "100 mg/mL Sol",
						uso: "uso interno"
					}
				],
				posologias: [
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
						posologia: "Tomar 20 gotas de 8 em 8 horas se dor. \r\n" +
							"Caso tenha muita sonolência ou tontura, reduzir a dose para " +
							"10 gotas de 12 em 12 horas.",
						quantidade: "2",
						forma: "frascos"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas se dor.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas se dor.",
						quantidade: "1",
						forma: "caixa"
					},
				]
			},
			{
				farmaco: "Tramadol + Paracetamol",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "OPIOIDE",
				orientacoes: "",
				abreviatura: "TMD_PCT",
				nomescomerciais: [
					{
						nomefantasia: "Ultracet"
					},
					{
						nomefantasia: "Paratram"
					},
					{
						nomefantasia: "Revange"
					},
				],
				apresentacoes: [
					{
						descricao: " 37,5 mg + 325 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido de 6 em 6 horas se dor.",
						quantidade: "1",
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
				farmaco: "Trazodona",
				lme: false,
				controlado: true,
				favorito: true,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "TZN",

				nomescomerciais: [
					{
						nomefantasia: "Donaren"
					},
					{
						nomefantasia: "Loredon"
					},
				],
				apresentacoes: [
					{
						descricao: "50mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "100mg Comp Rev",
						uso: "uso interno",
					},
					{
						descricao: "150mg Comp Lib Cont",
						uso: "uso interno",
					},
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
				farmaco: "Trometamol",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Monuril"
					},
				],
				apresentacoes: [
					{
						descricao: "3g Gran",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Dissolver o conteúdo do envelope em um copo d’água. \r\n" +
							"Ingerir de estômago vazio imediatamente após o preparo e " +
							"preferencialmente à noite antes de deitar e depois de urinar. \r\n" +
							"Dose única.",
						quantidade: "1",
						forma: "caixa",
					},
				]
			},
			{
				farmaco: "Upadacitinibe",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "MMCDPM",
				orientacoes: "",
				abreviatura: "TFC",
				nomescomerciais: [
					{
						nomefantasia: "Rinvoq"
					},
				],
				apresentacoes: [
					{
						descricao: "15 mg Comp Rev Lib Prol",
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
				farmaco: "Ustekinumab",
				lme: false,
				controlado: false,
				favorito: false,
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Trazer a medicação para aplicação dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável. \r\n" +
					"- Agendar a infusão com antecedência se possível. \r\n" +
					"- Aplicar somente em Centro de Infusão habilitado. \r\n",
				abreviatura: "UTK",
				classe: "MMCDB",
				nomescomerciais: [
					{
						nomefantasia: "Stelara"
					}
				],
				apresentacoes: [

					{
						descricao: "45 mg/0,5 mL Ser",
						uso: "uso externo"
					},
					{
						descricao: "90 mg/1,0 mL Ser",
						uso: "uso externo"
					},
					{
						descricao: "130 mg/26 mL Fra",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar 01 ampola (seringa) no subcutâneo."
							+ "Inicia-se com aplicações na semana zero e quatro semanas (em relação a primeira aplicação) após "
							+ "a cada 12 (doze) semanas.",
						quantidade: "3",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 01 ampola (seringa) no subcutâneo a cada 12 semanas.",
						quantidade: "1",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 01 ampola (seringa) no subcutâneo a cada 8 semanas.",
						quantidade: "2",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 02 frascos [260 mg] a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Após a aplicação endovenosa, a próxima aplicação será subcutânea em 8 semanas.",
						quantidade: "2",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 03 frascos [360 mg] a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Após a aplicação endovenosa, a próxima aplicação será subcutânea em 8 semanas.",
						quantidade: "3",
						forma: "frascos"
					},
					{
						posologia: "Aplicar 04 frascos [520 mg] a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Após a aplicação endovenosa, a próxima aplicação será subcutânea em 8 semanas.",
						quantidade: "4",
						forma: "frascos"
					},
				]
			},
			{
				farmaco: "Valaciclovir",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIMICROBIANO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Valtrex"
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
						posologia: "Tomar 01 comprimido uma vez ao dia por 7 dias.",
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
				farmaco: "Valproato De Sódio",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTICONVULSIVANTE",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Depakene"
					},
				],
				apresentacoes: [
					{
						descricao: "300 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "500 mg Comp Rev",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia, preferencialmente a noite.",
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
				farmaco: "Valsartana",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Diovan"
					},
					{
						nomefantasia: "Tamcore"
					},
				],
				apresentacoes: [
					{
						descricao: "40mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "80mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "160 mg Comp Rev",
						uso: "uso interno"
					},
					{
						descricao: "320 mg Comp Rev",
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
				farmaco: "Valeriana officinalisL. + Humulus lupulus L.",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Remilev"
					},
				],
				apresentacoes: [
					{
						descricao: "250 mg + 60 mg Comp",
						uso: "uso interno"
					},
				],
				posologias: [
					{
						posologia: "Tome 01 comprimido a noite perto da hora de ir dormir.",
						quantidade: "30",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Varfarina",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Marevan"
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
						posologia: "Tomar 01 comprimido uma vez ao dia.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido em dias alternados (dia sim, dia não).",
						quantidade: "15",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido de 12 em 12 horas.",
						quantidade: "30",
						forma: "comp"
					},
					{
						posologia: "Tomar 02 comprimidos ao dia.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido pela manhã e 02 comprimidos a tarde.",
						quantidade: "60",
						forma: "comp"
					},
					{
						posologia: "Tomar 1/2 (meio) comprimido uma vez ao dia.",
						quantidade: "15",
						forma: "comp"
					},
					{
						posologia: "Tomar 1/2 (meio) comprimido em dias alternados (dia sim, dia não).",
						quantidade: "30",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Venlafaxina",
				lme: false,
				controlado: true,
				favorito: true,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "VFX",
				nomescomerciais: [
					{
						nomefantasia: "Efexor XR"
					},
					{
						nomefantasia: "Alenthus XR"
					},
					{
						nomefantasia: "Venlift OD"
					},
				],
				apresentacoes: [
					{
						descricao: "37,5 mg Cap Dura Lib Prol",
						uso: "uso interno"
					},
					{
						descricao: "75,0 mg Cap Dura Lib Prol",
						uso: "uso interno"
					},
					{
						descricao: "150 mg Cap Dura Lib Prol",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 cápsula ao dia, preferencialmente pela manhã.",
						quantidade: "30",
						forma: "cap"
					},
					{
						posologia: "Tomar 02 cápsulas ao dia, preferencialmente pela manhã.",
						quantidade: "60",
						forma: "cap"
					},
					{
						posologia: "Tomar 01 cápsula de 12 em 12 horas.",
						quantidade: "60",
						forma: "cap"
					},
				]
			},
			{
				farmaco: "Vitamina D3 (Colecalciferol)",
				lme: false,
				controlado: false,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "VD",
				nomescomerciais: [
					{
						nomefantasia: "Addera D3"
					},
					{
						nomefantasia: "Sany D"
					},
					{
						nomefantasia: "Addera D3"
					},
				],
				apresentacoes: [
					{
						descricao: "1.000 UI Comp",
						uso: "uso interno",
					},
					{
						descricao: "2.000 UI Comp",
						uso: "uso interno",
					},
					{
						descricao: "7.000 UI Comp",
						uso: "uso interno",
					},
					{
						descricao: "10.000 UI Comp",
						uso: "uso interno",
					},
					{
						descricao: "50.000 UI Comp",
						uso: "uso interno",
					},
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido uma vez ao dia por 3 meses.",
						quantidade: "90",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido uma vez por semana por 3 meses.",
						quantidade: "12",
						forma: "comp"
					},
					{
						posologia: "Tomar 01 comprimido uma vez por semana por 4 meses.",
						quantidade: "12",
						forma: "comp"
					},
					{
						posologia: "Iniciar somente após acabar com os de 50.000 ui. \r\n " +
							"Tomar 01 comprimido uma vez por semana por 3 meses.",
						quantidade: "12",
						forma: "comp"
					},
				]
			},
			{
				farmaco: "Vedolizumabe",
				lme: false,
				controlado: false,
				favorito: false,
				orientacoes: "- Manter a medicação na geladeira (2 a 8°C). NÃO CONGELAR. \r\n" +
					"- Trazer a medicação para aplicação dentro da bolsa térmica (ou isopor se não tiver) com gelo reutilizável. \r\n" +
					"- Agendar a infusão com antecedência se possível. \r\n" +
					"- Aplicar somente em Centro de Infusão habilitado. \r\n",
				abreviatura: "ABT",
				classe: "MMCDB",
				nomescomerciais: [
					{
						nomefantasia: "Entyvio"
					}
				],
				apresentacoes: [
					{
						descricao: "300 mg Inj Fr Amp",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar 01 frasco a cada dose, após devida preparação, "
							+ "conforme protocolos preestabelecidos e orientações da bula, endovenosamente, "
							+ "somente em centro de infusão habilitado em terapia assistida. \r\n"
							+ "Inicia-se com aplicações na semana zero, duas semanas e seis semanas (em relação a primeira aplicação) após "
							+ "a cada 4 semanas.",
						quantidade: "8",
						forma: "frascos"
					},
				]
			},
			{
				farmaco: "Vortioxetina ",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "ANTIDEPRESSIVO",
				orientacoes: "",
				abreviatura: "",
				nomescomerciais: [
					{
						nomefantasia: "Brintellix"
					},
				],
				apresentacoes: [
					{
						descricao: "5 mg Comp",
						uso: "uso interno"
					},
					{
						descricao: "10 mg Comp",
						uso: "uso interno"
					}
				],
				posologias: [
					{
						posologia: "Tomar 01 comprimido ao dia, preferencialmente pela manhã.",
						quantidade: "30",
						forma: "cap"
					},
					{
						posologia: "Tomar 02 comprimidos ao dia, preferencialmente pela manhã.",
						quantidade: "60",
						forma: "cap"
					},
				]
			},
			{
				farmaco: "Ácido Zoledrônico",
				lme: false,
				controlado: false,
				favorito: true,
				orientacoes: "Paciente deve-se fazer uma boa hidratação oral, no dia anterior, no " +
					"dia da aplicação e no dia seguinte a aplicação. Tomar preferencialmente 2 (ou mais) " +
					"litros de líquido ao dia.",
				abreviatura: "AZ",
				classe: "OSTEOMETABOLICO",
				nomescomerciais: [
					{
						nomefantasia: "Aclasta"
					},
					{
						nomefantasia: "Densis"
					},
				],
				apresentacoes: [
					{
						descricao: "5 mg Sol Inj",
						uso: "uso externo"
					},
				],
				posologias: [
					{
						posologia: "Aplicar 1 frasco [5 mg em 100 mL solução pronta para aplicação] " +
							"intravenosamente a uma velocidade constante. Aplicar em 30 minutos (não " +
							"menos que 15 minutos). \r\n" +
							"Deve ser realizada uma aplicação ao ano." +
							"Aplicar somente em Centro de Infusão habilitado para terapia assistida.",
						quantidade: "1",
						forma: "frasco"
					},
				]
			},
			{
				farmaco: "Zolpidem",
				lme: false,
				controlado: true,
				favorito: false,
				classe: "CONVENCIONAL",
				orientacoes: "",
				abreviatura: "AMT",

				nomescomerciais: [
					{
						nomefantasia: "Stilnox"
					},
					{
						nomefantasia: "Lioran"
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
					},
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

		], {
				include: [Nomescomerciais, Apresentacoes, Posologias]
			}
		)
	),
)

		// {
		// 	farmaco: "",
		// 	lme: false,
		// 	controlado: false,
		// 	favorito: false,
		// 	classe: "",   //        'Analgésicos', 'Anticonvulsivante', 'Antidepressivo', 'Antimicrobiano', 'Convencional', 'Corticóide', 'MMCDB', 'MMCDS', 'MMCDPM', 
						  //		'Opióide', 'Osteometabolico', 'Suplemento', 'Vasoativo', 'Antiinflamatório'
		// 	orientacoes: "",
		// 	abreviatura: "",
		// 	nomescomerciais: [
		// 		{
		// 			nomefantasia: ""
		// 		},
		// 	],
		// 	apresentacoes: [
		// 		{
		// 			descricao: "",
		// 			uso: ""
		// 		},
		// 	],
		// 	posologias: [
		// 		{
		// 			posologia: "",
		// 			quantidade: "",
		// 			forma: ""
		// 		},
		// 	]
		// },

