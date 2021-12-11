import '../../styles/components/navbar.scss';

const CLASS_PREFIX: string = 'component-navbar';

function Navbar() {
	return (
		<nav className={`${CLASS_PREFIX}-wrapper`}>
			<div className={`${CLASS_PREFIX}-arrow`} />
			<div className={`${CLASS_PREFIX}-title`}>新竹街口攻城獅</div>
		</nav>
	);
};

export default Navbar;
