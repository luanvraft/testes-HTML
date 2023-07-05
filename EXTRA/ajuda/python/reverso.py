def reverso(x):
    aux = list(reversed(x))
    # for i in range(len(x), 0, -1):
    #     aux.append(x[i-1])
    return aux

l = [3, 1, 2, 0, 76, 8]
print(reverso(l))
