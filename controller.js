const querySql = require('./mssqlConfig')();

exports.registro = function (req, res) {
    res.status(500);

    id = req.body.id_transporte;
    lista_registros = req.body.porta;

    lista_registros.forEach(element => {
        var query = `
                    EXEC CadastraRegistro
                    @ID_TRANSPORTE = ${id},
                    @ID_PORTA = ${element.id},
                    @ENTRADAS = '${element.entrada}',
                    @SAIDAS = '${element.saida}'
                    `;

        querySql.queryDB(query, (err, result) => {
            if (err) {
                console.dir(err);
                res.end();
                return;
            }
        });
    });

    res.status(201);
    res.end()
}

exports.transportes = function (req, res) {
    res.status(500);

    var query = `SELECT * FROM MB_TRANSPORTES`;

    querySql.queryDB(query, (err, result) => {
        if (err) {
            console.dir(err);
            res.end();
            return;
        }

        res.status(201);
        res.json({
            query: query,
            result: result
        })
    });
}

exports.registros = function (req, res) {
    res.status(500);

    var query = `SELECT * FROM MB_REGISTROS`;

    querySql.queryDB(query, (err, result) => {
        if (err) {
            console.dir(err);
            res.end();
            return;
        }

        res.status(201);
        res.json({
            query: query,
            result: result
        })
    });
}