import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { NotifyListenerController } from './notifyListenerController';

@VendurePlugin({
  imports: [PluginCommonModule],
  controllers: [NotifyListenerController],
})
export class NotifyListenerControllerPlugin {}