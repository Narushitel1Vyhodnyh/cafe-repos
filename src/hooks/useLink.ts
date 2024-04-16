import GlobalApi from '@/utils/GlobalApi';
import { useEffect, useState } from 'react';

const useLink = () => {
	const [linkList, setLinkList] = useState([]);

	useEffect(() => {
		getLink();
	}, []);

	const getLink = () => {
		GlobalApi.getLink().then((resp: any) => {
			setLinkList(resp.data.data);
			console.log(resp.data.data);
		});
	};

	return linkList;
};

export default useLink;
