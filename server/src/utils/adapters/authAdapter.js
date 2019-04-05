const StraTegyFactory= require('../StrategyFactory')



class AuthAdapter{


    

    verify(authStrategy,req){
        console.log('req in adabater')
        console.log(req.body)
        console.log(req.query)

        return authStrategy.verify(req);

    }
    

}

module.exports=AuthAdapter