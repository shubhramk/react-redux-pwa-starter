import useNetwork from './../../common/hooks/use-network';

function OnlineStatus({ children }) {
	let isOnline = useNetwork();
	return children(isOnline);
}

export default OnlineStatus;
