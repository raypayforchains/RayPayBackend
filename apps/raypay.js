const connection =  require('../db/db');

exports.webapps = async function (req, res) {
    console.log("load");
    const { where } = req.body;

    const query = `
    SELECT *
    FROM webapps ` + where;

    // const values = [`%${name}%`, parseInt(limit)];


    connection.query(query,  (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        } else {
            res.json(results);
        }
    });

}




exports.banner = async function (req, res) {

    const query = `
    SELECT * 
    FROM slider
  `;


    connection.query(query, (error, result) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        } else {

 const query2 = `
    SELECT * 
    FROM webapps
    ORDER BY order_id ASC
    LIMIT 8
  `;

    //const values = [`%${name}%`, parseInt(limit)];


    connection.query(query2,  (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        } else {
            res.json({"banner":result,"apps":results});
        }
    });
        }
    });

}
