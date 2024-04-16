import GlobalApi from '@/utils/GlobalApi';
import { useEffect, useState } from 'react';

const useMenu = () => {
	const [menuList, setMenuList] = useState([]);

	useEffect(() => {
		getMenu();
	}, []);

	const getMenu = () => {
		GlobalApi.getMenu().then((resp: any) => {
			setMenuList(resp.data.data);
			console.log(resp.data.data);
		});
	};

	return menuList;
};

export default useMenu;
