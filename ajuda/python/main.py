#Pedra-papel-tesoura
from random import randint

jogador = ''
while jogador != 'sair':
    print('=+'*20)
    print('Pedra-papel-tesoura')
    print('=+'*20)
    jogador = input().lower()

#atribuindo valor ao robo
    robo = randint(1,3)

    if robo == 1:
        robo = 'pedra'
    elif robo == 2:
        robo = 'tesoura'
    else:
        robo = 'papel'
    print(robo)
#avaliando resultado

    if jogador == robo:
        print(f'Empate: {jogador} x {robo}')

    elif jogador == 'pedra':
        if robo == 'tesoura':
            print(f'Jogador ganhou: {jogador} x {robo}')
        else:
            print(f'Robo ganhou: {jogador} x {robo}')

    elif jogador == 'papel':
        if robo == 'pedra':
            print(f'Jogador ganhou: {jogador} x {robo}')
        else:
            print(f'Robo ganhou: {jogador} x {robo}')

    elif jogador == 'tesoura':
        if robo == 'papel':
            print(f'Jogador ganhou: {jogador} x {robo}')
        else:
            print(f'Robo ganhou: {jogador} x {robo}')