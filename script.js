const deliveryBtn = document.querySelector('.delivery-btn');
const deliveryDay = document.querySelector('.delivery-day');

const daysArr = [
	'w poniedziałek',
	'we wtorek',
	'w środę',
	'w czwartek',
	'w piątek',
];

const handleDate = () => {
	const actualDay = new Date().getDay();
	const actualHour = new Date().getHours();

	let nextDay = actualDay;
	let after15 = nextDay + 1;

	if (actualDay === 5 || actualDay === 6) {
		deliveryDay.textContent = daysArr[1];
	} else {
		if (
			actualHour < 15 &&
			actualDay !== 0 &&
			actualDay !== 5 &&
			actualDay !== 6
		) {
			deliveryDay.textContent = daysArr[nextDay];
		} else if (actualHour >= 15 || actualDay === 0) {
			if (after15 === 5 || after15 === 6) {
				deliveryDay.textContent = daysArr[0];
			} else if (actualDay === 0) {
				deliveryDay.textContent = daysArr[1];
			} else {
				deliveryDay.textContent = daysArr[after15];
			}
		}
	}
};

deliveryBtn.addEventListener('click', handleDate);
