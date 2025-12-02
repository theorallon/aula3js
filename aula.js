    // usar pilha para adicionar atras e usar fila para adicionar na frente

    // pilha
    const lista = ["A", "B", "C"]
    lista.push("D")
    console.log("\n",lista)
    itemremovido = lista.pop()
    console.log("Item removido: ", itemremovido)
    console.log(lista,"\n")

    // fila
    const lista2 = ["B", "C", "D"]
    lista2.unshift("A")
    console.log(lista2)
    itemremovido = lista2.shift()
    console.log("Item removido: ", itemremovido)
    console.log(lista2)
