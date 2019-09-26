import { Selector } from 'testcafe';

import page from './pages/app';

fixture`Page controller test case`.page`localhost:3000`;

test('Ok', async t => {
    await page.submitForm();
});