import { Button } from '../../components';
import { Prop } from './types';
import { getFormatDate, getTimeStamp } from './utils';
import { TTeam } from '../../types/schedule';

import '../../styles/features/schedule.scss';

const CLASS_PREFIX: string = 'feature-schedule';
const SCHEDULE_LENGTH_LIMIT: number = 10;

function Schedule({ data }: Prop) {
	const {
		details
	} = data;

	function _renderTeamInformations(data: TTeam[]) {
		return data.map(({
			logoImageUrl,
			name,
			score
		}, index) => (
			<div
				className={`${CLASS_PREFIX}-score-information`}
				key={index}
			>
				<div className={`${CLASS_PREFIX}-logo-wrapper`}>
					<img src={logoImageUrl} alt="Logo" />
				</div>
				<div className={`${CLASS_PREFIX}-team-name`}>{name}</div>
				<div className={`${CLASS_PREFIX}-team-score`}>{score}</div>
			</div>
		))
	};

	function _handleButton(gameId: number, date: string, time: string) {
		console.log({
			gameId,
			date,
			time
		});
	}

	function _renderContents() {
		return details.map(({ id, time, address, teams }, index) => {
			if (index > SCHEDULE_LENGTH_LIMIT - 1) return <></>;

			const {
				hour,
				minute
			} = time;
			const date = getFormatDate(data);
			const matchTime = `${date}${hour}:${minute}`;

			return (
				<div
					className={`${CLASS_PREFIX}-content`}
					key={id}
				>
					<div className={`${CLASS_PREFIX}-title`}>
						<div className={`${CLASS_PREFIX}-title-time`}>
							{matchTime}
						</div>
						<span>例行賽</span>
					</div>
					<div className={`${CLASS_PREFIX}-address`}>{address}</div>
					{_renderTeamInformations(teams)}
					<div className={`${CLASS_PREFIX}-options`}>
						<Button
							theme={`${CLASS_PREFIX}-details`}
							text="查看詳情"
						/>
						<Button
							theme={`${CLASS_PREFIX}-booking`}
							text="購票"
							handleClick={() => _handleButton(
								parseInt(id),
								date,
								getTimeStamp()
							)}
						/>
					</div>
				</div>
			);
		})
	};

	return (
		<div className={`${CLASS_PREFIX}-wrapper`}>
			{_renderContents()}
		</div>
	);
};

export default Schedule;
