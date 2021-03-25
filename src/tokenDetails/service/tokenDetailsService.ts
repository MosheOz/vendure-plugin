import { Injectable, Inject } from '@nestjs/common';
import { ListQueryBuilder, TransactionalConnection } from '@vendure/core';
import { ListQueryOptions } from '@vendure/core/dist/common/types/common-types';
import { TokenDetailsEntity } from '../tokenDetailsEntity';
import { PLUGIN_INIT_OPTIONS } from '../constants/constants';
import { PluginInitOptions } from '../constants/types';





@Injectable()
export class TokenDetailsService {
    constructor(private connection: TransactionalConnection,
        @Inject(PLUGIN_INIT_OPTIONS) private options: PluginInitOptions,
        private listQueryBuilder: ListQueryBuilder) {}


        async getAllTokenDetails(ctx,options?: ListQueryOptions<TokenDetailsEntity>) {
            return this.listQueryBuilder
            .build(TokenDetailsEntity, options)
            .getManyAndCount()
            .then(([tokenDetails, totalItems]) => {
                return {
                    items: tokenDetails,
                    totalItems
                 };
             });
        }




        async getTokenDetailsByToken(ctx,data){
            return this.connection.getRepository(ctx,TokenDetailsEntity).findOne({token: data });
        }


        async addSingleTokenDetails(ctx,data){
            const createdVariant = await this.connection.getRepository(ctx,TokenDetailsEntity).create(data);
            const savedVariant = await this.connection.getRepository(ctx,TokenDetailsEntity).save(createdVariant);
            return savedVariant;
        }
         
        async updateSingleTokenDetails(ctx,data){
            const createdVariant = await this.connection.getRepository(ctx,TokenDetailsEntity).update(data.token || data.id,{
                token: data.token,
                monthExp: data.monthExp,
                yearExp: data.yearExp,
                approvalNumber: data.approvalNumber,
                identityNumber: data.identityNumber,
                cardOwnerId: data.cardOwnerId,
                cardOwnerName: data.cardOwnerName,
                cardOwnerPhone: data.cardOwnerPhone,
                cardOwnerEmail: data.cardOwnerEmail,
                salt: data.salt
            });
            return this.connection.getRepository(ctx,TokenDetailsEntity).findOne({token: data.token });
        }
         
        async deleteSingleTokenDetails(ctx,token){
            const Variants = await this.connection.getRepository(ctx,TokenDetailsEntity).findOne({token: token });
            this.connection.getRepository(ctx,TokenDetailsEntity).delete(token);
            return Variants;
        }
         
        deleteAllTokenDetails(ctx){
            this.connection.getRepository(ctx,TokenDetailsEntity).clear();
            return true;
        }
     
    
}
