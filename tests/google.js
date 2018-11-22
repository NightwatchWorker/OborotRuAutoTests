var item = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
var commentNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

module.exports = {
  tags: ['google'],
  'Test task' : function (client) {
    client
      .url('http://oborot-dev.ru/tester/8ac42343cf7f89acc5f51f05b14a8e70')
      .pause(1000);

    client.
    		useXpath()
    		.assert.title('Welcome!')
    		.assert.visible('//ul//li[1]//a')
    		.assert.containsText('//ul//li[1]//a','Главная')
    		.assert.visible('//ul//li[2]//a')
    		.assert.containsText('//ul//li[2]//a', 'Статьи')
    		.assert.visible('//ul//li[3]//a')
    		.assert.containsText('//ul//li[3]//a', 'Новости')


    		.assert.visible('//div[@class="row"]//div[@class="preview-content_wrap"]')
    		.assert.visible('//div[@class="preview-content_img "]')
    		.assert.visible('//div[@class="preview-content_title"]')
    		.assert.visible('//div[@class="preview-content_preview"]')
    		.assert.visible('//a[@class="preview-content_content_type"]')

    		.click('//div[@class="row"]/div[5]/div')
    
    		.waitForElementVisible('//h1', 5000)
    		.assert.visible('//div[@class="content-page_img "]')
    		.assert.visible('//div[@class="content-page_text _inner_padding "]')
    		.assert.visible('//h3[contains(text(),"Комментарии")]')
    		.assert.visible('//h3[contains(text(),"Написать каментарий")]')
    		.assert.visible('//input[@value="Сохранить отправить позже"]')

    
    		.setValue('//textarea[@name="comment"]', 'Комментарий #' + commentNumber)
    		.click('//input[@value="Отправить"]')
    		.waitForElementVisible('//div[@class="row"]//b', 5000)
    		.assert.visible('//div[@class="row"]//b/following-sibling::p[contains(text(), "Комментарий #' + commentNumber + '")]')
    		.assert.containsText('//div[@class="row"]//b/following-sibling::p[contains(text(), "Комментарий #' + commentNumber + '")]/../b', 'Ибрагимов Эдем')

    		.setValue('//textarea[@name="comment"]', '')
    		.click('//input[@value="Отправить"]')
    		.waitForElementVisible('//div[@class="row"]//b', 5000)
    		.assert.containsText('//div[@class="row"]//b', 'Ибрагимов Эдем')
    		.assert.containsText('//div[@class="row"]//b/following-sibling::p', 'Комментарий');

    client.end();
  }
};
