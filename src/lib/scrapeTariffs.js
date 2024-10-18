import puppeteer from 'puppeteer';

async function scrapeTariffs() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Перейдіть на сайт обленерго
    await page.goto('https://yasno.com.ua/b2c-tariffs', { waitUntil: 'networkidle2' });

    // Чекання завантаження таблиці з тарифами
    await page.waitForSelector('.tariffs-table tr');

    // Знайдіть і витягніть дані тарифів
    const tariffs = await page.evaluate(() => {
        const rows = document.querySelectorAll('.tariffs-table tr');
        return Array.from(rows, row => {
            const columns = row.querySelectorAll('td');
            return {
                name: columns[0]?.innerText || '',
                price: columns[1]?.innerText || ''
            };
        }).filter(tariff => tariff.name && tariff.price);
    });

    await browser.close();
    console.log(tariffs);
}

scrapeTariffs();

