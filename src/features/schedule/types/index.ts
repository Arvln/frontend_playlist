import { TSchdule } from "../../../types";

export type TPageData = TSchdule & { month: number };

export type Prop = {
	data: TPageData;
};
