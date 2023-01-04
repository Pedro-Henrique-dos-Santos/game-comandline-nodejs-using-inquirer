import chalk from 'chalk'
import inquirer from 'inquirer'


inquirer.prompt([
    {
        name:'desc',
        message:'OBJETIVO SAIA COM OS DOIS PROTAGONISTAS VIVOS'
    },
    {
        name: 'p1',
        message: 'Você acorda em um grande quarto escuro, talvez haja um interruptor (se for uma boa ideia é claro)',
        type: 'list',
        choices: ['procurar-um-interruptor', 'usar-o-flash-do-celular', 'gritar-por-ajuda']
    }, {
        name: 'p2',
        message: 'Uma sombra estranha passa por você em uma velocidade absurda, você tem duas opçôes...',
        type: 'list',
        choices: ['se-esconder-no-armario-ao-lado', 'correr-atras-da-sombra(perigoso)']
    }
])
    .then(answers => {
        if (answers.p1 === 'procurar-um-interruptor') {
            console.log('Você decide procurar um interruptor...')
            console.log('Você passa a mão pela parede a procura de um interruptor')
            console.log('após achar o mesmo tentou aperta-lo mas percebeu algo estranho')
            console.log(chalk.bgBlack.red('Sua mão havia sido decepada'))
            console.log('Fim!')
            console.log('  ')
            console.log('  ')
        }

        if (answers.p1 === 'usar-o-flash-do-celular') {
            console.log('Você decide usar o flash do celular...')
            console.log('Ao ligar a tela do celular percebe que está com 4% de bateria')
            console.log('Mas é o suficiente posso enxergar a sala e determinar onde estou')
            console.log('Ao ligar o flash você vê algo estranho mas familiar')
            console.log('O individuo se esgueira rapidamente ao ver a luz')
            console.log('...A luz o assustou')
            console.log('Não pude ver exatamente mas sinto')
            console.log('Sei que a luz o impediu de me atacar')
            console.log('Derrepente uma notificação')
            console.log(chalk.bgBlack.red('A bateria do celular está prestes a DESCARREGAR'))
            console.log('Fim!')
            console.log(' ')
            console.log(' ')
        }

        if (answers.p1 === 'gritar-por-ajuda') {
            console.log('Você decide gritar por ajuda')
            console.log(chalk.bgBlack.red('...Pessima ideia'))
            console.log(chalk.bgBlack.red('SUA GARGANTA É RASGADA ANTES MESMO DA SUA VOZ ECOAR ENTRE AS PAREDES'))
            console.log(chalk.bgBlack.red('Um ser estranho ri da sua desgraça ;)'))
            console.log(' ')
            console.log(' ')
        }

        if (answers.p2 === 'se-esconder-no-armario-ao-lado') {
            console.log('Você se escondeu no armario enquanto tenta entender o que pode ter acontecido')
            console.log('Derrepente um ar frio entra pelos seus pulmoes')
            console.log('(Afinal de contas que lugar é esse ??)')
            console.log('(Simplesmente acordei aqui)')
            console.log('(Sinto algo estranho nas minhas costas, então decido olhar)')
            console.log('(Sinto que não deveria ter olhado)')
            console.log(chalk.bgBlack.red('UM CADÁVER'))
            console.log('Fim!')
            console.log('  ')
            console.log('  ')
        }
        if (answers.p2 === 'correr-atras-da-sombra(perigoso)') {
            console.log('Você corre atras do vulto')
            console.log('Em uma perseguição frenetica você quase o alcança')
            console.log('Mas algo prendeu no seu pé')
            console.log('Algo pegajoso, Nojento, viscoso, gelatinoso, grudento')
            console.log('Derrepente você se deu conta')
            console.log(chalk.bgBlack.red('Só há uma maneira de sair daqui com vida'))
            console.log(chalk.bgBlack.red('ENTÃO VOCÊ DECEPA O PRÓPRIO PÉ'))
            console.log(' ')
            console.log(' ')
            /*
            console.log(chalk.bgBlack.red('Só há uma maneira de sair daqui com vida'))
            console.log('Ao se deparar com uma estante a usa para se proteger de algo que virá em sua direção')
            console.log('Estava escuro mas pude ver parte dele em meio a escuridão')
            console.log('Que porra é essa quem é você??')
            console.log(chalk.bgBlack.red('Um ser estranho sorri pra você'))
            */
        }



    })
    .catch(error => {
        console.log(chalk.red('Xilindró ' + error))
    })
