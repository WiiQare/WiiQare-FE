import Image from "next/image";
import CardHeader from "../../atoms/Card/Header";
import { BiCamera } from "react-icons/bi";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const TabHistories = [
	{
		name: "About"
	},

	{
		name: "Settings",
	}
]

const Profile = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div className="p-2 space-y-6 md:py-8 md:px-6 mb-20">
			<CardHeader
				title={"My Profile"}
				breadcrumbs={[
					{
						item: "Home",
						link: "/"
					},
					{
						item: "John Doe",
						link: "/profile"
					}
				]}
				download={false}
				print={false}
			/>

			<section className="w-full flex flex-col gap-8 items-start pb-20 md:pb-0">
				<div className="w-full overflow-hidden md:col-span-2 rounded-lg p-4 flex flex-col gap-6 bg-white drop-shadow-sm">
					<div className="bg-[url(https://i.goopics.net/a5yedr.jpg)] bg-no-repeat h-56 rounded-lg"></div>

					<div className="flex justify-between items-center md:px-6">
						<div className="flex gap-5 items-center relative">
							<div className="w-20 h-20">
								<Image src={"https://xsgames.co/randomusers/avatar.php?g=male"} width={80} height={80} className="object-cover rounded-full h-full w-full" />
							</div>

							<div className="">
								<h1 className="text-sky font-bold text-xl">Mitchell C. Shay</h1>
								<span className="text-xs">frdrcpeter@gmail.com</span>
							</div>
						</div>

						<div>
							<button htmlFor="avatar" className="bg-[rgb(29,170,230,.6)] p-2 border-2 border-sky rounded-md text-white hover:bg-[rgb(29,170,230,.8)] w-fit">
								<BiCamera size={22} />
							</button>

							<input type="file" name="" id="avatar" className="hidden" />
						</div>
					</div>
				</div>

				<div className="md:w-3/4 w-full">
					<div className="min-full md:col-span-3 rounded-lg p-4 flex flex-col gap-4 bg-white drop-shadow-sm">
						<Box sx={{ width: '100%' }}>

							<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
								<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
									{TabHistories.map((item, index) => <Tab label={item.name} {...a11yProps(index)} key={index} />)}
								</Tabs>
							</Box>

							<div className="min-w-full">
								{TabHistories.map((item, index) => <TabPanelContent value={value} index={index} />)}
							</div>
						</Box>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Profile;

export function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function TabPanelContent({ value, index }) {
	return (
		<TabPanel value={value} index={index} >
			{
				index == 0 ? <About /> : <Settings />
			}
		</TabPanel>
	)
}

function About() {
	return (
		<section className="space-y-8">
			<h2 className="text-sky font-semibold">Personal Information</h2>

			<div className="md:w-3/6 space-y-4">
				<div className="grid grid-cols-2">
					<h5 className="font-semibold">Name :</h5>
					<span className="text-gray-500">Mitchell C. Shay</span>
				</div>

				<div className="grid grid-cols-2">
					<h5 className="font-semibold">Email :</h5>
					<span className="text-gray-500">frdrcpeter@gmail.com</span>
				</div>

				<div className="grid grid-cols-2">
					<h5 className="font-semibold">Availability :</h5>
					<span className="text-gray-500">Full time</span>
				</div>

				<div className="grid grid-cols-2">
					<h5 className="font-semibold">Age :</h5>
					<span className="text-gray-500">37</span>
				</div>

				<div className="grid grid-cols-2">
					<h5 className="font-semibold">Location :</h5>
					<span className="text-gray-500">Rosemont Avenue Melbourne, Florida</span>
				</div>

				<div className="grid grid-cols-2">
					<h5 className="font-semibold">Year Experience :</h5>
					<span className="text-gray-500">07 Year Experiences</span>
				</div>
			</div>
		</section>
	)
}

function Settings() {
	const [state, setState] = useState('');

	const handleState = (event) => {
		setState(event.target.value);
	};
	return (
		<section className="space-y-8">
			<h2 className="text-sky font-semibold">Account Setting</h2>

			<div className="flex md:grid md:grid-cols-2 gap-8">
				<TextField
					fullWidth
					type={"email"}
					className="placeholder:text-gray-400 hover:outline-none focus:ring-0 border border-gray-300 rounded-lg focus:ring-sky"
					label="Email Address"
					placeholder="Email Address"
					name="email"
					variant="outlined"
				/>

				<TextField
					fullWidth
					type={"password"}
					className="placeholder:text-gray-400 hover:outline-none focus:ring-0 border border-gray-300 rounded-lg focus:ring-sky"
					label="Password"
					name="password"
					placeholder="Password"
					variant="outlined"
				/>
			</div>

			<div className="">
				<TextField
					fullWidth
					type={"text"}
					className="placeholder:text-gray-400 hover:outline-none focus:ring-0 border border-gray-300 rounded-lg focus:ring-sky"
					label="Adress"
					placeholder="123 Main Street"
					name="email"
					variant="outlined"
				/>
			</div>

			<div className="">
				<TextField
					fullWidth
					type={"text"}
					className="placeholder:text-gray-400 hover:outline-none focus:ring-0 border border-gray-300 rounded-lg focus:ring-sky"
					label="Adress 2"
					placeholder="123 Main Street"
					name="email"
					variant="outlined"
				/>
			</div>

			<div className="flex md:hidden">
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">State</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={state}
							label="State"
							onChange={handleState}
						>
							<MenuItem value={"Kinshasa"} selected={true}>Kinshasa</MenuItem>
							<MenuItem value={"Goma"}>Goma</MenuItem>
							<MenuItem value={"Lubumbashi"}>Lubumbashi</MenuItem>
						</Select>
					</FormControl>
				</div>


			<div className="flex md:grid md:grid-cols-4 gap-8">
				<TextField
					fullWidth
					type={"text"}
					className="col-span-3 md:col-span-2 placeholder:text-gray-400 hover:outline-none focus:ring-0 border border-gray-300 rounded-lg focus:ring-sky"
					label="City"
					placeholder="City"
					name="city"
					variant="outlined"
				/>

				<div className="hidden md:flex">
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">State</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={state}
							label="State"
							onChange={handleState}
						>
							<MenuItem value={"Kinshasa"} selected={true}>Kinshasa</MenuItem>
							<MenuItem value={"Goma"}>Goma</MenuItem>
							<MenuItem value={"Lubumbashi"}>Lubumbashi</MenuItem>
						</Select>
					</FormControl>
				</div>

				<TextField
					fullWidth
					type={"text"}
					className="placeholder:text-gray-400 hover:outline-none focus:ring-0 border border-gray-300 rounded-lg focus:ring-sky"
					label="ZIP"
					name="zip"
					placeholder="ZIP"
					variant="outlined"
				/>
			</div>
		</section>
	)
}