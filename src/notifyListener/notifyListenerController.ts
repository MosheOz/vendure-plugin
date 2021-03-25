import { Controller, Get, Param } from '@nestjs/common';
import { TokenDetailsEntity } from '../tokenDetails/tokenDetailsEntity';
import { Ctx, InjectableJobQueueStrategy, ProductService, RequestContext } from '@vendure/core'; 
import { getConnection } from "typeorm";
import { TokenDetailsService } from '../tokenDetails/service/tokenDetailsService'
const querystring = require("querystring");
const axios = require("axios");


@Controller('notifyUrl')
export class NotifyListenerController {


  @Get(':low-profile-key')
  async addTokenData(@Ctx() ctx: RequestContext,@Param() params){

    
      try {
        const url = `https://secure.cardcom.solutions/Interface/BillGoldGetLowProfileIndicator.aspx?`;
        let config = [];
        config["terminalnumber"] = 1000;
        config["username"] = "barak9611";
        config["lowprofilecode"] = params.id;
        const str = querystring.encode(config);
        const response = await axios.get(url + str);
        var obj = querystring.decode(response.data);

        var json = {   
          token: obj.Token,
          monthExp: obj.CardValidityMonth,
          yearExp: obj.CardValidityYear,
          approvalNumber: obj.ExtShvaParams.ApprovalNumber71,
          identityNumber: obj.ExtShvaParams.CardHolderIdentityNumber,
          cardOwnerName: obj.CardOwnerName,
          cardOwnerEmail: obj.CardOwnerEmail,
          cardOwnerPhone: obj.CardOwnerPhone,
          cardOwnerId: obj.CardOwnerID,
          salt: "0000"
        }

        await getConnection()
        .createQueryBuilder()
        .insert()
        .into(TokenDetailsEntity)
        .values([
            json
        ])
        .execute();

        console.log(obj) 

        return obj;

      } catch (err) {
        console.error(err);
        return err;
      }

      

  
    }

  }





