@REM Tonic
@REM cd /d C:\Users\vyvys\AutomationProject\Tonic

call npx playwright test TN_Register.spec.js --reporter=line --workers=1
call npx playwright test TN_Login.spec.js --reporter=line --workers=1
call npx playwright test TN_Actions.spec.js --reporter=line --workers=1
