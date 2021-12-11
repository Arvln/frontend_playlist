import { Button } from '../../components';
import { Prop } from './types';

import '../../styles/features/title-slider.scss';

const CLASS_PREFIX: string = 'feature-title-slider';

function TitleSlider({
	data,
	selectId,
	handleButton
}: Prop) {
	function _renderButton() {
		if (data.length === 0) return <div>loading...</div>;

		return data.map(({ id, year, month }) => {
			const button = `${CLASS_PREFIX}-button-content`;
			const theme = id === selectId ? `${button}-selected` : button;

			return (
				<div
					className={`${CLASS_PREFIX}-button`}
					key={id}
				>
					<Button
						theme={theme}
						text={`${year}年${month}月`}
						handleClick={() => handleButton(id)}
					/>
				</div>
			);
		});
	};

	return (
		<div className={`${CLASS_PREFIX}-wrapper`}>
			{_renderButton()}
		</div>
	);
};

export default TitleSlider;
