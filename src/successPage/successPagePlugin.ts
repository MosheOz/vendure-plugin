import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { SuccessPageController } from './successPageController';

@VendurePlugin({
  imports: [PluginCommonModule],
  controllers: [SuccessPageController],
})
export class SuccessControllerPlugin {}