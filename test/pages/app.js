import { Selector, t } from 'testcafe';
import { axeCheck, createReport } from 'axe-testcafe';

class Page {
    constructor() {}

    async submitForm() {
        const email = await Selector('#email');
        const password = await Selector('#password');
        const button = await Selector('button[type="submit"]');

        const { error, violations } = await axeCheck(t);
        await t.expect(violations.length === 0).ok(createReport(violations));

        await t
            .typeText(email, 'test@example.com')
            .typeText(password, 'password1')
            .click(button);
    }
}

export default new Page();