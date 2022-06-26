document.body.onload = () => {
	ae(window, 'offline', e => {
		wrapper();
		ca(qs('.offline'), 'show');
	});

	ae(window, 'online', e => {
		cr(qs('.offline'), 'show');
		ca(qs('.online'), 'show');
	});

	si(1000, () => {
		let time = new Date();
		let hr = time.getHours();
		let min = time.getMinutes();
		let sec = time.getSeconds();
		hr = hr < 10 ? '0' + hr : hr;
		min = min < 10 ? '0' + min : min;
		sec = sec < 10 ? '0' + sec : sec;
		qs('.clock-num').textContent = `${hr}:${min}:${sec}`;
	});

	const wrapper = () => {
		let wrapper = cel('div');
		db.append(wrapper);
	   	cn(wrapper, 'wrapper');
		ae(wrapper, 'click', e => {
			fe(qsa('.popup'), popup => {
				cr(popup, 'show');
				wrapper.remove();
			});
		});
	};

	ae(qs('form'), 'submit', e => {
		e.preventDefault();
		let city = qs('input').value;
		fch(`https://api.keybit.ir/owghat/?city=${city}`, json => {
			let res = json.result;
			if (json.ok == true) {
				ih(
					qs('.city-infos .infos'),
					`
						<span>نام شهر: ${city}</span>
						<span>تاریخ: ${res.month}/${res.day}</span>
						<span>اذان صبح: ${res.azan_sobh}</span>
						<span>طلوع آفتاب: ${res.tolu_aftab}</span>
						<span>اذان ظهر: ${res.azan_zohr}</span>
						<span>غروب آفتاب: ${res.ghorub_aftab}</span>
						<span>اذان مغرب: ${res.azan_maghreb}</span>
						<span>نیمه شب شرعی: ${res.nimeshab}</span>
					`
				);
				qs('.city-infos').style.paddingBottom = '0.5rem';
				qs('.next-day').style.display = 'block';
				si(30000, () => {
					let hr = new Date().getHours();
					let min = new Date().getMinutes();
					hr = hr < 10 ? '0' + hr : hr;
					min = min < 10 ? '0' + min : min;
					let time = `${hr}:${min}`;
					if (time == res.azan_sobh) {
						qs('.azan').play();
						wrapper();
						ih(qs('.notif .text'), `اذان صبح به افق ${city}`);
						ca(qs('.notif'), 'show');
					}
					if (time == res.azan_zohr) {
						qs('.azan').play();
						wrapper();
						ih(qs('.notif .text'), `اذان ظهر به افق ${city}`);
						ca(qs('.notif'), 'show');
					}
					if (time == res.azan_maghreb) {
						qs('.azan').play();
						wrapper();
						ih(qs('.notif .text'), `اذان مغرب به افق ${city}`);
						ca(qs('.notif'), 'show');
					}
				});
				ae(qs('.next-day'), 'click', e => {
					if (res.month >= 7) {
						if (res.day == 30) {
							fch(`https://api.keybit.ir/owghat/?city=${city}&month=${res.month + 1}&day=1`, json => {
								let res = json.result;
								ih(
									qs('.city-infos .infos'),
									`
										<span>نام شهر: ${city}</span>
										<span>تاریخ: ${res.month}/${res.day}</span>
										<span>اذان صبح: ${res.azan_sobh}</span>
										<span>طلوع آفتاب: ${res.tolu_aftab}</span>
										<span>اذان ظهر: ${res.azan_zohr}</span>
										<span>غروب آفتاب: ${res.ghorub_aftab}</span>
										<span>اذان مغرب: ${res.azan_maghreb}</span>
										<span>نیمه شب شرعی: ${res.nimeshab}</span>
									`
								);
							});
						} else {
							fch(`https://api.keybit.ir/owghat/?city=${city}&month=${res.month}&day=${res.day + 1}`, json => {
								let res = json.result;
								ih(
									qs('.city-infos .infos'),
									`
										<span>نام شهر: ${city}</span>
										<span>تاریخ: ${res.month}/${res.day}</span>
										<span>اذان صبح: ${res.azan_sobh}</span>
										<span>طلوع آفتاب: ${res.tolu_aftab}</span>
										<span>اذان ظهر: ${res.azan_zohr}</span>
										<span>غروب آفتاب: ${res.ghorub_aftab}</span>
										<span>اذان مغرب: ${res.azan_maghreb}</span>
										<span>نیمه شب شرعی: ${res.nimeshab}</span>
									`
								);
							});
						}
					} else {
						if (res.day == 31) {
							fch(`https://api.keybit.ir/owghat/?city=${city}&month=${res.month + 1}&day=1`, json => {
								let res = json.result;
								ih(
									qs('.city-infos .infos'),
									`
										<span>نام شهر: ${city}</span>
										<span>تاریخ: ${res.month}/${res.day}</span>
										<span>اذان صبح: ${res.azan_sobh}</span>
										<span>طلوع آفتاب: ${res.tolu_aftab}</span>
										<span>اذان ظهر: ${res.azan_zohr}</span>
										<span>غروب آفتاب: ${res.ghorub_aftab}</span>
										<span>اذان مغرب: ${res.azan_maghreb}</span>
										<span>نیمه شب شرعی: ${res.nimeshab}</span>
									`
								);
							});
						} else {
							fch(`https://api.keybit.ir/owghat/?city=${city}&month=${res.month}&day=${res.day + 1}`, json => {
								let res = json.result;
								ih(
									qs('.city-infos .infos'),
									`
										<span>نام شهر: ${city}</span>
										<span>تاریخ: ${res.month}/${res.day}</span>
										<span>اذان صبح: ${res.azan_sobh}</span>
										<span>طلوع آفتاب: ${res.tolu_aftab}</span>
										<span>اذان ظهر: ${res.azan_zohr}</span>
										<span>غروب آفتاب: ${res.ghorub_aftab}</span>
										<span>اذان مغرب: ${res.azan_maghreb}</span>
										<span>نیمه شب شرعی: ${res.nimeshab}</span>
									`
								);
							});
						}
					}
				});
			} else {
				wrapper();
				ih(qs('.no-city .main .text'), `شهر "${city}" پیدا نشد!`);
				ca(qs('.no-city'), 'show');
			}
		});
	});

	ae(qs('.setting-btn'), 'click', e => {
		ca(qs('.setting'), 'show');
	});
	ae(qs('.setting .close'), 'click', e => {
		cr(qs('.setting'), 'show');
	});
	fe(qsa('.setting img'), img => {
		ae(img, 'click', e => {
			db.style.backgroundImage = `linear-gradient(360deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${img.src}')`;
			cr(qs('.setting'), 'show');
		});
	});
	fe(qsa('.setting button'), btn => {
		ae(btn, 'click', e => {
			qs('.azan').src = btn.value;
			cr(qs('.setting'), 'show');
		});
	});
	ae(qs('.images .desired'), 'click', e => {
		if (db.innerHTML.includes(`placeholder="لینک تصویر"`)) {
			qs('input[placeholder="لینک تصویر"]').parentElement.remove();
		} else {
			let urlForm = cel('form');
			qs('.images').after(urlForm);
			let url = cel('input');
			urlForm.append(url);
			url.placeholder = 'لینک تصویر';
			ae(urlForm, 'submit', e => {
				e.preventDefault();
				db.style.backgroundImage = `linear-gradient(360deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${url.value}')`;
				urlForm.remove();
				cr(qs('.setting'), 'show');
			});
		}
	});
	ae(qs('.muezzins .desired'), 'click', e => {
		if (db.innerHTML.includes(`placeholder="لینک اذان"`)) {
			qs('input[placeholder="لینک اذان"]').parentElement.remove();
		} else {
			let urlForm = cel('form');
			qs('.muezzins').after(urlForm);
			let url = cel('input');
			urlForm.append(url);
			url.placeholder = 'لینک اذان';
			ae(urlForm, 'submit', e => {
				e.preventDefault();
				qs('.azan').src = url.value;
				urlForm.remove();
				cr(qs('.setting'), 'show');
			});
		}
	});
};
