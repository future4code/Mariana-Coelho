/*
1) 
    verifyExistence( {} ) === true
    verifyExistence( undefined ) === false
    verifyExistence( null ) === false

2)  Usar o comando ~JSON.parse(event.body) pra converter o body em um objeto JS.

3)  A lambda em questão retorna um statusCode 200 
    caso o parêmetro event possua corpo ou query string. 
    Exemplo de retorno: 
        {
            statusCode: 200,
            body: JSON.stringify({
                hasBody: false,
                hasQueries: true
            })
        }
        
4)  A lambda um statusCode 400 caso o parêmetro event não possua corpo nem query string.   
*/ 