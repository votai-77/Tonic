import{test} from '@playwright/test';
import { Login } from '../Pages/TN_Login';

//========================Login the first time with Email======================
//==================Note: Cần thay đổi account email cho mỗi lần run testcase=======================
test("Login the first time by account email", async({page})=>{
    const login = new Login(page);
    await login.loginFirst();
    await page.close();
});

test("Login by email exists", async({page})=>{
    const loginfirst = new Login(page);
    await loginfirst.loginAccountByEmail();
    await page.close();
});

test("Login with Google", async({page})=>{
    const loginGoogle = new Login(page);
    await loginGoogle.loginByGoogle();
})