var dataRef = new Firebase('https://rodoviaria-f52e9-default-rtdb.firebaseio.com/');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'Funcionários') {

            var _itemsKey = Object.entries(valor);
    
            
    
    
            for (const [key2, value2] of _itemsKey) {
            	count++;
    
                $("#tbFuncionarios tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +
    
                        <td>${value2.funcao}</td> +
    
                        <td>${value2.salario}</td> +
    
                    </tr>`
    
                );
    
            }
        }


    }

});
