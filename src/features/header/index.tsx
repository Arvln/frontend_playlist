import '../../styles/features/header.scss';

const CLASS_PREFIX: string = 'feature-header';

function Header() {
	return (
		<header className={`${CLASS_PREFIX}-wrapper`}>
			<h1 className={`${CLASS_PREFIX}-title`}>賽程表</h1>
			<div className={`${CLASS_PREFIX}-details`}>
				<div className={`${CLASS_PREFIX}-situation`}>聯盟戰況</div>
				<div className="space_8" />
				<button className={`${CLASS_PREFIX}-button`}>
					<div className={`${CLASS_PREFIX}-arrow`} />
				</button>
			</div>
		</header>
	);
};

export default Header;
