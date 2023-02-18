import { useState } from "react";
import Link from "next/link";
import { CiCircleInfo, CiCircleList, CiWallet } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";
import PropTypes from 'prop-types';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AiOutlineUpload } from "react-icons/ai";
import { TbReceipt } from "react-icons/tb";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";


import '@splidejs/react-splide/css';

import CardHeader from "../../atoms/Card/header";
import DropdownFilter from "../../atoms/Dropdown/Filter";

import avatar from "../../../public/images/avatar.jpg";
import Image from "next/image";


const Wallet = () => {

	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};


	return (
		<div className="p-2 space-y-6 md:py-8 md:px-6 mb-12">
			<CardHeader
				title={"My Wallet"}
				filter={{
					label: {
						title: "Sort By",
						className: "py-1 w-[auto]"
					},
					className: "w-[auto]",
					icon: () => <CiCircleList />,
					items: ["Detail", "Cancel"]
				}}
			/>

			<div className="container">
				<div className="bg-white drop-shadow-sm rounded-lg px-3 py-3">
					<div className="flex flex-row-reverse">
						<DropdownFilter
							icon={() => <HiDotsVertical size={24} className="cursor-pointer text-gray-700" />}
							labelClassName="border-none"
							chevronDown={false}
							items={["Delete", "Edit"]}
							dropClassName="!p-0 mt-10 w-28"
						/>
					</div>

					<div className="flex flex-col md:flex-row gap-6 md:items-center justify-between px-6">
						<div className="flex gap-2 items-center">
							<CiWallet size={80} className="text-sky" />
							<div className="text-gray-700">
								<h1 className="font-semibold text-xl">Main Balance</h1>
								<h3 className="font-bold text-3xl">$673,412.66</h3>
							</div>
						</div>

						<div className="text-sm hidden md:block">
							<span className="uppercase">VALID THRU</span>
							<h6 className="text-gray-700">08/21</h6>
						</div>

						<div className="text-sm hidden md:block">
							<span className="uppercase">Card Holder</span>
							<h6 className="text-gray-700">Peter NDENGO</h6>
						</div>

						<h1 className=" text-gray-900 font-semibold">**** **** **** 1234</h1>

						<span className="w-12 hidden md:block"></span>
					</div>

					<div className="px-6 mt-8 space-y-7">
						<div className="w-full bg-gray-200 rounded-full md:h-7">
							<div className="bg-sky text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[45%] h-full flex items-center justify-center"> 45%</div>
						</div>

						<div className="grid md:grid-cols-2 gap-8 items-center">
							<CardProgress
								color={"text-purple"}
								value={62}
								title={"Installment"}
								amount={"5,412"}
								className={"bg-[#F9F1FC]"}
							/>

							<CardProgress
								color={"text-[#2ABB52]"}
								value={89}
								title={"Investment"}
								amount={"10,916"}
								className={"bg-[#E3F9E9]"}
							/>

							<CardProgress
								color={"text-[#441DE1]"}
								value={41}
								title={"Property"}
								amount={"1,282"}
								className={"bg-[#F4F2FE]"}
							/>

							<Link href={"/learn"} legacyBehavior>
								<button className='border border-sky hover:bg-sky hover:text-white text-sky font-normal h-fit  py-4 md:px-9 px-5 rounded-lg text-lg transition duration-300'>+ New Spends</button>
							</Link>

						</div>
					</div>

				</div>
			</div>

			<div className="space-y-4 bg-white py-8 px-6 drop-shadow-sm rounded-lg">

				<Box sx={{ width: '100%' }}>
					<div className="flex flex-col md:flex-row gap-6 md:gap-0 md:items-center justify-between">
						<div className="space-y-2">
							<h2 className="font-bold text-xl text-gray-700">Payment History</h2>
							<span className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur</span>
						</div>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
								<Tab label="Monthly" {...a11yProps(0)} />
								<Tab label="Weekly" {...a11yProps(1)} />
								<Tab label="Today" {...a11yProps(2)} />
							</Tabs>
						</Box>
					</div>
					<div>
						<TabPanel value={value} index={0} >

							<section className="space-y-6">
								<div tabIndex={0} className="collapse collapse-arrow text-gray-700 overflow-scroll md:overflow-hidden">
									<div className="collapse-title flex gap-7 justify-between items-center ">
										<div className="flex gap-3 items-center">
											<div className="w-16 h-16">
												<Image src={avatar} className="object-cover rounded-full w-full h-full" />
											</div>
											<div>
												<h1 className="font-bold text-xl">Bienvenu Z.</h1>
												<span className="text-xs text-sky font-semibold">bienvenuezig@gmail.com</span>
											</div>
										</div>

										<div className="flex flex-col text-sm font-medium">
											<span>June 1, 2023</span>
											<span>08:22 AM</span>
										</div>

										<h1 className="font-bold text-lg">+$5,532</h1>
										<h1 className="font-bold text-lg">Mastercard</h1>

										<Link href={"/learn"} legacyBehavior>
											<button className='border border-[#2BC155] hover:bg-[#2BC155] hover:text-white text-[#2BC155] font-normal h-fit  py-2 px-3 rounded-lg text-sm transition duration-300'>Completed</button>
										</Link>

									</div>
									<div className="collapse-content flex gap-4">
										<div className="overflow-x-auto w-5/6">
											<table className="table table-zebra text-xs w-full">
												<thead>
													<tr>
														<th>ID Payment</th>
														<th>Payment Method</th>
														<th>Invoice Date</th>
														<th>Due Date</th>
														<th>Date Paid</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th>#00123521</th>
														<td>MasterCard</td>
														<td>April 29, 2020</td>
														<td>June 5, 2020</td>
														<td>June 4, 2020</td>
													</tr>
												</tbody>
											</table>

										</div>
										<span className="w-52 bg-gray-200 h-fit p-2 rounded-lg flex items-center gap-2 text-sm">
											<CiCircleInfo size={45} className="text-gray-400" /> Lorem ipsum dolor sit amet, consectetur
										</span>
									</div>
								</div>

								<div tabIndex={1} className="collapse collapse-arrow text-gray-700 overflow-scroll md:overflow-hidden">
									<div className="collapse-title flex gap-7 justify-between items-center">
										<div className="flex gap-3 items-center">
											<div className="w-16 h-16">
												<Image src={avatar} className="object-cover rounded-full w-full h-full" />
											</div>
											<div>
												<h1 className="font-bold text-xl">Bienvenu Z.</h1>
												<span className="text-xs text-sky font-semibold">bienvenuezig@gmail.com</span>
											</div>
										</div>

										<div className="flex flex-col text-sm font-medium">
											<span>June 1, 2023</span>
											<span>08:22 AM</span>
										</div>

										<h1 className="font-bold text-lg">+$5,532</h1>
										<h1 className="font-bold text-lg">Mastercard</h1>

										<Link href={"/learn"} legacyBehavior>
											<button className='border border-orange hover:bg-orange hover:text-white text-orange font-normal h-fit  py-2 px-3 rounded-lg text-sm transition duration-300'>Pending</button>
										</Link>

									</div>
									<div className="collapse-content flex gap-4">
										<div className="overflow-x-auto w-5/6">
											<table className="table table-zebra text-xs w-full">
												<thead>
													<tr>
														<th>ID Payment</th>
														<th>Payment Method</th>
														<th>Invoice Date</th>
														<th>Due Date</th>
														<th>Date Paid</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th>#00123521</th>
														<td>MasterCard</td>
														<td>April 29, 2020</td>
														<td>June 5, 2020</td>
														<td>June 4, 2020</td>
													</tr>
												</tbody>
											</table>

										</div>
										<span className="w-52 bg-gray-200 h-fit p-2 rounded-lg flex items-center gap-2 text-sm">
											<CiCircleInfo size={45} className="text-gray-400" /> Lorem ipsum dolor sit amet, consectetur
										</span>
									</div>
								</div>
							</section>

						</TabPanel>
						<TabPanel value={value} index={1}>
							<section className="space-y-6">
								<div tabIndex={0} className="collapse collapse-arrow text-gray-700 overflow-scroll md:overflow-hidden">
									<div className="collapse-title flex gap-7 justify-between items-center">
										<div className="flex gap-3 items-center">
											<div className="w-16 h-16">
												<Image src={avatar} className="object-cover rounded-full w-full h-full" />
											</div>
											<div>
												<h1 className="font-bold text-xl">Bienvenu Z.</h1>
												<span className="text-xs text-sky font-semibold">bienvenuezig@gmail.com</span>
											</div>
										</div>

										<div className="flex flex-col text-sm font-medium">
											<span>June 1, 2023</span>
											<span>08:22 AM</span>
										</div>

										<h1 className="font-bold text-lg">+$5,532</h1>
										<h1 className="font-bold text-lg">Mastercard</h1>

										<Link href={"/learn"} legacyBehavior>
											<button className='border border-[#2BC155] hover:bg-[#2BC155] hover:text-white text-[#2BC155] font-normal h-fit  py-2 px-3 rounded-lg text-sm transition duration-300'>Completed</button>
										</Link>

									</div>
									<div className="collapse-content flex gap-4">
										<div className="overflow-x-auto w-5/6">
											<table className="table table-zebra text-xs w-full">
												<thead>
													<tr>
														<th>ID Payment</th>
														<th>Payment Method</th>
														<th>Invoice Date</th>
														<th>Due Date</th>
														<th>Date Paid</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th>#00123521</th>
														<td>MasterCard</td>
														<td>April 29, 2020</td>
														<td>June 5, 2020</td>
														<td>June 4, 2020</td>
													</tr>
												</tbody>
											</table>

										</div>
										<span className="w-52 bg-gray-200 h-fit p-2 rounded-lg flex items-center gap-2 text-sm">
											<CiCircleInfo size={45} className="text-gray-400" /> Lorem ipsum dolor sit amet, consectetur
										</span>
									</div>
								</div>

								<div tabIndex={1} className="collapse collapse-arrow text-gray-700 overflow-scroll md:overflow-hidden">
									<div className="collapse-title flex gap-7 justify-between items-center">
										<div className="flex gap-3 items-center">
											<div className="w-16 h-16">
												<Image src={avatar} className="object-cover rounded-full w-full h-full" />
											</div>
											<div>
												<h1 className="font-bold text-xl">Bienvenu Z.</h1>
												<span className="text-xs text-sky font-semibold">bienvenuezig@gmail.com</span>
											</div>
										</div>

										<div className="flex flex-col text-sm font-medium">
											<span>June 1, 2023</span>
											<span>08:22 AM</span>
										</div>

										<h1 className="font-bold text-lg">+$5,532</h1>
										<h1 className="font-bold text-lg">Mastercard</h1>

										<Link href={"/learn"} legacyBehavior>
											<button className='border border-orange hover:bg-orange hover:text-white text-orange font-normal h-fit  py-2 px-3 rounded-lg text-sm transition duration-300'>Pending</button>
										</Link>

									</div>
									<div className="collapse-content flex gap-4">
										<div className="overflow-x-auto w-5/6">
											<table className="table table-zebra text-xs w-full">
												<thead>
													<tr>
														<th>ID Payment</th>
														<th>Payment Method</th>
														<th>Invoice Date</th>
														<th>Due Date</th>
														<th>Date Paid</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th>#00123521</th>
														<td>MasterCard</td>
														<td>April 29, 2020</td>
														<td>June 5, 2020</td>
														<td>June 4, 2020</td>
													</tr>
												</tbody>
											</table>

										</div>
										<span className="w-52 bg-gray-200 h-fit p-2 rounded-lg flex items-center gap-2 text-sm">
											<CiCircleInfo size={45} className="text-gray-400" /> Lorem ipsum dolor sit amet, consectetur
										</span>
									</div>
								</div>
								<div tabIndex={1} className="collapse collapse-arrow text-gray-700 overflow-scroll md:overflow-hidden">
									<div className="collapse-title flex gap-7 justify-between items-center">
										<div className="flex gap-3 items-center">
											<div className="w-16 h-16">
												<Image src={avatar} className="object-cover rounded-full w-full h-full" />
											</div>
											<div>
												<h1 className="font-bold text-xl">Bienvenu Z.</h1>
												<span className="text-xs text-sky font-semibold">bienvenuezig@gmail.com</span>
											</div>
										</div>

										<div className="flex flex-col text-sm font-medium">
											<span>June 1, 2023</span>
											<span>08:22 AM</span>
										</div>

										<h1 className="font-bold text-lg">+$5,532</h1>
										<h1 className="font-bold text-lg">Mastercard</h1>

										<Link href={"/learn"} legacyBehavior>
											<button className='border border-orange hover:bg-orange hover:text-white text-orange font-normal h-fit  py-2 px-3 rounded-lg text-sm transition duration-300'>Pending</button>
										</Link>

									</div>
									<div className="collapse-content flex gap-4">
										<div className="overflow-x-auto w-5/6">
											<table className="table table-zebra text-xs w-full">
												<thead>
													<tr>
														<th>ID Payment</th>
														<th>Payment Method</th>
														<th>Invoice Date</th>
														<th>Due Date</th>
														<th>Date Paid</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th>#00123521</th>
														<td>MasterCard</td>
														<td>April 29, 2020</td>
														<td>June 5, 2020</td>
														<td>June 4, 2020</td>
													</tr>
												</tbody>
											</table>

										</div>
										<span className="w-52 bg-gray-200 h-fit p-2 rounded-lg flex items-center gap-2 text-sm">
											<CiCircleInfo size={45} className="text-gray-400" /> Lorem ipsum dolor sit amet, consectetur
										</span>
									</div>
								</div>

								<div tabIndex={0} className="collapse collapse-arrow text-gray-700 overflow-scroll md:overflow-hidden">
									<div className="collapse-title flex gap-7 justify-between items-center">
										<div className="flex gap-3 items-center">
											<div className="w-16 h-16">
												<Image src={avatar} className="object-cover rounded-full w-full h-full" />
											</div>
											<div>
												<h1 className="font-bold text-xl">Bienvenu Z.</h1>
												<span className="text-xs text-sky font-semibold">bienvenuezig@gmail.com</span>
											</div>
										</div>

										<div className="flex flex-col text-sm font-medium">
											<span>June 1, 2023</span>
											<span>08:22 AM</span>
										</div>

										<h1 className="font-bold text-lg">+$5,532</h1>
										<h1 className="font-bold text-lg">Mastercard</h1>

										<Link href={"/learn"} legacyBehavior>
											<button className='border border-[#2BC155] hover:bg-[#2BC155] hover:text-white text-[#2BC155] font-normal h-fit  py-2 px-3 rounded-lg text-sm transition duration-300'>Completed</button>
										</Link>

									</div>
									<div className="collapse-content flex gap-4">
										<div className="overflow-x-auto w-5/6">
											<table className="table table-zebra text-xs w-full">
												<thead>
													<tr>
														<th>ID Payment</th>
														<th>Payment Method</th>
														<th>Invoice Date</th>
														<th>Due Date</th>
														<th>Date Paid</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th>#00123521</th>
														<td>MasterCard</td>
														<td>April 29, 2020</td>
														<td>June 5, 2020</td>
														<td>June 4, 2020</td>
													</tr>
												</tbody>
											</table>

										</div>
										<span className="w-52 bg-gray-200 h-fit p-2 rounded-lg flex items-center gap-2 text-sm">
											<CiCircleInfo size={45} className="text-gray-400" /> Lorem ipsum dolor sit amet, consectetur
										</span>
									</div>
								</div>

								<div tabIndex={1} className="collapse collapse-arrow text-gray-700 overflow-scroll md:overflow-hidden">
									<div className="collapse-title flex gap-7 justify-between items-center">
										<div className="flex gap-3 items-center">
											<div className="w-16 h-16">
												<Image src={avatar} className="object-cover rounded-full w-full h-full" />
											</div>
											<div>
												<h1 className="font-bold text-xl">Bienvenu Z.</h1>
												<span className="text-xs text-sky font-semibold">bienvenuezig@gmail.com</span>
											</div>
										</div>

										<div className="flex flex-col text-sm font-medium">
											<span>June 1, 2023</span>
											<span>08:22 AM</span>
										</div>

										<h1 className="font-bold text-lg">+$5,532</h1>
										<h1 className="font-bold text-lg">Mastercard</h1>

										<Link href={"/learn"} legacyBehavior>
											<button className='border border-orange hover:bg-orange hover:text-white text-orange font-normal h-fit  py-2 px-3 rounded-lg text-sm transition duration-300'>Pending</button>
										</Link>

									</div>
									<div className="collapse-content flex gap-4">
										<div className="overflow-x-auto w-5/6">
											<table className="table table-zebra text-xs w-full">
												<thead>
													<tr>
														<th>ID Payment</th>
														<th>Payment Method</th>
														<th>Invoice Date</th>
														<th>Due Date</th>
														<th>Date Paid</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th>#00123521</th>
														<td>MasterCard</td>
														<td>April 29, 2020</td>
														<td>June 5, 2020</td>
														<td>June 4, 2020</td>
													</tr>
												</tbody>
											</table>

										</div>
										<span className="w-52 bg-gray-200 h-fit p-2 rounded-lg flex items-center gap-2 text-sm">
											<CiCircleInfo size={45} className="text-gray-400" /> Lorem ipsum dolor sit amet, consectetur
										</span>
									</div>
								</div>
							</section>
						</TabPanel>
						<TabPanel value={value} index={2}>
							<section className="space-y-6">

								<div tabIndex={0} className="collapse collapse-arrow text-gray-700 overflow-scroll md:overflow-hidden">
									<div className="collapse-title flex gap-7 justify-between items-center">
										<div className="flex gap-3 items-center">
											<div className="w-16 h-16">
												<Image src={avatar} className="object-cover rounded-full w-full h-full" />
											</div>
											<div>
												<h1 className="font-bold text-xl">Bienvenu Z.</h1>
												<span className="text-xs text-sky font-semibold">bienvenuezig@gmail.com</span>
											</div>
										</div>

										<div className="flex flex-col text-sm font-medium">
											<span>June 1, 2023</span>
											<span>08:22 AM</span>
										</div>

										<h1 className="font-bold text-lg">+$5,532</h1>
										<h1 className="font-bold text-lg">Mastercard</h1>

										<Link href={"/learn"} legacyBehavior>
											<button className='border border-gray-300 hover:bg-gray-400 hover:text-white text-gray-400 font-normal h-fit  py-2 px-3 rounded-lg text-sm transition duration-300'>Cancel</button>
										</Link>

									</div>
									<div className="collapse-content flex gap-4">
										<div className="overflow-x-auto w-5/6">
											<table className="table table-zebra text-xs w-full">
												<thead>
													<tr>
														<th>ID Payment</th>
														<th>Payment Method</th>
														<th>Invoice Date</th>
														<th>Due Date</th>
														<th>Date Paid</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th>#00123521</th>
														<td>MasterCard</td>
														<td>April 29, 2020</td>
														<td>June 5, 2020</td>
														<td>June 4, 2020</td>
													</tr>
												</tbody>
											</table>

										</div>
										<span className="w-52 bg-gray-200 h-fit p-2 rounded-lg flex items-center gap-2 text-sm">
											<CiCircleInfo size={45} className="text-gray-400" /> Lorem ipsum dolor sit amet, consectetur
										</span>
									</div>
								</div>

								<div tabIndex={0} className="collapse collapse-arrow text-gray-700 overflow-scroll md:overflow-hidden">
									<div className="collapse-title flex gap-7 justify-between items-center">
										<div className="flex gap-3 items-center">
											<div className="w-16 h-16">
												<Image src={avatar} className="object-cover rounded-full w-full h-full" />
											</div>
											<div>
												<h1 className="font-bold text-xl">Bienvenu Z.</h1>
												<span className="text-xs text-sky font-semibold">bienvenuezig@gmail.com</span>
											</div>
										</div>

										<div className="flex flex-col text-sm font-medium">
											<span>June 1, 2023</span>
											<span>08:22 AM</span>
										</div>

										<h1 className="font-bold text-lg">+$5,532</h1>
										<h1 className="font-bold text-lg">Mastercard</h1>

										<Link href={"/learn"} legacyBehavior>
											<button className='border border-gray-300 hover:bg-gray-400 hover:text-white text-gray-400 font-normal h-fit  py-2 px-3 rounded-lg text-sm transition duration-300'>Cancel</button>
										</Link>

									</div>
									<div className="collapse-content flex gap-4">
										<div className="overflow-x-auto w-5/6">
											<table className="table table-zebra text-xs w-full">
												<thead>
													<tr>
														<th>ID Payment</th>
														<th>Payment Method</th>
														<th>Invoice Date</th>
														<th>Due Date</th>
														<th>Date Paid</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th>#00123521</th>
														<td>MasterCard</td>
														<td>April 29, 2020</td>
														<td>June 5, 2020</td>
														<td>June 4, 2020</td>
													</tr>
												</tbody>
											</table>

										</div>
										<span className="w-52 bg-gray-200 h-fit p-2 rounded-lg flex items-center gap-2 text-sm">
											<CiCircleInfo size={45} className="text-gray-400" /> Lorem ipsum dolor sit amet, consectetur
										</span>
									</div>
								</div>

								<div tabIndex={0} className="collapse collapse-arrow text-gray-700 overflow-scroll md:overflow-hidden">
									<div className="collapse-title flex gap-7 justify-between items-center">
										<div className="flex gap-3 items-center">
											<div className="w-16 h-16">
												<Image src={avatar} className="object-cover rounded-full w-full h-full" />
											</div>
											<div>
												<h1 className="font-bold text-xl">Bienvenu Z.</h1>
												<span className="text-xs text-sky font-semibold">bienvenuezig@gmail.com</span>
											</div>
										</div>

										<div className="flex flex-col text-sm font-medium">
											<span>June 1, 2023</span>
											<span>08:22 AM</span>
										</div>

										<h1 className="font-bold text-lg">+$5,532</h1>
										<h1 className="font-bold text-lg">Mastercard</h1>

										<Link href={"/learn"} legacyBehavior>
											<button className='border border-gray-300 hover:bg-gray-400 hover:text-white text-gray-400 font-normal h-fit  py-2 px-3 rounded-lg text-sm transition duration-300'>Cancel</button>
										</Link>

									</div>
									<div className="collapse-content flex gap-4">
										<div className="overflow-x-auto w-5/6">
											<table className="table table-zebra text-xs w-full">
												<thead>
													<tr>
														<th>ID Payment</th>
														<th>Payment Method</th>
														<th>Invoice Date</th>
														<th>Due Date</th>
														<th>Date Paid</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th>#00123521</th>
														<td>MasterCard</td>
														<td>April 29, 2020</td>
														<td>June 5, 2020</td>
														<td>June 4, 2020</td>
													</tr>
												</tbody>
											</table>

										</div>
										<span className="w-52 bg-gray-200 h-fit p-2 rounded-lg flex items-center gap-2 text-sm">
											<CiCircleInfo size={45} className="text-gray-400" /> Lorem ipsum dolor sit amet, consectetur
										</span>
									</div>
								</div>

								<div tabIndex={0} className="collapse collapse-arrow text-gray-700 overflow-scroll md:overflow-hidden">
									<div className="collapse-title flex gap-7 justify-between items-center">
										<div className="flex gap-3 items-center">
											<div className="w-16 h-16">
												<Image src={avatar} className="object-cover rounded-full w-full h-full" />
											</div>
											<div>
												<h1 className="font-bold text-xl">Bienvenu Z.</h1>
												<span className="text-xs text-sky font-semibold">bienvenuezig@gmail.com</span>
											</div>
										</div>

										<div className="flex flex-col text-sm font-medium">
											<span>June 1, 2023</span>
											<span>08:22 AM</span>
										</div>

										<h1 className="font-bold text-lg">+$5,532</h1>
										<h1 className="font-bold text-lg">Mastercard</h1>

										<Link href={"/learn"} legacyBehavior>
											<button className='border border-[#2BC155] hover:bg-[#2BC155] hover:text-white text-[#2BC155] font-normal h-fit  py-2 px-3 rounded-lg text-sm transition duration-300'>Completed</button>
										</Link>

									</div>
									<div className="collapse-content flex gap-4">
										<div className="overflow-x-auto w-5/6">
											<table className="table table-zebra text-xs w-full">
												<thead>
													<tr>
														<th>ID Payment</th>
														<th>Payment Method</th>
														<th>Invoice Date</th>
														<th>Due Date</th>
														<th>Date Paid</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th>#00123521</th>
														<td>MasterCard</td>
														<td>April 29, 2020</td>
														<td>June 5, 2020</td>
														<td>June 4, 2020</td>
													</tr>
												</tbody>
											</table>

										</div>
										<span className="w-52 bg-gray-200 h-fit p-2 rounded-lg flex items-center gap-2 text-sm">
											<CiCircleInfo size={45} className="text-gray-400" /> Lorem ipsum dolor sit amet, consectetur
										</span>
									</div>
								</div>

								<div tabIndex={1} className="collapse collapse-arrow text-gray-700 overflow-scroll md:overflow-hidden">
									<div className="collapse-title flex gap-7 justify-between items-center">
										<div className="flex gap-3 items-center">
											<div className="w-16 h-16">
												<Image src={avatar} className="object-cover rounded-full w-full h-full" />
											</div>
											<div>
												<h1 className="font-bold text-xl">Bienvenu Z.</h1>
												<span className="text-xs text-sky font-semibold">bienvenuezig@gmail.com</span>
											</div>
										</div>

										<div className="flex flex-col text-sm font-medium">
											<span>June 1, 2023</span>
											<span>08:22 AM</span>
										</div>

										<h1 className="font-bold text-lg">+$5,532</h1>
										<h1 className="font-bold text-lg">Mastercard</h1>

										<Link href={"/learn"} legacyBehavior>
											<button className='border border-orange hover:bg-orange hover:text-white text-orange font-normal h-fit  py-2 px-3 rounded-lg text-sm transition duration-300'>Pending</button>
										</Link>

									</div>
									<div className="collapse-content flex gap-4">
										<div className="overflow-x-auto w-5/6">
											<table className="table table-zebra text-xs w-full">
												<thead>
													<tr>
														<th>ID Payment</th>
														<th>Payment Method</th>
														<th>Invoice Date</th>
														<th>Due Date</th>
														<th>Date Paid</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<th>#00123521</th>
														<td>MasterCard</td>
														<td>April 29, 2020</td>
														<td>June 5, 2020</td>
														<td>June 4, 2020</td>
													</tr>
												</tbody>
											</table>

										</div>
										<span className="w-52 bg-gray-200 h-fit p-2 rounded-lg flex items-center gap-2 text-sm">
											<CiCircleInfo size={45} className="text-gray-400" /> Lorem ipsum dolor sit amet, consectetur
										</span>
									</div>
								</div>
							</section>
						</TabPanel>
					</div>
				</Box>
			</div>

			<div className="grid md:grid-cols-2 gap-3 md:gap-8">
				<div className="bg-gradient-to-r from-sky to-indigo-500 shadow-md rounded-lg p-6 text-white flex items-center gap-7">
					<div className="p-3 bg-white shadow rounded-full">
						<AiOutlineUpload size={30} className="text-sky" />
					</div>

					<h2 className="text-lg font-semibold">Transfert</h2>
				</div>
				<div className="bg-gradient-to-r from-purple to-pink-500 shadow-md rounded-lg p-6 text-white flex items-center gap-7">
					<div className="p-3 bg-white shadow rounded-full">
						<TbReceipt size={30} className="text-purple" />
					</div>

					<h2 className="text-lg font-semibold">Send Voucher</h2>
				</div>
			</div>

			<div className="grid md:grid-cols-2 gap-3 md:gap-8 mt-8">
				<div className="bg-white py-4 px-2 relative drop-shadow-sm rounded-lg space-y-8">
					<div className="flex flex-row gap-6 md:gap-0 md:items-center justify-between px-6">
						<div className="space-y-2">
							<h2 className="font-bold text-xl text-gray-700">Quick Transfer</h2>
							<span className="text-xs text-gray-500 hidden md:flex">Lorem ipsum dolor sit amet, consectetur</span>
						</div>

						<h1 className="text-xl font-semibold">$56,772.38</h1>

					</div>
					<Splide hasTrack={false} aria-label="Attribution"
						options={
							{
								type: "loop",
								perPage: 3,
								breakpoints: {
									1024: {
										perPage: 1,
										gap: 20
									}
								},
								pagination: false,
								gap: 10,
								focus: 'center',
							}
						}
						className="container mx-auto px-8"
					>
						<SplideTrack hasTrack={false}>

							<SplideSlide className="flex flex-col gap-2 items-center justify-center p-3">
								<div className="w-20 h-2O">
									<Image src={avatar} className="object-cover rounded-xl" />
								</div>

								<span className="font-semibold text-sm">Geoffrey M.</span>
								<span className="text-xs font-light">frdrcpeter@gmail.com</span>
							</SplideSlide>

							<SplideSlide className="flex flex-col gap-2 items-center justify-center p-3">
								<div className="w-20 h-2O">
									<Image src={avatar} className="object-cover rounded-xl" />
								</div>

								<span className="font-semibold text-sm">Geoffrey M.</span>
								<span className="text-xs font-light">qwerty@gmail.com</span>
							</SplideSlide>

							<SplideSlide className="flex flex-col gap-2 items-center justify-center p-3">
								<div className="w-20 h-2O">
									<Image src={avatar} className="object-cover rounded-xl" />
								</div>

								<span className="font-semibold text-sm">Bienvenu Z.</span>
								<span className="text-xs font-light">aa12@gmail.com</span>
							</SplideSlide>

							<SplideSlide className="flex flex-col gap-2 items-center justify-center p-3">
								<div className="w-20 h-2O">
									<Image src={avatar} className="object-cover rounded-xl" />
								</div>

								<span className="font-semibold text-sm">Don Moliso</span>
								<span className="text-xs font-light">azerty@gmail.com</span>
							</SplideSlide>

							<SplideSlide className="flex flex-col gap-2 items-center justify-center p-3">
								<div className="w-20 h-2O">
									<Image src={avatar} className="object-cover rounded-xl" />
								</div>

								<span className="font-semibold text-sm">Peter NDENGO</span>
								<span className="text-xs font-light">abc@gmail.com</span>
							</SplideSlide>


						</SplideTrack>

						<div className="splide__arrows">
							<button className="splide__arrow splide__arrow--prev bg-transparent relative !-left-7 top-2 bottom-0 !bg-[#F0F4FD] p-4 text-3xl focus:ring-0">
								<span className="bg-white rounded-full p-1 !text-red-500">
									<BiCaretRight />
								</span>
							</button>
							<button className="splide__arrow splide__arrow--next bg-transparent relative !-right-7 top-2 bottom-0 !bg-[#F0F4FD] p-4 text-3xl focus:ring-0">
								<span className="bg-white rounded-full p-1 !text-red-500">
									<BiCaretRight />
								</span>
							</button>
						</div>

					</Splide>

					<div className="py-3 px-8 flex flex-col md:flex-row items-center justify-center gap-10">
						<h4 className="font-semibold">Amount</h4>
						<form className="w-full">
							<label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Transfer amount</label>
							<div className="relative flex w-full">
								<input type="number" min={10} id="search" name="amount" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-sky focus:border-sky" placeholder="Enter amount" required />
								<button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-sky hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Transfer Now</button>
							</div>
						</form>
					</div>
				</div>

				<div className="bg-white py-4 px-2 relative drop-shadow-sm rounded-lg space-y-8">
					<div className="flex flex-col md:flex-row gap-6 md:gap-0 md:items-center justify-between px-6">
						<div className="space-y-2">
							<h2 className="font-bold text-xl text-gray-700">Voucher Sent</h2>
							<span className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur</span>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default Wallet;

function CardProgress({ color, value, title, amount, className }) {
	return (
		<div className={`${className} py-4 px-4 rounded-lg flex items-center gap-4`}>
			<div className={`radial-progress ${color}`} style={{ "--value": value, "--size": '4rem' }}>{value}%</div>
			<div>
				<h3 className="text-gray-700 font-bold text-sm">{title}</h3>
				<span className="text-sm">${amount}</span>
			</div>
		</div>
	)
}

function TabPanel(props) {
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
