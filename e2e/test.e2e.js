import {device, element, by} from 'detox';
import {test, beforeAll, beforeEach, describe} from '@jest/globals';

describe('rn test suite', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  test('swipe test', async () => {
    await element(by.text('\udb82\udd3c')).atIndex(1).tap();
    await element(by.type('RCTCustomScrollView'))
      .atIndex(1)
      .scroll(531.667, 'right');
  });

  test('forms test', async () => {
    await element(by.text('\udb80\udfeb')).atIndex(1).tap();
    await element(by.id('text-input')).tap();
    await element(by.id('text-input')).replaceText('cwwedw');
    await element(by.id('input-text-result')).tap();
    await element(by.id('switch')).tap();
    await element(by.id('switch-text')).tap();
    await element(by.id('Dropdown')).tap();
    await element(by.id('Dropdown picker')).tap();
    await element(by.id('Dropdown picker')).setColumnToValue(
      0,
      'Appium is awesome',
    );
    await element(by.id('done_text')).tap();
    await element(by.id('button-Active')).tap();
    await element(
      by.type('_UIAlertControllerInterfaceActionGroupView'),
    ).longPress(0);
    await element(by.id('button-Active')).tap();
    await element(
      by.type('_UIAlertControllerInterfaceActionGroupView'),
    ).longPress(0);
    await element(by.id('button-Inactive')).tap();
  });
  test('drag and drop', async () => {
    await element(by.text('\udb80\udddb')).atIndex(1).tap();
    await element(by.type('RCTImageView')).atIndex(1).longPress(500);
    await element(by.id('drag-r3')).tap();
    await element(by.type('RCTImageView')).atIndex(1).longPress(500);
    await element(by.type('RCTImageView')).atIndex(0).longPress(500);
    await element(by.type('RCTImageView')).atIndex(1).longPress(500);
    await element(by.id('renew')).tap();
  });
});
