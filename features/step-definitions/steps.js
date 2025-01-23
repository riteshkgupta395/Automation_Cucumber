const { Given, Then } = require('@cucumber/cucumber');

Given('I open the Cucumber website', async () => {
  await browser.url('https://cucumber.io/');
  
  // Wait for 10 seconds
  await browser.pause(10000);
});

Then('tap on Documentation', async () => {
  // Tap on the Documentation option using XPath
  const documentationLink = await $('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[2]');
  
  // Wait for the Documentation link to be displayed
  await documentationLink.waitForDisplayed({ timeout: 5000 });
  
  // Click on the Documentation link
  await documentationLink.click();
  
  // Wait for 10 seconds
  await browser.pause(10000);
});

Then('verify the title "Introduction"', async () => {
  // Verify the title using XPath
  const titleElement = await $('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div[1]/div/article/div[2]/header/h1');
  
  // Wait for the title element to be displayed
  await titleElement.waitForDisplayed({ timeout: 5000 });
  
  // Verify the title text is "Introduction"
  await expect(titleElement).toHaveText('Introduction');
});

// New Step for "Community" section
Then('tap on Community', async () => {
  // Tap on the Community option using XPath
  const communityLink = await $('//a[normalize-space()="Community"]');
  
  // Wait for the Community link to be displayed
  await communityLink.waitForDisplayed({ timeout: 5000 });
  
  // Click on the Community link
  await communityLink.click();
  
  // Wait for 10 seconds
  await browser.pause(10000);
});

Then('verify the title "The Cucumber Community"', async () => {
  // Verify the title using updated XPath for "The Cucumber Community"
  const titleElement = await $('//h1[normalize-space()="The Cucumber Community"]');
  
  // Wait for the title element to be displayed
  await titleElement.waitForDisplayed({ timeout: 5000 });
  
  // Verify the title text is "The Cucumber Community"
  await expect(titleElement).toHaveText('The Cucumber Community');
});
