
var connection = require('../models/name')
var bcrypt = require('bcrypt')

module.exports = {
    getall3: function(req,res){
        var user_id = req.params.user_id;
        
        if(9 != user_id)
        {
            return res.json({message:"ERROR: User not logged in. Access denied."})
        }else{
            var sql = "";
            var sql_select = "SELECT n.id,n.word,n.gender,n.description,n.variations, AVG(nr.star) AS rating FROM name3 AS n JOIN name2rating AS nr ON n.id = nr.name_id ";
            var sql_limit = " LIMIT ";
            var sql_offset= " OFFSET ";
            var sql_gender = "gender = ";
            var sql_status = "status = ";
            var sql_word = " WHERE n.word LIKE '%";
            var sql_id = " WHERE n.id = ";
            var sql_cat = " JOIN name2cat ON n.id = name2cat.name_id JOIN category AS c ON c.id = name2cat.cat_id WHERE c.cat IN (";
            var sql_sortby = " ORDER BY "
            var sql_end = " GROUP BY n.id"
            
            //SET UP ARRAY FOR FILTERS
            var filters = [];
            
            for(let filter in req.query){
                filters.push(filter);
            }
            // BASIC SELECT
            sql += sql_select;
    
            //IF NO FILTERS
            if(filters.length==0){  
    
                connection.query(sql + sql_end,function(err,results){
                    if(err){
                        res.json({message:"ERROR",error:err})
                    }else{
                        console.log("NO FILTERS!!!!");
                        console.log(sql);
                        res.json({results:results, message:"SUCCESS!"})
                    }
                })
            }else{// CHECK FOR ID OR WORD
    
                if(filters.includes('id'))
                {
                    sql += sql_id + req.query['id'];
                }
                else if(filters.includes('word'))
                {
                    sql += sql_word + `${req.query['word']}`+"%'" + sql_end;
                }
                else
                {
                    //CHECK FOR CATEGORY AND (WHERE / AND)
                    if(filters.includes('cat') && (filters.includes('gender') || filters.includes('status'))){
                        //checking for multi category
                        for(let i=0;i<req.query['cat'].length;i++){
                            if(i != req.query['cat'].length -1){
                                sql_cat += req.query['cat'][i] + ',';
                            }else{
                                sql_cat += req.query['cat'][i];
                            }
                        }
                        sql_cat += ')';
                        //adding rest of filters
                        sql+= sql_cat + " AND ";
                        console.log("inside filters cat____ either or");
                        if(filters.includes('gender') && filters.includes('status')){
                            sql+= sql_gender +`'${req.query['gender']}'`  + " AND " + sql_status + `'${req.query['status']}'`;
                        }else if(filters.includes('gender')){
                            sql+=  sql_gender +`'${req.query['gender']}'`;
                        }else if(filters.includes('status')){
                            sql+=  sql_status +`'${req.query['status']}'`;
                        }
                    }
                    // CHECK IF CATEGORY IS ALONE
                    else if(filters.includes('cat') && !(filters.includes('gender') && filters.includes('status'))) {
 
                        for(let i=0;i<req.query['cat'].length;i++){
                            if(i != req.query['cat'].length -1){
                                sql_cat += req.query['cat'][i] + ',';
                            }else{
                                sql_cat += req.query['cat'][i];
                            }
                        }
                        sql_cat += ')';
                        sql+= sql_cat;
                        
                    }else{   // IF NO CATEGORY                        
                        if(filters.includes('gender') && filters.includes('status')){
                            sql+= " WHERE " + sql_gender +`'${req.query['gender']}'`  + " AND " + sql_status +`'${req.query['status']}'`;
                        }else if(filters.includes('gender')){
                            sql+= " WHERE " + sql_gender +`'${req.query['gender']}'`;
                        }else if(filters.includes('status')){
                            sql+= " WHERE " + sql_status + `'${req.query['status']}'`;
                        }
                    }
                    //adding GROUP BY
                    sql += sql_end;
                    
                    //CHECK FOR SORTING
                    if(filters.includes('sort_by')){
                        let index = req.query['sort_by'].indexOf('.');
                        let order = req.query['sort_by'].slice(0,index);
    
                        let filter = req.query['sort_by'].slice(index +1,req.query['sort_by'].length)
                        
                        if(order == "asc" || order == "desc"){
                            sql += sql_sortby + filter + " "+ order;
                        }
                    }
                    // CHECK FOR LIMIT / OFFSET
                    if(filters.includes('limit')){
                        sql+= sql_limit +req.query['limit'];
                        if(filters.includes('offset')){
                            sql+= sql_offset + req.query['offset'];
                        }
                    }
                }
                console.log("final sql is ", sql);
    
                //run query
                connection.query(sql,function(err,results){
                    if(err){
                        res.json({message:"ERROR",error:err})
                    }else{
                        res.json({results:results, message:"SUCCESS!"})
                    }
                })
            } 
        }
    },
    getall4: function(req,res){
        // var user_id = req.params.user_id;
        var sql = "";
        var sql_select = "SELECT n.id,n.word,n.gender,n.description,n.variations, AVG(nr.star) AS rating FROM name3 AS n JOIN name2rating AS nr ON n.id = nr.name_id ";
        var sql_limit = " LIMIT ";
        var sql_offset= " OFFSET ";
        var sql_gender = "gender = ";
        var sql_status = "status = ";
        var sql_word = " WHERE (n.word LIKE '%";
        var sql_id = " WHERE n.id = ";
        var sql_cat = " JOIN name2cat ON n.id = name2cat.name_id JOIN category AS c ON c.id = name2cat.cat_id WHERE c.cat IN (";            var sql_sortby = " ORDER BY "
        var sql_end = " GROUP BY n.id"
        
        //SET UP ARRAY FOR FILTERS
        var filters = [];
        
        for(let filter in req.query){
            filters.push(filter);
        }
        // BASIC SELECT
        sql += sql_select;

        //IF NO FILTERS
        if(filters.length==0){  

            connection.query(sql + sql_end,function(err,results){
                if(err){
                    res.json({message:"ERROR",error:err})
                }else{
                    console.log("NO FILTERS!!!!");
                    console.log(sql);
                    res.json({results:results, message:"SUCCESS!"})
                }
            })
        }else{// CHECK FOR ID OR WORD

            if(filters.includes('id'))
            {
                sql += sql_id + req.query['id']+sql_end;
            }
            else if(filters.includes('word')) 
            {
                sql += sql_word + `${req.query['word']}%') OR (n.variations LIKE '%${req.query['word']}%') `  + sql_end;
            }
            else
            {
                //CHECK FOR CATEGORY AND (WHERE / AND)
                if(filters.includes('cat') && (filters.includes('gender') || filters.includes('status'))){
                    //checking for multi category
                    console.log("querrrrry type is ", typeof req.query['cat'])
                    if(typeof req.query['cat'] == "string")
                    {
                        sql_cat += `'${req.query['cat']}'`
                    }else{
                        for(let i=0;i<req.query['cat'].length;i++){
                            if(i != req.query['cat'].length -1){
                                sql_cat += `'${req.query['cat'][i]}'` + ',';
                            }else{
                                sql_cat += `'${req.query['cat'][i]}'`;
                            }
                        }
                    }
                    sql_cat += ')';
                    //adding rest of filters
                    sql+= sql_cat + " AND ";
                    if(filters.includes('gender') && filters.includes('status')){
                        sql+= sql_gender +`'${req.query['gender']}'`  + " AND " + sql_status + `'${req.query['status']}'`;
                    }else if(filters.includes('gender')){
                        sql+=  sql_gender +`'${req.query['gender']}'`;
                    }else if(filters.includes('status')){
                        sql+=  sql_status +`'${req.query['status']}'`;
                    }
                }
                // CHECK IF CATEGORY IS ALONE
                else if(filters.includes('cat') && !(filters.includes('gender') && filters.includes('status'))) {

                    console.log("querrrrry is ", typeof req.query['cat'])
                    if(typeof req.query['cat'] == "string")
                    {
                        sql_cat += `'${req.query['cat']}'`
                    }else{
                        for(let i=0;i<req.query['cat'].length;i++){
                            if(i != req.query['cat'].length -1){
                                sql_cat += `'${req.query['cat'][i]}'` + ',';
                            }else{
                                sql_cat += `'${req.query['cat'][i]}'`;
                            }
                        }
                    }
                    sql_cat += ')';
                    sql+= sql_cat;
                    
                    
                }else{   // IF NO CATEGORY
                    console.log("inside filters cat____ no cat");
                    
                    if(filters.includes('gender') && filters.includes('status')){
                        sql+= " WHERE " + sql_gender +`'${req.query['gender']}'`  + " AND " + sql_status +`'${req.query['status']}'`;
                    }else if(filters.includes('gender')){
                        sql+= " WHERE " + sql_gender +`'${req.query['gender']}'`;
                    }else if(filters.includes('status')){
                        sql+= " WHERE " + sql_status + `'${req.query['status']}'`;
                    }
                }
                //adding GROUP BY
                sql += sql_end;
                
                //CHECK FOR SORTING
                if(filters.includes('sort_by')){
                    let index = req.query['sort_by'].indexOf('.');
                    let order = req.query['sort_by'].slice(0,index);

                    let filter = req.query['sort_by'].slice(index +1,req.query['sort_by'].length)
                    
                    if(order == "asc" || order == "desc"){
                        sql += sql_sortby + filter + " "+ order;
                    }
                }
                // CHECK FOR LIMIT / OFFSET
                if(filters.includes('limit')){
                    sql+= sql_limit +req.query['limit'];
                    if(filters.includes('offset')){
                        sql+= sql_offset + req.query['offset'];
                    }
                }
            }
            console.log("final sql is ", sql);

            //run query
            connection.query(sql,function(err,results){
                if(err){
                    res.json({message:"ERROR",error:err})
                }else{
                    res.json({results:results, message:"SUCCESS!"})
                }
            })
        } 
        
    },
    getall5: function(req,res){
        // var user_id = req.params.user_id;
        var sql = "";
        var sql_select = "SELECT n.id,n.eng_word,n.syr_word,arb_word,n.gender,n.eng_desc,n.variations,n.meaning, n.status, n.src, AVG(nr.star) AS rating FROM name4 AS n JOIN name2rating AS nr ON n.id = nr.name_id ";
        var sql_limit = " LIMIT ";
        var sql_offset= " OFFSET ";
        var sql_gender = "n.gender = ";
        var sql_status = "n.status = ";
        var sql_word = " WHERE (n.eng_word LIKE '%";
        var sql_id = " WHERE n.id = ";
        var sql_cat = " JOIN name2cat ON n.id = name2cat.name_id JOIN category AS c ON c.id = name2cat.cat_id WHERE c.cat IN (";            
        var sql_sortby = " ORDER BY "
        var sql_end = " GROUP BY n.id"
        
        //SET UP ARRAY FOR FILTERS
        var filters = [];
        
        for(let filter in req.query){
            filters.push(filter);
        }
        // BASIC SELECT
        sql += sql_select;

        //IF NO FILTERS
        if(filters.length==0){  

            connection.query(sql + sql_end,function(err,results){
                if(err){
                    res.json({message:"ERROR",error:err})
                }else{  
                    console.log("NO FILTERS!!!!");
                    console.log(sql);
                    res.json({results:results, message:"SUCCESS!"})
                }
            })
        }else{// CHECK FOR ID OR WORD

            if(filters.includes('id'))
            {
                sql += sql_id + req.query['id']+sql_end; 
            }
            else if(filters.includes('word')&&(filters.includes('limit')||filters.includes('status')) )
            {
                if(filters.includes('limit')&&filters.includes('offset')&&filters.includes('status')){
                    
                    sql += sql_word + `${req.query['word']}%') OR (n.meaning LIKE '%${req.query['word']}%') AND ${sql_status} '${req.query['status']}'`  + sql_end+` LIMIT ${req.query['limit']} OFFSET ${req.query['offset']}`;

                }else if (filters.includes('limit')&&filters.includes('offset')){
                    sql += sql_word + `${req.query['word']}%') OR (n.meaning LIKE '%${req.query['word']}%') `  + sql_end+` LIMIT ${req.query['limit']} OFFSET ${req.query['offset']}`;
                }
                else if(filters.includes('limit')){
                    sql += sql_word + `${req.query['word']}%') OR (n.meaning LIKE '%${req.query['word']}%') `  + sql_end+` LIMIT ${req.query['limit']}`;
                    
                }else{
                    sql+= sql_word +`${req.query['word']}%') OR (n.meaning LIKE '%${req.query['word']}%') AND ${sql_status} '${req.query['status']}'`  + sql_end;
                }
                // // ADDING SORT BY
                // if(filters.includes('sort_by')){
                //     let index = req.query['sort_by'].indexOf('.');
                //     let order = req.query['sort_by'].slice(0,index);

                //     let filter = req.query['sort_by'].slice(index +1,req.query['sort_by'].length)
                    
                //     if(order == "asc" || order == "desc"){
                //         sql += sql_sortby + filter + " "+ order;
                //     }
                // }

            }else if(filters.includes('word')){
                sql += sql_word + `${req.query['word']}%') OR (n.meaning LIKE '%${req.query['word']}%') `  + sql_end;
            }
            else
            {
                //CHECK FOR CATEGORY AND (WHERE / AND)
                if(filters.includes('cat') && (filters.includes('gender') || filters.includes('status'))){
                    //checking for multi category
                    if(typeof req.query['cat'] == "string")
                    {
                        sql_cat += `'${req.query['cat']}'`
                    }else{
                        for(let i=0;i<req.query['cat'].length;i++){
                            if(i != req.query['cat'].length -1){
                                sql_cat += `'${req.query['cat'][i]}'` + ',';
                            }else{
                                sql_cat += `'${req.query['cat'][i]}'`;
                            }
                        }
                    }
                    sql_cat += ')';
                    //adding rest of filters
                    sql+= sql_cat + " AND ";
                    if(filters.includes('gender') && filters.includes('status')){
                        sql+= sql_gender +`'${req.query['gender']}'`  + " AND " + sql_status + `'${req.query['status']}'`;
                    }else if(filters.includes('gender')){
                        sql+=  sql_gender +`'${req.query['gender']}'`;
                    }else if(filters.includes('status')){
                        sql+=  sql_status +`'${req.query['status']}'`;
                    }
                }
                // CHECK IF CATEGORY IS ALONE
                else if(filters.includes('cat') && !(filters.includes('gender') && filters.includes('status'))) {

                    if(typeof req.query['cat'] == "string")
                    {
                        sql_cat += `'${req.query['cat']}'`
                    }else{
                        for(let i=0;i<req.query['cat'].length;i++){
                            if(i != req.query['cat'].length -1){
                                sql_cat += `'${req.query['cat'][i]}'` + ',';
                            }else{
                                sql_cat += `'${req.query['cat'][i]}'`;
                            }
                        }
                    }
                    sql_cat += ')';
                    sql+= sql_cat;
                    
                    
                    
                }else{   // IF NO CATEGORY                    
                    if(filters.includes('gender') && filters.includes('status')){
                        sql+= " WHERE " + sql_gender +`'${req.query['gender']}'`  + " AND " + sql_status +`'${req.query['status']}'`;
                    }else if(filters.includes('gender')){
                        sql+= " WHERE " + sql_gender +`'${req.query['gender']}'`;
                    }else if(filters.includes('status')){
                        sql+= " WHERE " + sql_status + `'${req.query['status']}'`;
                    }
                }
                //adding GROUP BY
                sql += sql_end;
                
                //CHECK FOR SORTING
                if(filters.includes('sort_by')){
                    let index = req.query['sort_by'].indexOf('.');
                    let order = req.query['sort_by'].slice(0,index);

                    let filter = req.query['sort_by'].slice(index +1,req.query['sort_by'].length)
                    
                    if(order == "asc" || order == "desc"){
                        sql += sql_sortby + filter + " "+ order;
                    }
                }
                // CHECK FOR LIMIT / OFFSET
                if(filters.includes('limit')){
                    sql+= sql_limit +req.query['limit'];
                    if(filters.includes('offset')){
                        sql+= sql_offset + req.query['offset'];
                    }
                }
            }
            console.log("final sql is ", sql);

            //run query
            connection.query(sql,function(err,results){
                if(err){
                    res.json({message:"ERROR",error:err})
                }else{
                    res.json({results:results, message:"SUCCESS!"})
                }
            })
        } 
        
    },
    getSearch: function(req,res){
        var sql = "";
        var sql_select = "SELECT n.id,n.eng_word,n.syr_word,arb_word,n.gender,n.eng_desc,n.variations,n.meaning, n.status, n.src, AVG(nr.star) AS rating FROM name4 AS n JOIN name2rating AS nr ON n.id = nr.name_id ";
        var sql_limit = " LIMIT ";
        var sql_offset= " OFFSET ";
        var sql_status = "status = ";
        var sql_word = " WHERE (n.eng_word LIKE '%";
        var sql_id = " WHERE n.id = ";
        var sql_sortby = " ORDER BY "
        var sql_end = " GROUP BY n.id"

        //SET UP ARRAY FOR FILTERS
        var filters = [];
        
        for(let filter in req.query){
            filters.push(filter);
        }

        sql += sql_select;

        if(filters.length==0){  

            connection.query(sql + sql_end,function(err,results){
                if(err){
                    res.json({message:"ERROR",error:err})
                }else{
                    console.log(sql);
                    res.json({results:results, message:"SUCCESS!"})
                }
            })
        }else{// CHECK FOR ID OR WORD
            if(filters.includes('id'))
            {
                sql += sql_id + req.query['id']+sql_end; 
            }
            else if(filters.includes('word')&& (filters.includes('status')||(filters.includes('limit')||filters.includes('offset')))) 
            {
                sql += sql_word + `${req.query['word']}%') OR (n.meaning LIKE '%${req.query['word']}%') `  + sql_end;
            }


        }
        connection.query(``, function(err,results){

        })
    },
    getall2: function(req,res){
        var user_id = req.params.user_id;
        
        if(req.session.user_id != user_id)
        {
            return res.json({message:"ERROR: User not logged in. Access denied."})
        }else{
            var sql = "";
            var sql_select = "SELECT n.id,n.word,n.gender,n.description,n.variations, AVG(nr.star) AS rating FROM name3 AS n JOIN name2rating AS nr ON n.id = nr.name_id ";
            var sql_limit = " LIMIT ";
            var sql_offset= " OFFSET ";
            var sql_gender = "gender = ";
            var sql_status = "status = ";
            var sql_word = " WHERE n.word = ";
            var sql_id = " WHERE n.id = ";
            var sql_cat = " JOIN name2cat ON n.id = name2cat.name_id WHERE name2cat.cat_id IN (";
            var sql_sortby = " ORDER BY "
            var sql_end = " GROUP BY n.id"
            
            //SET UP ARRAY FOR FILTERS
            var filters = [];
            
            for(let filter in req.query){
                filters.push(filter);
            }
            // BASIC SELECT
            sql += sql_select;
    
            //IF NO FILTERS
            if(filters.length==0){  
    
                connection.query(sql + sql_end,function(err,results){
                    if(err){
                        res.json({message:"ERROR",error:err})
                    }else{
                        console.log("NO FILTERS!!!!");
                        console.log(sql);
                        res.json({results:results, message:"SUCCESS!"})
                    }
                })
            }else{// CHECK FOR ID OR WORD
    
                if(filters.includes('id'))
                {
                    sql += sql_id + req.query['id'];
                }
                else if(filters.includes('word'))
                {
                    sql += sql_word + `'${req.query['word']}'`;
                }
                else
                {
                    //CHECK FOR CATEGORY AND (WHERE / AND)
                    if(filters.includes('cat') && (filters.includes('gender') || filters.includes('status'))){
                        //checking for multi category
                        for(let i=0;i<req.query['cat'].length;i++){
                            if(i != req.query['cat'].length -1){
                                sql_cat += req.query['cat'][i] + ',';
                            }else{
                                sql_cat += req.query['cat'][i];
                            }
                        }
                        sql_cat += ')';
                        //adding rest of filters
                        sql+= sql_cat + " AND ";
                        console.log("inside filters cat____ either or");
                        if(filters.includes('gender') && filters.includes('status')){
                            sql+= sql_gender +`'${req.query['gender']}'`  + " AND " + sql_status + `'${req.query['status']}'`;
                        }else if(filters.includes('gender')){
                            sql+=  sql_gender +`'${req.query['gender']}'`;
                        }else if(filters.includes('status')){
                            sql+=  sql_status +`'${req.query['status']}'`;
                        }
                    }
                    // CHECK IF CATEGORY IS ALONE
                    else if(filters.includes('cat') && !(filters.includes('gender') && filters.includes('status'))) {
 
                        for(let i=0;i<req.query['cat'].length;i++){
                            if(i != req.query['cat'].length -1){
                                sql_cat += req.query['cat'][i] + ',';
                            }else{
                                sql_cat += req.query['cat'][i];
                            }
                        }
                        sql_cat += ')';
                        sql+= sql_cat;
                        
                        
                    }else{   // IF NO CATEGORY
                        console.log("inside filters cat____ no cat");
                        
                        if(filters.includes('gender') && filters.includes('status')){
                            sql+= " WHERE " + sql_gender +`'${req.query['gender']}'`  + " AND " + sql_status +`'${req.query['status']}'`;
                        }else if(filters.includes('gender')){
                            sql+= " WHERE " + sql_gender +`'${req.query['gender']}'`;
                        }else if(filters.includes('status')){
                            sql+= " WHERE " + sql_status + `'${req.query['status']}'`;
                        }
                    }
                    //adding GROUP BY
                    sql += sql_end;
                    
                    //CHECK FOR SORTING
                    if(filters.includes('sort_by')){
                        let index = req.query['sort_by'].indexOf('.');
                        let order = req.query['sort_by'].slice(0,index);
    
                        let filter = req.query['sort_by'].slice(index +1,req.query['sort_by'].length)
                        
                        if(order == "asc" || order == "desc"){
                            sql += sql_sortby + filter + " "+ order;
                        }
                    }
                    // CHECK FOR LIMIT / OFFSET
                    if(filters.includes('limit')){
                        sql+= sql_limit +req.query['limit'];
                        if(filters.includes('offset')){
                            sql+= sql_offset + req.query['offset'];
                        }
                    }
                }
                
                console.log("final sql is ", sql);
    
                //run query
                connection.query(sql,function(err,results){
                    if(err){
                        res.json({message:"ERROR",error:err})
                    }else{
                        res.json({results:results, message:"SUCCESS!"})
                    }
                })
            } 
        }
    },
    getall: function(req,res){  // OLD VERSION
        if(req.query.word)
        {
            var word=req.query.word;
            connection.query(`SELECT * FROM name3 WHERE word=?`,[word],function(err,result){
                if(err)throw err
                res.json({rows: result[0], message:"Success. Returning 1 matching row!"});
            })
        }else if(req.query.id) {
            var id = req.query.id;
            connection.query(`SELECT * FROM name3 WHERE id=?`,[id],function(err,result){
                if(err)throw err
                res.json({rows: result[0], message:"Success. Returning 1 matching row!"});
            })
        }
        else if(req.query.gender && req.query.cat){
            var cat_id = req.query.cat;
            var gender=req.query.gender;

            connection.query(`SELECT n.id,word,gender,description,variations
            FROM name3 AS n 
            JOIN name2cat AS nc ON n.id = nc.name_id WHERE nc.cat_id=${cat_id} AND n.gender=?`,[gender],function(err,results){
                if(err)throw err
                res.json({rows: results, message:`Success. Returning all matching rows from ${cat_id} Category and ${gender} Gender!`});
            })
        }else if(req.query.gender)
        {
            var gender=req.query.gender;

            if(req.query.limit){
                // limit number of entries
                let limit = req.query.limit;
                
                connection.query(`SELECT * FROM name3 WHERE gender=? LIMIT ${limit}`,[gender],function(err,results){ 
                    if(err)throw err
                    res.json({rows: results, message:`Success. Returning ${limit} matching row from ${gender} Gender!`});
                })
            }else{
                connection.query(`SELECT * FROM name3 WHERE gender=? `,[gender],function(err,results){ 
                    if(err)throw err
                    res.json({rows: results, message:`Success. Returning matching row from ${gender} Gender!`});
                })
            }
            
        }else if (req.query.cat){
            var cat_id = req.query.cat;
            connection.query(`SELECT name3.id,name3.word,name3.gender,name3.description,name3.variations FROM name3 JOIN name2cat ON name3.id = name2cat.name_id WHERE name2cat.cat_id = ${cat_id}`,function(err,results){
                if(err)throw err
                res.json({rows:results, message:`Success. Returning all matching rows from ${cat_id} Category!`})
            })
        }else if (req.query.status){
            var status=req.query.status;
            connection.query(`SELECT * FROM name3 WHERE status=?`,[status],function(err,results){ 
                if(err)throw err
                res.json({rows: results, message:`Success. Returning all matching row from ${status} Status!`});
            })
        }else{
            connection.query('SELECT * FROM name3', function(err, results) {
                if (err) {
                    throw err
                }else{
                    res.json({rows: results,message:"Success. Returning all names!"})
                }
            })
        }
    },
    update: function(req,res){
        let word_id = req.params.word_id;
        connection.query(`UPDATE name3 SET word='${req.body.word}', gender='${req.body.gender}', description='${req.body.description}', status='${req.body.status}', variations='${req.body.variations}, source='${req.body.resource}' WHERE id='${word_id}'`,function(err,result){
            if(err){
                res.json({message:"ERROR",error:err})
            }else{
                res.json({message:"Successfully updated "+word_id, results: result})
            }
        })
    },
    update2: function(req,res){
        let word_id = req.params.word_id;
        // let admin_id = req.params.admin_id;

        // for(let col in req.body){
        //     console.log(req.body['col'],col);
        // }
        console.log(req.body);  
        let sql = `UPDATE name4 SET eng_word='${req.body.eng_word}',syr_word='${req.body.syr_word}',arb_word='${req.body.arb_word}', gender='${req.body.gender}', eng_desc='${req.body.eng_desc}', arb_desc='${req.body.arb_desc}', status='${req.body.status}', variations='${req.body.variations}',meaning='${req.body.meaning}', src='${req.body.src}' WHERE id='${word_id}'`;
        
        console.log("sql of update is ", sql);

        connection.query(sql,function(err,result){
            if(err){
                res.json({message:"ERROR",error:err})
            }else{
                res.json({message:"Successfully updated "+word_id, results: result})
            }
        })
    },
    update3: function(req,res){ 
        let word_id = req.params.word_id;
              
        let sql = `UPDATE name4 SET eng_word='${req.body.name.eng_word}',syr_word='${req.body.name.syr_word}',arb_word='${req.body.name.arb_word}', gender='${req.body.name.gender}', eng_desc='${req.body.name.eng_desc}', arb_desc='${req.body.name.arb_desc}', status='${req.body.name.status}', variations='${req.body.name.variations}',meaning='${req.body.name.meaning}', src='${req.body.name.src}' WHERE id='${word_id}'`;
        
        console.log("sql of update is ", sql);

        let sql_add_cats = "INSERT INTO name2cat(name_id,cat_id) VALUES";
        let sql_remove_cats = "DELETE FROM name2cat WHERE (name_id,cat_id) IN (";

        // building add sql for cat
        for(let i=0;i<req.body.cat_add_arr.length;i++){
            if(i != req.body.cat_add_arr.length-1){
                sql_add_cats +=`(${word_id},${req.body.cat_add_arr[i]}),`
            }else{
                sql_add_cats +=`(${word_id},${req.body.cat_add_arr[i]})`
            }
        }
        // building remove sql for cat
        for(let i=0;i<req.body.cat_remove_arr.length;i++){
            if(i != req.body.cat_remove_arr.length-1){
                sql_remove_cats +=`(${word_id},${req.body.cat_remove_arr[i]}),`
            }else{
                sql_remove_cats +=`(${word_id},${req.body.cat_remove_arr[i]})`
            }
        }

        sql_remove_cats += ")";

        console.log("sql multi add is ", sql_add_cats);
        console.log("sql multi remove is ", sql_remove_cats);

        if(req.body.cat_add_arr.length ==8){
            connection.query(sql_add_cats,function(err,results){
                if(err){
                    // return res.json({message:"Error add multi cat",error:err});
                    console.log("Error add multi cat", err)
                }else{
                    // return res.json({message:"Success add multi cat",results:results});
                    console.log("Sucess add multi cat", results)
                }
            })
        }else if(req.body.cat_remove_arr.length ==8){
            connection.query(sql_remove_cats,function(err,results){
                if(err){
                    // return res.json({message:"Error remove multi cat",error:err});
                    console.log("Error removing multi cat ", err);
                }else{
                    // return res.json({message:"Success remove multi cat",results:results});
                    console.log("Sucess removing multi cat ", results);
                }
            })
        }else{
            connection.query(sql_add_cats,function(err,results){
                if(err){
                    // return res.json({message:"Error add multi cat",error:err});
                    console.log("Error add multi cat ", err);
                }else{
                    console.log("Success add multi cat ", results);
                    // return res.json({message:"Success add multi cat",results:results});
                }
            })
            connection.query(sql_remove_cats,function(err,results){
                if(err){
                    // return res.json({message:"Error remove multi cat",error:err});
                    console.log("Error removing multi cat ", err);
                }else{
                    // return res.json({message:"Success remove multi cat",results:results});
                    console.log("Success removing multi cat ", results);
                }
            })
        }

        connection.query(sql,function(err,result){
            if(err){
                res.json({message:"ERROR",error:err})
            }else{
                res.json({message:"Successfully updated "+word_id, results: result})
            }
        })
        

    },
    addrating: function(req,res){
        let name_id = req.params.name_id;
        let star = req.params.star;
        
        if(parseInt(star) <1 || parseInt(star) >5 ){
            res.json({message:"Error: rating must be between 1 and 5"})
        }else{
            connection.query(`INSERT INTO name2rating (name_id, star) VALUES(?,?)`,[name_id,star],function(err,result){
                if(err){
                    res.json({message:"ERROR",error:err})
                }else{
                    res.json({message:"Sucess adding rating "+ star,results:result})
                }
            })
        }
        
    },
    // addname: function(req,res){
    //     let newname = req.params.newname;
    //     let gender = req.params.gender;
    //     let cat_id = req.params.cat_id; 
    //     connection.query("INSERT INTO name3 (word, gender) VALUES (?,?)",[newname,gender],function(err,result){
    //         if(err){
    //             return res.json({message:"ERROR adding word.",error:err})
    //         }else{
    //             // res.json({message:"success adding name",results:result});
    //             connection.query("INSERT INTO name2cat (name_id,cat_id) VALUES (?,2)",[result.insertId],function(err,resulto){
    //                 if(err){
    //                     return res.json({message:"ERROR updating adding category.",error:err})
    //                 }else{
    //                     connection.query("INSERT INTO name2cat (name_id,cat_id) VALUES (?,6)",[result.insertId],function(err,resulti){
    //                         if(err){
    //                             return res.json({message:"ERROR updating adding category.",error:err})
    //                         }else{
    //                             return  res.json({message:"Success adding relation with category table.",results:resulti})
    //                         }
    //                     });
    //                 }
    //             });

    //         }
    //     })
    // },
    addName:function(req,res){
        let sql_add_cats="INSERT INTO name2cat(name_id,cat_id) VALUES ";

        let sql = `INSERT INTO name4 (eng_word, syr_word,arb_word,eng_desc,arb_desc,src,meaning,status,variations,gender) VALUES ('${req.body.name.eng_word}','${req.body.name.syr_word}','${req.body.name.arb_word}','${req.body.name.eng_desc}','${req.body.name.arb_desc}','${req.body.name.src}','${req.body.name.meaning}','${req.body.name.status}','${req.body.name.variations}','${req.body.name.gender}')`;
        console.log("sql of adding name is ", sql)

        connection.query(sql,function(err,results){
            if(err){
                console.log("Error add name",err);
                return res.json({message:"Error adding name",err});
            }else{
                console.log("success adding name id", results.insertId);

                if(req.body.cat_add_arr.length > 0){
                    for(let i=0;i<req.body.cat_add_arr.length;i++){
                        if(i != req.body.cat_add_arr.length-1){
                            sql_add_cats +=`(${results.insertId},${req.body.cat_add_arr[i]}),`
                        }else{
                            sql_add_cats +=`(${results.insertId},${req.body.cat_add_arr[i]})`
                        }
                    }
                    connection.query(sql_add_cats,function(error,results2){
                        if(error){
                            console.log("Error add multi cat", error)
                            res.json({message:"error adding multi cats",error});
                        }else{
                            console.log("Sucess add multi cat", results2)
                            res.json({message:"Success adding multi cats",results2})
                        }
                    })
                }
                connection.query(`INSERT INTO name2rating (name_id,star) VALUES (${results.insertId},1)`,function(error,results3){
                    if(error){
                        console.log('Error adding rating', error);
                    }else{
                        console.log('Sucess adding rating',results3);
                    }
                })


            }
        })
    },
    reg:function(req,res){
        var nametry = req.body.username;
        var emailtry = req.body.email;
        var passwordtry = req.body.password;
        var confirmtry = req.body.confirmpassword;

        if (passwordtry != confirmtry){
            res.json({message:"ERROR: Passwords don't match"})
        }else{
            bcrypt.hash(passwordtry, 10).then(hashed_password =>{
                connection.query("INSERT INTO user (username, email, password) VALUES (?,?,?)",[nametry,emailtry,hashed_password],function(err,result){
                    if(err){
                        res.json({message:"ERROR adding new user",error:err})
                    }else{
                        res.json({message:`Success Registering user ${nametry}:`, results: result})
                    }
                })
            }).catch(error =>{
                res.json({message:"ERROR hasing password",error:error});
            })

        }

    },
    login:function(req,res){
        var emailtry = req.body.email;
        var passwordtry = req.body.password;

        console.log(emailtry,passwordtry)
        connection.query(`SELECT * FROM user WHERE email = '${emailtry}'`,function(err,user){
            if(err)
            {
                res.json({message:"Error retrieving user",error:err});
            }else
            {   
                if(user.length >0)
                {
                    bcrypt.compare(passwordtry,user[0].password).then(result=>
                        {
                            if(result){
                                req.session.user_id = user[0].id;
                                console.log("session is",req.session.user_id);
                                res.json({message:"Success retrieving user",results:result});
                            }else{
                                res.json({message:"Passwords don't match.",results:result})
                            }
                        }
                    ).catch(error=>
                        {
                            res.json({message:"Error comparing hash.",error:error});
                        }
                    )
                }else
                {
                    res.json({message:"No User Found"});
                }
            }
        })
    },
    logout:function(req,res){
        req.session.user_id = null;
        res.json({message:"Success logout"})
    },
    delete: function(req,res){
        let word_id = req.params.word_id;
        connection.query(`DELETE FROM name4 WHERE id =${word_id}`,function(err,result){
            if(!err){
                res.json({message:"Successful delete"});
            }else{
                res.json({message:"Error delete",error:err});
            }
        });
    },
    getCats:function(req,res){
        let word_id = req.params.word_id;

        let sql = `SELECT c.id FROM name4 AS n
        JOIN name2cat AS nc ON n.id = nc.name_id
        JOIN category AS c ON nc.cat_id = c.id WHERE n.id = ${word_id}
        GROUP BY c.cat`;

        console.log("sql getCat is ",sql)
        connection.query(sql,function(err,results){
            if(err){
                res.json({message:"Error getting categories",error:err});
            }else{
                res.json({message:"Success getting categories",results:results});
            }
        })
    },
    check: function(req,res){
        // let user_id = req.params.user_id;
        if(req.session.user_id){
            res.json({message:"User is logged in",results:true});
            console.log("Inside session");
        }else{
            res.json({message:"User not Logged in",results: false});
            console.log("Inside session");
        }
    }
    
}