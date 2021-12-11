import { Prop } from './types';

import '../../styles/components/button.scss';

const CLASS_PREFIX: string = 'component-button';

function Button({ theme, text, handleClick }: Prop) {
	const wrapper = `${CLASS_PREFIX}-wrapper ${theme}`;

	return (
		<div className={wrapper}>
			<button onClick={handleClick}>
				<div className={`${CLASS_PREFIX}-text`}>{text}</div>
			</button>
		</div>
	);
};

export default Button;
