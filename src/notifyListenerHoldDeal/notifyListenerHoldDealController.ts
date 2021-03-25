import { Controller, Get } from '@nestjs/common';
import { TokenDetailsEntity } from '../tokenDetails/tokenDetailsEntity';
import { Ctx, InjectableJobQueueStrategy, ProductService, RequestContext } from '@vendure/core'; 
import {getConnection} from "typeorm";



@Controller('notifyHoldDealUrl')
export class NotifyListenerHoldDealController {

  @Get(':id')
  async addTokenData(@Ctx() ctx: RequestContext){
      console.log(ctx);

      var json = {   
        token: "hello",
        monthExp: 23,
        yearExp: 3,
        approvalNumber: 5673113,
        identityNumber: 214791812,
        cardOwnerName: "Vibhuti Singh",
        cardOwnerEmail: "no@admin.com",
        cardOwnerPhone: "9821234",
        cardOwnerId: 421716,
        salt: "7821"
      }

      await getConnection()
      .createQueryBuilder()
      .insert()
      .into(TokenDetailsEntity)
      .values([
          json
      ])
      .execute();

      
      
      
      return String(ctx);
    }

  }





