import { TPageData } from '../types';

enum DayOfWeek {
	"一" = 1,
	"二" = 2,
	"三" = 3,
	"四" = 4,
	"五" = 5,
	"六" = 6,
	"日" = 7
};

export function getFormatDate(schedule: TPageData): string {
	const {
		month,
		date,
		dayOfWeek
	} = schedule;

	return `${month}月${date}日 (${DayOfWeek[dayOfWeek]}) `;
};

export function getTimeStamp(): string {
	return new Date().getTime().toString();
};
