import {test, expect} from '@playwright/test'

test('Simple Assertions', async()=>{
    expect('a').toEqual('a');
    expect(2).toBeLessThan(3);
    expect(null).toBeFalsy();
});

test('test with simple auto-retrying assertion', async({page})=>{

    await page.goto('http://localhost:3000');
    //await expect(page.getByText('Register')).toContainText('Register');
    await expect(page.getByTestId('location')).toContainText('You are visiting us from New York');
    expect (page).toHaveTitle('Credit Association');

});