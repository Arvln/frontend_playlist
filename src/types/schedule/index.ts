export type TTeam = {
	logoImageUrl: string;
	name: string;
	score: number;
};

type TDetail = {
	id: string;
	time: Record<string, number>;
	address: string;
	teams: TTeam[];
};

export type TSchdule = {
	date: number;
	dayOfWeek: number;
	details: TDetail[];
};

export type TSchduleData = {
	id: string;
	year: number;
	month: number;
	schedules: TSchdule[];
};
