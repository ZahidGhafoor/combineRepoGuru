import axios from '../axiosInstance';


const addAdmin = async (val) => {
    let token = localStorage.getItem("guruToken")

	let resolved = {
		data: null,
		error: null,
	};

	try {
		let res = await axios({
			url: `accounts/accounts/admins`,
			method: 'POST',
			headers: {
				Authorization: `Bearer Bearer ${token}`,
			},
			data: {
				accountHolderFirstName: val.accountHolderFirstName,
				accountHolderLastName: val.accountHolderLastName,
				accountType: 'ADMIN',
				agreeLoginPolicy: true,
				agreedRecommendation: true,
				agreedTermsAndConditions: true,
				city: val.city,
				dateOfBirth: "1999-10-23",
				drivingSchoolName: val.drivingSchoolName,
				emailAddress: val.email,
				firstName: val.firstName,
				iban: val.iban.replaceAll(" ",""),
				isReturning: true,
				lastName: val.lastName,
				password: val.password,
				// phoneNumber: '03004050609',
				postCode: val.postCode,
				roles: ['ROLE_ADMIN'],
				salutation: val.salutation,
				street: val.street,
				streetNumber: '6',
				title: val.title,
			},
		});
		resolved.data = res.data;
	} catch (error) {
		resolved.error = 'Something went wrong';
	}
	return resolved;
};

const getAdmin = async () => {
    let token = localStorage.getItem("guruToken")

	let resolved = {
		data: null,
		error: null,
	};
	try {
		let res = await axios({
			url: `accounts/accounts/admins?page=1&size=15`,
			method: 'GET',
			headers: {
				Authorization: `Bearer Bearer ${token}`,
			},
		});
		let allRes = await axios({
            url: `accounts/accounts/admins?page=0&size=${res.data.totalElements}`,
            method: "GET",
            headers: {
                Authorization: `Bearer Bearer ${token}`
            },

        })
        resolved.data = allRes.data
        console.log("total Admins are=======", allRes)
	} catch (error) {
		if (error.response) {
			resolved.error = error.response.data.message;
		} else {
			resolved.error = 'Something went wrong';
		}
	}
	return resolved;
};

export { addAdmin, getAdmin };
