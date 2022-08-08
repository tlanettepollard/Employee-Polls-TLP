import { formatDate } from '../utils/helpers';

jest.setTimeout(10000);

describe('formatDate', () => {
	it('will return a formated date from a timestamp', async () => {
		const timestamp = 1467166872634;
		const d = new Date(timestamp);
		const time = d.toLocaleTimeString('en-US');
		await expect(formatDate(timestamp)).toEqual(
			time.substring(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
		);
	});

	it('will return an error if the timestamp cannot be read', async () => {
		const timestamp = '14671668tlaadds72634';
		await expect(formatDate(timestamp)).toContain('Invalid Date');
	});
});
