import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { NotifyListenerHoldDealController } from './notifyListenerHoldDealController';

@VendurePlugin({
  imports: [PluginCommonModule],
  controllers: [NotifyListenerHoldDealController],
})
export class NotifyListenerHoldDealControllerPlugin {}