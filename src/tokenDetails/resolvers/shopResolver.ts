import { Args, Parent, Query, Resolver, Mutation } from '@nestjs/graphql';
import { TokenDetailsService } from '../service/tokenDetailsService';
import { RequestContext, Ctx, Transaction } from '@vendure/core';

@Resolver()
export class TokenDetailsShopResolver {
    constructor(private tokenDetailsService: TokenDetailsService) {
    }
	
    @Transaction()
	@Mutation()
	addToken(@Ctx() ctx: RequestContext, @Args() args: any){
	   const {input} = args;
	   return this.tokenDetailsService.addSingleTokenDetails(ctx,input);
	}

	@Query()
	TokenDetails(@Ctx() ctx: RequestContext, @Args() args: any) {
		const {token} = args;
        return this.tokenDetailsService.getTokenDetailsByToken(ctx,token);
    }
	
}
