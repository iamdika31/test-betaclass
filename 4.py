def format_nohp(nohp):
    b =  data_huruf = [c for c in nohp]
    str_ = '+62'
    str1 = ''
    if(b[0] == '0'):
        del b[0]
    str1  = str1.join(b)
    x = ' '.join([str1[i:i+4] for i in range(0, len(str1), 4)])
    print(str_ + ' '+x)

format_nohp('0812345678900')