import {test} from '@playwright/test'

test.describe('feature A group', ()=> {
    test('test A1', async({page})=>{
        await page.goto('');
        console.log("test A1")
    });
    
    
    test('test A2', async({page})=>{
        await page.goto('');
        console.log("test A2")
    });
});

test.describe('feature B group', ()=> {
    test('test A3', async({page})=>{
        await page.goto('');
        console.log("test A3")
    });
    
    
    test('test A4', async({page})=>{
        await page.goto('');
        console.log("test A4")
    });
});



test('test A1', async({page})=>{
    await page.goto('');
    console.log("test A1")
});


test('test A2', async({page})=>{
    await page.goto('');
    console.log("test A2")
});


test('test A3', async({page})=>{
    await page.goto('');
    console.log("test A3")
});


test('test A4', async({page})=>{
    await page.goto('');
    console.log("test A4")
});