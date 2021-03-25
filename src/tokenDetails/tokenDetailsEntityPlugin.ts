import gql from 'graphql-tag';
import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { TokenDetailsEntity } from './tokenDetailsEntity';
import { TokenDetailsService } from './service/tokenDetailsService';
import { adminApiExtensions,shopApiExtensions } from './apiExtensions/tokenDetailsApiExtensions';
import { TokenDetailsShopResolver } from './resolvers/shopResolver';
import { TokenDetailsAdminResolver } from './resolvers/adminResolver';
import { PLUGIN_INIT_OPTIONS } from './constants/constants';
import { PluginInitOptions } from './constants/types';




@VendurePlugin({
  imports: [PluginCommonModule],
  entities: [TokenDetailsEntity],
  shopApiExtensions: {
      schema: shopApiExtensions,
      resolvers: [TokenDetailsShopResolver],
  },
adminApiExtensions: {
      schema: adminApiExtensions,
      resolvers: [TokenDetailsAdminResolver],
  },
  providers: [
      TokenDetailsService,
      { provide: PLUGIN_INIT_OPTIONS, useFactory: () => TokenDetailsEntityPlugin.options },
  ]
})

export class TokenDetailsEntityPlugin {

  static options: PluginInitOptions;
  static init(options: PluginInitOptions) {
      this.options = options;
      return TokenDetailsEntityPlugin;
  }
}