def countLobang(kata):
    list_angka_lobang = [4,6,8,9,0]
    count = 0
    list_angka = [int(i) for i in kata ]
    for i in range(len(list_angka)):
        if(list_angka[i] in list_angka_lobang):
            count += 1
    print(count)
    
countLobang('12345')
countLobang('67890')