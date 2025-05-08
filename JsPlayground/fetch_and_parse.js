const axios = require('axios');
const cheerio = require('cheerio');

const CHALLENGE_URL = 'https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge';

async function fetchAndParse() {
    try {
        console.log(" CHALLENGE_URL:", CHALLENGE_URL)
        const { data: html } = await axios.get(CHALLENGE_URL);
        const $ = cheerio.load(html);
        const result = [];

        $('section').each((_, section) => {
            const sectionId = $(section).attr('data-id') || '';
            if (!sectionId.startsWith('92')) return;

            const article = $(section).find('article').filter((_, a) => {
                const dataClass = $(a).attr('data-class') || '';
                return dataClass.endsWith('45');
            }).first();

            if (article.length === 0) return;

            const div = article.find('div').filter((_, d) => {
                const dataTag = $(d).attr('data-tag') || '';
                return dataTag.includes('78');
            }).first();

            if (div.length === 0) return;

            const b = div.find('b.ref');
            const value = b.attr('value');
            if (value) result.push(value);
        });

        const finalUrl = result.join('');
        console.log('✅ Decoded URL:', finalUrl);
        console.log('👉 Opening URL will give you the flag.');

    } catch (err) {
        console.error('err.message');
    }
}

fetchAndParse();
