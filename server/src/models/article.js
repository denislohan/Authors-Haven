const DbConnection = require('../dbConnection'),
    Sequelize = require('sequelize');
var articleSchema = require('./models/arti_cle')

class Article{

    constructor(){
        var sequelize = DbConnection.getConnection();
         this.articleSchema = articleSchema(sequelize,Sequelize);
    // }
    
        // this.articleSchema = sequelize.define('article', {
        //     body: {
        //       type: Sequelize.STRING,
        //       allowNull: {
        //           args:false,
        //           msg: "the article body can not be null"
        //       }
        //     },
        //     userId: {
        //       type: Sequelize.STRING,
        //       allowNull: {
        //         args: false,
        //         msg:"user Id should never be null"
        //       }
        //     },
        //     title: {
        //         type: Sequelize.STRING,
        //         allowNull:{ 
        //             args: true,
        //             msg:"Title Id should never be null"
        //         },

        //         len: {
        //             args: [5,40],
        //             msg:"the lengnth should be 2 - 50 charactors"
        //         }
        //       }
        //     //  tags: {
        //     //     type: Sequelize.ARRAY
        //     //   }
        //   }, {
        //     freezeTableName: true // Model tableName will be the same as the model name
        //   });    
    }
    
      getArticleSchema(){
        return this.articleSchema;
      }

async create(data){
    let articleSchema = this.articleSchema;

    return await articleSchema.sync({force: false})
    .then(async function () {
        console.log(articleSchema)
         return articleSchema.create({
            title: data.title,
            userId: data.userId,
            body: data.body
        })
        

})
    .catch((err)=>{
        console.log('model errr')
        console.log(err.message)
        err.status = '500'

        return err
    })
       
  }
}

module.exports = Article;
   
