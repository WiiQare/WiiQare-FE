import React, { useState } from "react";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { signIn } from "next-auth/react"

import OnboardingScreen from "../../molecules/OnboardingScreen";
import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Typography,
} from "@mui/material";
import MenuHolder from "../../atoms/MenuHolder";
import BlinkSnackbar from "../../atoms/BlinkSnackbar";
import Image from "next/image";
import { useTranslation, Trans } from 'react-i18next';
import { useFormik } from "formik";
import { useRouter } from 'next/router';
import Toast from "../../atoms/Toast";
import LoadingButton from "../../atoms/Loader/LoadingButton";


function LoginForm() {
	const { t } = useTranslation();
	const matches = useMediaQuery("(max-width: 992px)");
	const [onboardingIsEnd, setOnboardingIsEnd] = React.useState("");
	const [showPassword, setShowPassword] = React.useState(false);
	const [state, setState] = useState({ type: 0, message: '' });
	const [btnClick, setBtnClick] = useState(false);
	const router = useRouter();

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	React.useEffect(() => {
		setOnboardingIsEnd(localStorage.getItem("onboardingIsEnd") || "");
	}, []);

	//Handle Google Login
	const handleGoogleSignIn = async () => {
		//signIn('google', {callbackUrl: "http://localhost:3000"})
		signIn('google', { callbackUrl: "https://wiiqare-unicef.herokuapp.com" })

	}

	const handleLinkedInSignIn = async () => {
		//signIn('linkedin', {callbackUrl: "http://localhost:3000"})
		signIn('linkedin', { callbackUrl: "https://wiiqare-unicef.herokuapp.com" })
	}

	//Sign In for other methods with NextAuth
	const onSubmit = async (values) => {

		let status = await signIn('credentials', {
			redirect: false,
			email: values.email,
			password: values.password,
			callbackUrl: "/"
		})

		if (status.ok) {
			router.push(status.url)
		} else {
			setBtnClick(false)
			
			setState({ type: 2, message: status.error })

			setTimeout(() => {
				setState({ type: 0, message: "" })
			}, 3000);
		}
	}

	const closeToast = () => {
		setState({ type: 0, message: "" })
	}

	// Formik hook
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		onSubmit
	})

	const formHolder = (
		<>
			<div className="form-holder">
				<MenuHolder href="/register" label="SIGN UP" />

				{state.type > 0 ? state.type == 2 ? <Toast type={"danger"} message={state.message} close={closeToast}/> : (state.type == 1 ? <Toast type={"success"} message={state.message} close={closeToast}/> : <></>) : <></>}

				<div className="signin-signup-form">
					<div className="flex flex-col md:w-3/4 w-full border-opacity-50 gap-4">

						<div className="form-items !w-full !max-w-full flex flex-col items-center mx-auto">
							<div className="md:w-3/4 mx-auto">
								<div className="form-title">{t('signIn.title')}</div>
								<Box sx={{ mb: 3, mt: 2 }}></Box>
								<form id="signinform" onSubmit={formik.handleSubmit}>
									<Stack spacing={2}>
										<TextField
											id="outlined-basic"
											fullWidth
											label={t('signIn.field.email')}
											variant="outlined"
											name="email"
											{...formik.getFieldProps('email')}
										/>
										<FormControl fullWidth variant="outlined">
											<InputLabel htmlFor="outlined-basic1">{t('signIn.field.password')}</InputLabel>
											<OutlinedInput
												id="outlined-basic1"
												label={t('signIn.field.email')}
												type={showPassword ? "text" : "password"}
												name="password"
												{...formik.getFieldProps('password')}
												endAdornment={
													<InputAdornment position="end">
														<IconButton
															aria-label="toggle password visibility"
															onClick={handleClickShowPassword}
															edge="end"
														>
															{showPassword ? <VisibilityOff /> : <Visibility />}
														</IconButton>
													</InputAdornment>
												}
											/>
										</FormControl>
										<Box sx={{ textAlign: "right", mb: 2 }}>
											<Typography color="text.secondary" variant="caption">
												<Link href={"/forgot/password"} legacyBehavior>
													<a>
														{t('signIn.forgot')}
													</a>
												</Link>
											</Typography>
										</Box>
										<Box>
											<Button
												size="large"
												variant="contained"
												type="submit"
												className="bg-yellow text-uppercase"
												onClick={() => setBtnClick(true)}
											>

												{btnClick ? (
													<LoadingButton />
												) : t('signIn.buttons.submit')}

											</Button>
										</Box>
									</Stack>
								</form>
							</div>
						</div>

						<div className="divider"><span className="text-gray-400">{t('signIn.buttons.or')}</span></div>

						<div className="flex flex-col md:flex-row gap-4 mb-2">
							<button type="button" className="w-full py-3 flex justify-center items-center gap-4 hover:bg-gray-200 rounded-xl border font-medium" onClick={handleGoogleSignIn}><Image src={"/images/google.svg"} width="20" height="20" alt="Google logo" /> {t('signIn.buttons.google')}</button>
							<button type="button" className="w-full py-3 flex justify-center items-center gap-4 hover:bg-gray-200 rounded-xl border font-medium" onClick={handleLinkedInSignIn}><Image src={"/images/apple.png"} width="25" height="25" alt="Facebook logo" /> {t('signIn.buttons.apple')}</button>
						</div>
					</div>
				</div>
			</div>
			<BlinkSnackbar />
		</>
	);
	return (
		<>
			{matches && !onboardingIsEnd ? (
				<OnboardingScreen
					onStartClick={() => {
						if (typeof window !== "undefined") {
							localStorage.setItem("onboardingIsEnd", "onboardingIsEnd");
						}
						setOnboardingIsEnd("onboardingIsEnd");
					}}
				/>
			) : (
				formHolder
			)}
		</>
	);
}

export default LoginForm;
