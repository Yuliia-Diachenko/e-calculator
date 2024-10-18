import scrapeTariffs from '../../lib/scrapeTariffs';

export default async function handler(req, res) {
    try {
        const tariffs = await scrapeTariffs();
        console.log("Tariffs data:", tariffs);
        res.status(200).json(tariffs);
    } catch (error) {
        console.error("Error scraping tariffs:", error);
        res.status(500).json({ error: 'Failed to scrape tariffs' });
    }
};

async function fetchTariffs() {
    try {
        const response = await fetch('/api/scrape');
        const data = await response.json();
        console.log("Fetched tariffs:", data);
    } catch (error) {
        console.error("Error fetching tariffs:", error);
    }
}

useEffect(() => {
    fetchTariffs();
}, [] );