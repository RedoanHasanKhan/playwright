import {test} from '@playwright/test'

test.beforeAll('before all testing it will run', async()=>{
    console.log("test before all :)");
});

test.afterAll('After all testing it will run', async()=>{
    console.log("test After all :)");
});

test.afterEach('after each testing it will run', async()=>{
    console.log("test After each :)");
});
test.beforeEach('before each testing it will run', async()=>{
    console.log("test before each :)");
});

    test('test A1', async({page})=>{
        await page.goto('');
        console.log("test A1")
    });

    test('test A2', async({page})=>{
        await page.goto('');
        console.log("test A2")
    });
