import { Args, Parent, Query, Resolver, Mutation } from '@nestjs/graphql';
import { TokenDetailsService } from '../service/tokenDetailsService';
import { RequestContext, Ctx, Allow, Permission, Transaction  } from '@vendure/core';

@Resolver()
export class TokenDetailsAdminResolver {
    constructor(private tokenDetailsService: TokenDetailsService) {
    }

    @Query()
	@Allow(Permission.SuperAdmin)
    TokenDetailsAll(@Ctx() ctx: RequestContext, @Args() args: any) {
		const {options} = args;
        return this.tokenDetailsService.getAllTokenDetails(ctx,options || undefined)
    }
	
	@Query()
	@Allow(Permission.SuperAdmin)
    TokenDetails(@Ctx() ctx: RequestContext, @Args() args: any) {
		const {token} = args;
        return this.tokenDetailsService.getTokenDetailsByToken(ctx,token);
    }
	
	@Transaction()
	@Mutation()
	@Allow(Permission.SuperAdmin)
	addTokenDetails(@Ctx() ctx: RequestContext, @Args() args: any){
	   const {input} = args;
	   return this.tokenDetailsService.addSingleTokenDetails(ctx,input);
	}
	
	@Transaction()
	@Mutation()
	@Allow(Permission.SuperAdmin)
	updateTokenDetails(@Ctx() ctx: RequestContext, @Args() args: any){
	   const {input} = args;
	   return this.tokenDetailsService.updateSingleTokenDetails(ctx,input);
	}
	
	@Transaction()
	@Mutation()
	@Allow(Permission.SuperAdmin)
	deleteTokenDetails(@Ctx() ctx: RequestContext, @Args() args: any){
	   return this.tokenDetailsService.deleteSingleTokenDetails(ctx,args.token);
	}
	
	@Transaction()
	@Mutation()
	@Allow(Permission.SuperAdmin)
	deleteAllTokenDetails(@Ctx() ctx: RequestContext){
	   return this.tokenDetailsService.deleteAllTokenDetails(ctx);
	}
	
}
