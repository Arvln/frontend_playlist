import { Dispatch, SetStateAction } from "react";
import { TSchduleData } from "../../../types";

export type Prop = {
	data: TSchduleData[];
	selectId: string;
	handleButton: Dispatch<SetStateAction<string>>;
};
