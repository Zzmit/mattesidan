const { pq } = require("./calc");

test("om p är 2 och q är -3 så är nollställena = 1 , -3", () => { 
  expect(pq(2, -3)).toBe("svar1 = 1 svar2 = -3");
});
test("om p är 4 och q är -5 så är nollställena = 1 , -5", () => { 
    expect(pq(4, -5)).toBe("svar1 = 1 svar2 = -5");
  });

  test("om p är 6 och q är -7 så är nollställena = 1 , -7", () => { 
    expect(pq(6, -7)).toBe("svar1 = 1 svar2 = -7");
  });

  test("om p är 18 och q är -19 så är nollställena = 1 , -19", () => { 
    expect(pq(18, -19)).toBe("svar1 = 1 svar2 = -19");
  });

  test("om p är 375 och q är -376 så är nollställena = 1 , -376", () => { 
    expect(pq(375, -376)).toBe("svar1 = 1 svar2 = -376");
  });
  




 const puppeteer = require("puppeteer");

 test("om pqformel fungerar", async () => {
     const browser = await puppeteer.launch({
       headless: false,
       slowMo: 70,
       args: ["--window-size=1920, 1920"]
     });
  
     const page = await browser.newPage();
     await page.goto(
         "file:///C:/Users/daniel.andersson31/Desktop/projekt_webbhistoria-master/index.html"
     );
   await page.type("#p", "2");
   await page.type("#q", "-3");
   await page.click("#submit1");
   const resultat = await page.$eval("#pqsvar1", el => el.textContent);
   await expect(resultat).toBe("x2 blir : -3");
   const resultat2 = await page.$eval("#pqsvar2", el => el.textContent);
   await expect(resultat2).toBe("x1 blir : 1");
   });
  