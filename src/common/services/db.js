import Dexie from 'dexie';
import { DB_NAME, DB_VERSION, TB_PRODUCER } from './../constants/constants';

const db = new Dexie(DB_NAME);
db.version(DB_VERSION).stores({
	[TB_PRODUCER]: '++id , name',
});

const tbl = db.table(TB_PRODUCER);
tbl
	.toCollection()
	.count()
	.then(count => {
		console.log(count);
		if (count === 0) {
			const bulkData = [];
			for (let i = 0; i < 100000; i++) {
				bulkData.push({
					name: 'shubhram_' + i,
				});
			}
			tbl.bulkAdd(bulkData).then(id => {
				console.log('Bulk Data Added');
			});
		}
	});

export default db;
