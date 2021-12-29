import {device, expect, element, by} from 'detox';
import {test, beforeAll, beforeEach, describe} from '@jest/globals';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  test('should drag and drop all the tiles', async () => {
    await element(by.text('Drag')).tap();
    await element(by.id('drag-l2')).tap();
    await element(by.id('drop-l1')).tap();
    await element(by.type('RCTImageView')).atIndex(1).longPress(500);
    await element(by.type('RCTImageView')).atIndex(1).longPress(500);
    await element(by.id('drag-c1')).tap();
    await element(by.id('drop-c1')).tap();
  });
});
