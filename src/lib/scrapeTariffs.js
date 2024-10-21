import puppeteer from 'puppeteer';
import fs from 'fs';

async function scrapeTariffs() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Go to oblenergo website
    await page.goto('https://yasno.com.ua/b2c-tariffs', { waitUntil: 'networkidle2' });

    
    // Waiting for tariff items to load
    await page.waitForSelector('.partial-tariff-price', { timeout: 60000 });

    // Find and extract tariff data
    const tariffs = await page.evaluate(() => {
        const items = document.querySelectorAll('.partial-tariff__wrapper');
        console.log('Кількість знайдених елементів:', items.length);
        return Array.from(items).map(item => {
            const consumerType = item.querySelector('.partial-tariff__title')?.innerText || 'Невідомий тип';
            const taxes = item.querySelector('h3')?.innerText || '';
            const tariff = item.querySelector('strong')?.innerText || '';
            const unit = item.querySelector('span')?.innerText || '';
            console.log('Знайдено тариф:', { consumerType, tariff, unit });
            return { consumerType, taxes, tariff, unit };
        }).filter(tariff => tariff.tariff && tariff.unit);
    });

    // Logging of collected data
    console.log('Зібрані тарифи:', tariffs);

    // Saving data to a file
    fs.writeFileSync('tariffs.json', JSON.stringify(tariffs, null, 2));

    await browser.close();
    console.log('Дані тарифів збережено у файлі tariffs.json');
}

scrapeTariffs();
