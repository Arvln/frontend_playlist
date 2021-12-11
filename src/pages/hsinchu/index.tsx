import { useEffect, useState } from 'react';
import { Navbar } from '../../components';
import {
	Header,
	TitleSlider,
	Schedule
} from '../../features';
import { TSchduleData } from '../../types';

import '../../styles/pages/hsinchu.scss';

const CLASS_PREFIX: string = 'page-hsinchu';

function Hsinchu() {
	const [data, setData] = useState<TSchduleData[]>([] as TSchduleData[]);
	const [selectId, setSelectId] = useState<string>('');
	const fetchData = async () => {
		const {
			data
		} = await (await fetch('data/schedules.json')).json();

		setData(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	function _renderSchedule({ month, schedules }: TSchduleData) {
		return schedules.map(schedule => {
			const { date } = schedule;
			const data = {
				month,
				...schedule
			};

			return <Schedule data={data} key={date} />;
		});
	}

	function _renderSchedules() {
		if (!selectId) return;

		const schedule = data.find(({ id }) => id === selectId);

		return (
			<div className={`${CLASS_PREFIX}-schedule-wrapper`}>
				{schedule && _renderSchedule(schedule)}
			</div>
		);
	};

	return (
		<main className={`${CLASS_PREFIX}-wrapper`}>
			<Navbar />
			<Header />
			<TitleSlider
				data={data}
				selectId={selectId}
				handleButton={setSelectId}
			/>
			{_renderSchedules()}
		</main>
	);
};

export default Hsinchu;
