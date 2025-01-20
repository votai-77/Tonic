import{test} from '@playwright/test';
import { Registe } from '../Pages/TN_Register';


test("Register email ", async({page})=>{
    const register = new Registe(page);
    await register.registerByEmail();
});