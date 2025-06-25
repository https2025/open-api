import { Loader } from '../../lib/index.js'
const Scraper = Loader.scrapers

export const routes = {
   category: 'main',
   path: '/api/quote',
   parameter: ['q'],
   method: 'get',
   error: false,
   rpm: true
}
